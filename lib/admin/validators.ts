import { z } from "zod";

const requiredText = z.string().trim().min(1, "Required");
const optionalUrl = z.string().trim().optional().default("");

export const collectionSchema = z.object({
  id: z.string().optional(),
  slug: requiredText.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase words separated by hyphens"),
  title: requiredText,
  shortTitle: requiredText,
  intro: requiredText,
  description: requiredText,
  image: requiredText,
  imageAlt: requiredText,
  icon: requiredText,
  sortOrder: z.coerce.number().int().default(0),
  isPublished: z.coerce.boolean().default(false),
});

export const productSchema = z.object({
  id: z.string().optional(),
  collectionId: requiredText,
  name: requiredText,
  description: requiredText,
  image: requiredText,
  imageAlt: requiredText,
  sortOrder: z.coerce.number().int().default(0),
  isPublished: z.coerce.boolean().default(false),
});

export const projectSchema = z.object({
  id: z.string().optional(),
  title: requiredText,
  type: requiredText,
  description: requiredText,
  image: requiredText,
  imageAlt: requiredText,
  sortOrder: z.coerce.number().int().default(0),
  isFeatured: z.coerce.boolean().default(false),
  isPublished: z.coerce.boolean().default(false),
});

export const testimonialSchema = z.object({
  id: z.string().optional(),
  name: requiredText,
  location: requiredText,
  quote: requiredText,
  sortOrder: z.coerce.number().int().default(0),
  isPublished: z.coerce.boolean().default(false),
});

export const imageSchema = z.object({
  id: z.string().optional(),
  url: requiredText,
  publicId: optionalUrl,
  alt: requiredText,
  folder: optionalUrl,
  width: z.coerce.number().int().optional(),
  height: z.coerce.number().int().optional(),
  format: optionalUrl,
  bytes: z.coerce.number().int().optional(),
});

export function formValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function checkboxValue(formData: FormData, key: string) {
  return formData.get(key) === "on";
}
