import { v2 as cloudinary } from "cloudinary";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { cmsCollections } from "@/lib/mongodb";
import { serializeImage } from "@/lib/cms/public";

export const runtime = "nodejs";

type CloudinaryUploadResult = {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
};

function configureCloudinary() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary environment variables are not configured.");
  }

  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
}

async function uploadBuffer(buffer: Buffer, folder: string) {
  configureCloudinary();

  return new Promise<CloudinaryUploadResult>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
        overwrite: false,
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error("Cloudinary upload failed."));
          return;
        }
        resolve(result as CloudinaryUploadResult);
      },
    );

    stream.end(buffer);
  });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const alt = String(formData.get("alt") || "CMS image").trim();
    const folder = String(formData.get("folder") || "aravali-cms").trim();

    if (!(file instanceof File)) {
      return Response.json({ error: "No image file provided." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return Response.json({ error: "Only image uploads are supported." }, { status: 400 });
    }

    const result = await uploadBuffer(Buffer.from(await file.arrayBuffer()), folder);
    const now = new Date();
    const db = await cmsCollections();
    const insert = await db.images.insertOne({
      url: result.secure_url,
      publicId: result.public_id,
      alt,
      folder,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
      createdAt: now,
      updatedAt: now,
    });
    const image = await db.images.findOne({ _id: insert.insertedId });

    return Response.json({ image: image ? serializeImage(image) : null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
