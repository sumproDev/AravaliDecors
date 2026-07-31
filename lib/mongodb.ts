import "server-only";

import { MongoClient, type Collection, type Db, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/aravali";
const dbName = process.env.MONGODB_DB || "aravali";

type GlobalMongo = typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

const globalMongo = globalThis as GlobalMongo;

function getClientPromise() {
  if (!globalMongo.mongoClientPromise) {
    const client = new MongoClient(uri);
    globalMongo.mongoClientPromise = client.connect();
  }
  return globalMongo.mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

export function objectId(id: string) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid document id.");
  }
  return new ObjectId(id);
}

export type MongoBase = {
  _id?: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type CollectionDoc = MongoBase & {
  slug: string;
  title: string;
  shortTitle: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  sortOrder: number;
  isPublished: boolean;
};

export type ProductDoc = MongoBase & {
  collectionId: ObjectId;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  sortOrder: number;
  isPublished: boolean;
};

export type ProjectDoc = MongoBase & {
  title: string;
  type: string;
  description: string;
  image: string;
  imageAlt: string;
  sortOrder: number;
  isFeatured: boolean;
  isPublished: boolean;
};

export type TestimonialDoc = MongoBase & {
  name: string;
  location: string;
  quote: string;
  sortOrder: number;
  isPublished: boolean;
};

export type CmsImageDoc = MongoBase & {
  url: string;
  publicId?: string;
  alt: string;
  folder?: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
};

export async function cmsCollections() {
  const db = await getDb();
  return {
    collections: db.collection<CollectionDoc>("collections"),
    products: db.collection<ProductDoc>("products"),
    projects: db.collection<ProjectDoc>("projects"),
    testimonials: db.collection<TestimonialDoc>("testimonials"),
    images: db.collection<CmsImageDoc>("cmsImages"),
  };
}

export async function ensureIndexes() {
  const { collections, products, projects, testimonials, images } = await cmsCollections();
  await Promise.all([
    collections.createIndex({ slug: 1 }, { unique: true }),
    collections.createIndex({ sortOrder: 1, createdAt: 1 }),
    products.createIndex({ collectionId: 1, sortOrder: 1 }),
    projects.createIndex({ sortOrder: 1, createdAt: 1 }),
    testimonials.createIndex({ sortOrder: 1, createdAt: 1 }),
    images.createIndex({ createdAt: -1 }),
  ]);
}

export type MongoCollection<T extends MongoBase> = Collection<T>;
