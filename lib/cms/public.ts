import { unstable_noStore as noStore } from "next/cache";
import { ObjectId } from "mongodb";
import { defaultCollections, defaultProjects, defaultTestimonials } from "@/lib/cms/defaults";
import { cmsCollections, ensureIndexes, type CmsImageDoc, type CollectionDoc, type ProductDoc, type ProjectDoc, type TestimonialDoc } from "@/lib/mongodb";

let seedPromise: Promise<void> | null = null;

function nowDoc<T extends object>(data: T) {
  const now = new Date();
  return { ...data, createdAt: now, updatedAt: now };
}

export async function ensureCmsSeeded() {
  seedPromise ??= (async () => {
    await ensureIndexes();
    const db = await cmsCollections();
    const [collectionCount, projectCount, testimonialCount] = await Promise.all([
      db.collections.countDocuments(),
      db.projects.countDocuments(),
      db.testimonials.countDocuments(),
    ]);

    if (collectionCount === 0) {
      for (const collection of defaultCollections) {
        const { items, ...collectionData } = collection;
        const created = await db.collections.insertOne(nowDoc({ ...collectionData, isPublished: true }));
        if (items.length > 0) {
          await db.products.insertMany(
            items.map((item) => nowDoc({ ...item, collectionId: created.insertedId, isPublished: true })),
          );
        }
      }
    }

    if (projectCount === 0) {
      await db.projects.insertMany(defaultProjects.map((project) => nowDoc({ ...project, isPublished: true })));
    }

    if (testimonialCount === 0) {
      await db.testimonials.insertMany(defaultTestimonials.map((testimonial) => nowDoc({ ...testimonial, isPublished: true })));
    }
  })();

  await seedPromise;
}

function fallbackCollections() {
  return defaultCollections.map((collection) =>
    serializeCollection(
      {
        _id: new ObjectId(),
        slug: collection.slug,
        title: collection.title,
        shortTitle: collection.shortTitle,
        intro: collection.intro,
        description: collection.description,
        image: collection.image,
        imageAlt: collection.imageAlt,
        icon: collection.icon,
        sortOrder: collection.sortOrder,
        isPublished: true,
        createdAt: new Date(0),
        updatedAt: new Date(0),
      },
      collection.items.map((item) => ({
        _id: new ObjectId(),
        collectionId: new ObjectId(),
        name: item.name,
        description: item.description,
        image: item.image,
        imageAlt: item.imageAlt,
        sortOrder: item.sortOrder,
        isPublished: true,
        createdAt: new Date(0),
        updatedAt: new Date(0),
      })),
    ),
  );
}

function serializeProduct(product: ProductDoc) {
  return {
    id: product._id?.toString() || "",
    collectionId: product.collectionId.toString(),
    name: product.name,
    description: product.description,
    image: product.image,
    imageAlt: product.imageAlt,
    sortOrder: product.sortOrder,
    isPublished: product.isPublished,
  };
}

function serializeCollection(collection: CollectionDoc, products: ProductDoc[] = []) {
  return {
    id: collection._id?.toString() || "",
    slug: collection.slug,
    title: collection.title,
    shortTitle: collection.shortTitle,
    intro: collection.intro,
    description: collection.description,
    image: collection.image,
    imageAlt: collection.imageAlt,
    icon: collection.icon,
    sortOrder: collection.sortOrder,
    isPublished: collection.isPublished,
    products: products.map(serializeProduct),
  };
}

function serializeProject(project: ProjectDoc) {
  return {
    id: project._id?.toString() || "",
    title: project.title,
    type: project.type,
    description: project.description,
    image: project.image,
    imageAlt: project.imageAlt,
    sortOrder: project.sortOrder,
    isFeatured: project.isFeatured,
    isPublished: project.isPublished,
  };
}

function serializeTestimonial(testimonial: TestimonialDoc) {
  return {
    id: testimonial._id?.toString() || "",
    name: testimonial.name,
    location: testimonial.location,
    quote: testimonial.quote,
    sortOrder: testimonial.sortOrder,
    isPublished: testimonial.isPublished,
  };
}

export function serializeImage(image: CmsImageDoc) {
  return {
    id: image._id?.toString() || "",
    url: image.url,
    publicId: image.publicId || "",
    alt: image.alt,
    folder: image.folder || "",
    width: image.width,
    height: image.height,
    format: image.format || "",
    bytes: image.bytes,
  };
}

async function attachProducts(collections: CollectionDoc[], publishedOnly: boolean) {
  const db = await cmsCollections();
  const ids = collections.map((collection) => collection._id).filter((id): id is ObjectId => Boolean(id));
  const products = ids.length
    ? await db.products
        .find({ collectionId: { $in: ids }, ...(publishedOnly ? { isPublished: true } : {}) })
        .sort({ sortOrder: 1, createdAt: 1 })
        .toArray()
    : [];

  return collections.map((collection) =>
    serializeCollection(
      collection,
      products.filter((product) => product.collectionId.equals(collection._id)),
    ),
  );
}

export async function getPublishedCollections() {
  noStore();
  try {
    await ensureCmsSeeded();
    const db = await cmsCollections();
    const collections = await db.collections.find({ isPublished: true }).sort({ sortOrder: 1, createdAt: 1 }).toArray();
    return attachProducts(collections, true);
  } catch {
    return fallbackCollections();
  }
}

export async function getPublishedCollectionBySlug(slug: string) {
  noStore();
  try {
    await ensureCmsSeeded();
    const db = await cmsCollections();
    const collection = await db.collections.findOne({ slug, isPublished: true });
    if (!collection) return null;
    return (await attachProducts([collection], true))[0];
  } catch {
    return fallbackCollections().find((collection) => collection.slug === slug) || null;
  }
}

export async function getPublishedProjects() {
  noStore();
  try {
    await ensureCmsSeeded();
    const db = await cmsCollections();
    return (await db.projects.find({ isPublished: true }).sort({ sortOrder: 1, createdAt: 1 }).toArray()).map(serializeProject);
  } catch {
    return defaultProjects.map((project) =>
      serializeProject({
        _id: new ObjectId(),
        ...project,
        isPublished: true,
        createdAt: new Date(0),
        updatedAt: new Date(0),
      }),
    );
  }
}

export async function getPublishedTestimonials() {
  noStore();
  try {
    await ensureCmsSeeded();
    const db = await cmsCollections();
    return (await db.testimonials.find({ isPublished: true }).sort({ sortOrder: 1, createdAt: 1 }).toArray()).map(serializeTestimonial);
  } catch {
    return defaultTestimonials.map((testimonial) =>
      serializeTestimonial({
        _id: new ObjectId(),
        ...testimonial,
        isPublished: true,
        createdAt: new Date(0),
        updatedAt: new Date(0),
      }),
    );
  }
}

export type CmsCollection = Awaited<ReturnType<typeof getPublishedCollections>>[number];
export type CmsProduct = CmsCollection["products"][number];
export type CmsProject = Awaited<ReturnType<typeof getPublishedProjects>>[number];
export type CmsTestimonial = Awaited<ReturnType<typeof getPublishedTestimonials>>[number];
