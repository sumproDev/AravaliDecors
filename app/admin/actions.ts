"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ZodError } from "zod";
import { loginAdmin, logoutAdmin, requireAdmin } from "@/lib/admin/auth";
import {
  checkboxValue,
  collectionSchema,
  formValue,
  imageSchema,
  productSchema,
  projectSchema,
  testimonialSchema,
} from "@/lib/admin/validators";
import { cmsCollections, objectId } from "@/lib/mongodb";

export type AdminActionState = {
  ok: boolean;
  message: string;
  error: string;
};

const emptyState: AdminActionState = { ok: false, message: "", error: "" };

function revalidateCms() {
  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/projects");
  revalidatePath("/services");
  revalidatePath("/sitemap.xml");
  revalidatePath("/admin", "layout");
}

function timestampsForCreate<T extends object>(data: T) {
  const now = new Date();
  return { ...data, createdAt: now, updatedAt: now };
}

function timestampsForUpdate<T extends object>(data: T) {
  return { ...data, updatedAt: new Date() };
}

function getErrorMessage(error: unknown) {
  if (error instanceof ZodError) {
    return error.issues.map((issue) => `${issue.path.join(".") || "Field"}: ${issue.message}`).join(" ");
  }
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}

async function runAdminAction(message: string, task: () => Promise<void>): Promise<AdminActionState> {
  try {
    await requireAdmin();
    await task();
    revalidateCms();
    return { ok: true, message, error: "" };
  } catch (error) {
    return { ok: false, message: "", error: getErrorMessage(error) };
  }
}

export async function loginAction(_prevState: { error: string }, formData: FormData) {
  const username = formValue(formData, "username");
  const password = formValue(formData, "password");

  if (!(await loginAdmin(username, password))) {
    return { error: "Invalid username or password." };
  }

  redirect("/admin");
}

export async function logoutAction() {
  await logoutAdmin();
  redirect("/admin/login");
}

export async function saveCollectionAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Collection saved successfully.", async () => {
    const db = await cmsCollections();
    const parsed = collectionSchema.parse({
      id: formValue(formData, "id") || undefined,
      slug: formValue(formData, "slug"),
      title: formValue(formData, "title"),
      shortTitle: formValue(formData, "shortTitle"),
      intro: formValue(formData, "intro"),
      description: formValue(formData, "description"),
      image: formValue(formData, "image"),
      imageAlt: formValue(formData, "imageAlt"),
      icon: formValue(formData, "icon"),
      sortOrder: formValue(formData, "sortOrder"),
      isPublished: checkboxValue(formData, "isPublished"),
    });

    const { id, ...data } = parsed;
    if (id) {
      await db.collections.updateOne({ _id: objectId(id) }, { $set: timestampsForUpdate(data) });
    } else {
      await db.collections.insertOne(timestampsForCreate(data));
    }
  });
}

export async function deleteCollectionAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Collection deleted successfully.", async () => {
    const db = await cmsCollections();
    const id = objectId(formValue(formData, "id"));
    await Promise.all([db.products.deleteMany({ collectionId: id }), db.collections.deleteOne({ _id: id })]);
  });
}

export async function saveProductAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Product saved successfully.", async () => {
    const db = await cmsCollections();
    const parsed = productSchema.parse({
      id: formValue(formData, "id") || undefined,
      collectionId: formValue(formData, "collectionId"),
      name: formValue(formData, "name"),
      description: formValue(formData, "description"),
      image: formValue(formData, "image"),
      imageAlt: formValue(formData, "imageAlt"),
      sortOrder: formValue(formData, "sortOrder"),
      isPublished: checkboxValue(formData, "isPublished"),
    });

    const { id, collectionId, ...rest } = parsed;
    const data = { ...rest, collectionId: objectId(collectionId) };
    if (id) {
      await db.products.updateOne({ _id: objectId(id) }, { $set: timestampsForUpdate(data) });
    } else {
      await db.products.insertOne(timestampsForCreate(data));
    }
  });
}

export async function deleteProductAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Product deleted successfully.", async () => {
    const db = await cmsCollections();
    await db.products.deleteOne({ _id: objectId(formValue(formData, "id")) });
  });
}

export async function saveProjectAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Project saved successfully.", async () => {
    const db = await cmsCollections();
    const parsed = projectSchema.parse({
      id: formValue(formData, "id") || undefined,
      title: formValue(formData, "title"),
      type: formValue(formData, "type"),
      description: formValue(formData, "description"),
      image: formValue(formData, "image"),
      imageAlt: formValue(formData, "imageAlt"),
      sortOrder: formValue(formData, "sortOrder"),
      isFeatured: checkboxValue(formData, "isFeatured"),
      isPublished: checkboxValue(formData, "isPublished"),
    });

    const { id, ...data } = parsed;
    if (id) {
      await db.projects.updateOne({ _id: objectId(id) }, { $set: timestampsForUpdate(data) });
    } else {
      await db.projects.insertOne(timestampsForCreate(data));
    }
  });
}

export async function deleteProjectAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Project deleted successfully.", async () => {
    const db = await cmsCollections();
    await db.projects.deleteOne({ _id: objectId(formValue(formData, "id")) });
  });
}

export async function saveTestimonialAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Testimonial saved successfully.", async () => {
    const db = await cmsCollections();
    const parsed = testimonialSchema.parse({
      id: formValue(formData, "id") || undefined,
      name: formValue(formData, "name"),
      location: formValue(formData, "location"),
      quote: formValue(formData, "quote"),
      sortOrder: formValue(formData, "sortOrder"),
      isPublished: checkboxValue(formData, "isPublished"),
    });

    const { id, ...data } = parsed;
    if (id) {
      await db.testimonials.updateOne({ _id: objectId(id) }, { $set: timestampsForUpdate(data) });
    } else {
      await db.testimonials.insertOne(timestampsForCreate(data));
    }
  });
}

export async function deleteTestimonialAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Testimonial deleted successfully.", async () => {
    const db = await cmsCollections();
    await db.testimonials.deleteOne({ _id: objectId(formValue(formData, "id")) });
  });
}

export async function saveImageAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Image saved successfully.", async () => {
    const db = await cmsCollections();
    const parsed = imageSchema.parse({
      id: formValue(formData, "id") || undefined,
      url: formValue(formData, "url"),
      publicId: formValue(formData, "publicId"),
      alt: formValue(formData, "alt"),
      folder: formValue(formData, "folder"),
      width: formValue(formData, "width") || undefined,
      height: formValue(formData, "height") || undefined,
      format: formValue(formData, "format"),
      bytes: formValue(formData, "bytes") || undefined,
    });

    const { id, ...data } = parsed;
    if (id) {
      await db.images.updateOne({ _id: objectId(id) }, { $set: timestampsForUpdate(data) });
    } else {
      await db.images.insertOne(timestampsForCreate(data));
    }
  });
}

export async function deleteImageAction(_state: AdminActionState = emptyState, formData: FormData) {
  return runAdminAction("Image deleted successfully.", async () => {
    const db = await cmsCollections();
    await db.images.deleteOne({ _id: objectId(formValue(formData, "id")) });
  });
}
