import { productCollections, services, testimonials } from "@/data/site-data";

export const defaultCollections = [
  ...productCollections.map((collection, collectionIndex) => ({
    ...collection,
    sortOrder: collectionIndex,
    items: collection.items.map((item, itemIndex) => ({ ...item, sortOrder: itemIndex })),
  })),
  {
    slug: "interior-designing",
    title: "Interior Designing",
    shortTitle: "Interiors",
    intro: "Modular kitchens, wardrobes, false ceilings, wall panels and TV cabinets.",
    description: "Plan focused interiors around storage, finishes, lighting, wall details and practical daily use.",
    image: "/images/products/premium-living.jpg",
    imageAlt: "Premium living room interior material palette",
    icon: "PanelsTopLeft",
    sortOrder: productCollections.length,
    items: services.map((service, serviceIndex) => ({
      name: service.name,
      description: service.text,
      image: service.image,
      imageAlt: service.imageAlt,
      sortOrder: serviceIndex,
    })),
  },
];

export const defaultProjects = [
  {
    title: "Bookmatched Living-Room Feature",
    type: "Marble wall application",
    image: "/images/products/marble-wall.jpg",
    imageAlt: "Bookmatched marble-look living room feature wall",
    description:
      "Large marble-look surfaces create continuity behind media units and statement walls when veins, joints and lighting are planned together.",
    isFeatured: true,
  },
  {
    title: "Warm Bedroom Flooring",
    type: "SPC and resilient flooring",
    image: "/images/products/bedroom-flooring.jpg",
    imageAlt: "Warm bedroom flooring material direction",
    description:
      "Timber-look flooring brings warmth underfoot while supporting practical cleaning and a calm, coordinated bedroom palette.",
    isFeatured: false,
  },
  {
    title: "Granite Wall & Floor Gallery",
    type: "Natural stone application",
    image: "/images/products/granite-wall-floor-v2.png",
    imageAlt: "Granite wall and floor gallery direction",
    description:
      "Contrasting granite finishes can define wall and floor planes while keeping colour and mineral texture visually connected.",
    isFeatured: false,
  },
  {
    title: "Refined Bathroom Surfaces",
    type: "Tiles and vanity finishes",
    image: "/images/products/bathroom.jpg",
    imageAlt: "Refined bathroom tile and vanity surface direction",
    description:
      "A restrained combination of wall tile, safer floor finish and vanity surface gives wet areas clarity and long-term practicality.",
    isFeatured: false,
  },
  {
    title: "Commercial Statement Interior",
    type: "High-impact surfaces",
    image: "/images/products/premium-living.jpg",
    imageAlt: "Commercial premium interior surface direction",
    description:
      "Durable large-format materials and controlled feature surfaces support a premium identity in customer-facing environments.",
    isFeatured: false,
  },
  {
    title: "Textured Office Environment",
    type: "Panels and resilient floors",
    image: "/images/applications/office.jpg",
    imageAlt: "Textured office wall and flooring direction",
    description:
      "Wall rhythm, low-maintenance flooring and neutral stone tones can give workplaces depth without visual distraction.",
    isFeatured: true,
  },
].map((project, index) => ({ ...project, sortOrder: index }));

export const defaultTestimonials = testimonials.map((testimonial, index) => ({
  ...testimonial,
  sortOrder: index,
}));
