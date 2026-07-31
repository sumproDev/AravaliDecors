import { cmsCollections } from "@/lib/mongodb";
import { ensureCmsSeeded, serializeImage } from "@/lib/cms/public";

export async function getAdminDashboardData() {
  await ensureCmsSeeded();
  const db = await cmsCollections();

  const [collections, products, projects, testimonials, images] = await Promise.all([
    db.collections.countDocuments(),
    db.products.countDocuments(),
    db.projects.countDocuments(),
    db.testimonials.countDocuments(),
    db.images.countDocuments(),
  ]);

  return { collections, products, projects, testimonials, images };
}

export async function getAdminCollections() {
  await ensureCmsSeeded();
  const db = await cmsCollections();
  const collections = await db.collections.find().sort({ sortOrder: 1, createdAt: 1 }).toArray();
  const allProducts = await db.products.find().sort({ sortOrder: 1, createdAt: 1 }).toArray();

  return collections.map((collection) => ({
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
    products: allProducts
      .filter((product) => product.collectionId.equals(collection._id))
      .map((product) => ({
        id: product._id?.toString() || "",
        collectionId: product.collectionId.toString(),
        name: product.name,
        description: product.description,
        image: product.image,
        imageAlt: product.imageAlt,
        sortOrder: product.sortOrder,
        isPublished: product.isPublished,
      })),
  }));
}

export async function getAdminProjects() {
  await ensureCmsSeeded();
  const db = await cmsCollections();
  return (await db.projects.find().sort({ sortOrder: 1, createdAt: 1 }).toArray()).map((project) => ({
    id: project._id?.toString() || "",
    title: project.title,
    type: project.type,
    description: project.description,
    image: project.image,
    imageAlt: project.imageAlt,
    sortOrder: project.sortOrder,
    isFeatured: project.isFeatured,
    isPublished: project.isPublished,
  }));
}

export async function getAdminTestimonials() {
  await ensureCmsSeeded();
  const db = await cmsCollections();
  return (await db.testimonials.find().sort({ sortOrder: 1, createdAt: 1 }).toArray()).map((testimonial) => ({
    id: testimonial._id?.toString() || "",
    name: testimonial.name,
    location: testimonial.location,
    quote: testimonial.quote,
    sortOrder: testimonial.sortOrder,
    isPublished: testimonial.isPublished,
  }));
}

export async function getAdminImages() {
  await ensureCmsSeeded();
  const db = await cmsCollections();
  return (await db.images.find().sort({ createdAt: -1 }).toArray()).map(serializeImage);
}
