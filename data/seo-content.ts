export type SeoContentPage = {
  slug: string;
  title: string;
  shortTitle: string;
  primaryKeyword: string;
  metaDescription: string;
  location: string;
  service: string;
  category: string;
  image: string;
  imageAlt: string;
  intent: string;
  sections: { heading: string; body: string; points: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedKeywords: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  primaryKeyword: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string; points: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedKeywords: string[];
};

const cityCopy: Record<string, string> = {
  Purnia: "Purnea, also searched locally as Purnia",
  Katihar: "Katihar and nearby Bihar",
};

const localSeeds = [
  ["best-tiles-in-purnia", "Best Tiles in Purnia", "tiles", "Floor & Wall Tiles", "Tiles for floors, walls, bathrooms, kitchens and outdoor areas.", "/images/floor-wall-tiles/hall-living-room-tiles.png", "Floor and wall tiles showroom collection", "compare tile collections by finish, room and budget"],
  ["best-floor-tiles-in-purnia", "Best Floor Tiles in Purnia", "floor tiles", "Floor & Wall Tiles", "Durable floor tiles for homes, shops and commercial spaces.", "/images/floor-wall-tiles/client-floor-tiles-video-still.jpg", "Glossy floor tiles installed at a client project", "choose durable floor tiles for high-use spaces"],
  ["best-wall-tiles-in-purnia", "Best Wall Tiles in Purnia", "wall tiles", "Floor & Wall Tiles", "Decorative and easy-care wall tiles for bathrooms, kitchens and feature walls.", "/images/floor-wall-tiles/client-wall-tiles-video-still.jpg", "Decorative wall tiles installed at a client project", "select wall tiles by pattern, finish and cleaning needs"],
  ["best-bathroom-tiles-in-purnia", "Best Bathroom Tiles in Purnia", "bathroom tiles", "Floor & Wall Tiles", "Bathroom wall and anti-skid floor tile options for wet areas.", "/images/floor-wall-tiles/client-finished-bathroom-wall-floor-tiles.jpg", "Finished bathroom wall and floor tiles", "plan bathroom tiles with grip and water resistance"],
  ["best-kitchen-tiles-in-purnia", "Best Kitchen Tiles in Purnia", "kitchen tiles", "Floor & Wall Tiles", "Kitchen wall, backsplash and floor tiles selected for stain resistance.", "/images/floor-wall-tiles/kitchen-tiles.webp", "Kitchen tile design and surface sample", "compare kitchen tile surfaces for easy maintenance"],
  ["best-parking-tiles-in-purnia", "Best Parking Tiles in Purnia", "parking tiles", "Floor & Wall Tiles", "Outdoor and parking tiles with practical grip and strength.", "/images/floor-wall-tiles/outdoor-parking-tiles.webp", "Outdoor and parking tile surface", "choose parking tiles for exterior load and grip"],
  ["best-granite-in-purnia", "Best Granite in Purnia", "granite", "Composite Granite", "Granite and stone-look surfaces for counters, stairs, floors and wall cladding.", "/images/composite-granite/client-black-granite-staircase-01.jpg", "Black granite stairs installed at a client project", "compare granite applications and finishes"],
  ["best-composite-granite-in-purnia", "Best Composite Granite in Purnia", "composite granite", "Composite Granite", "Composite granite options for counters, vanities, floors and architectural details.", "/images/composite-granite/flooring.jpg", "Composite granite countertop installation", "select composite granite by application and durability"],
  ["best-marble-shop-in-purnia", "Best Marble Shop in Purnia", "marble shop", "Composite Granite", "Material guidance for marble, granite and tile surfaces.", "/images/products/marble-tile-collection-v2.png", "Marble and tile product collection", "find a marble and surface-material showroom"],
  ["best-interior-designer-in-purnia", "Best Interior Designer in Purnia", "interior designer", "Interior Designing", "Interior design planning for modular kitchens, wardrobes, TV units and wall panels.", "/images/products/premium-living.jpg", "Premium living room interior material palette", "plan interiors with materials and execution guidance"],
  ["best-modular-kitchen-in-purnia", "Best Modular Kitchen in Purnia", "modular kitchen", "Interior Designing", "Modular kitchen planning with storage, material and finish guidance.", "/images/services/modular-kitchen.jpg", "Modern modular kitchen with cabinets and countertops", "design a modular kitchen for storage and workflow"],
  ["best-wardrobe-designer-in-purnia", "Best Wardrobe Designer in Purnia", "wardrobe designer", "Interior Designing", "Custom wardrobe planning for bedrooms and storage spaces.", "/images/services/client-custom-wardrobe-video-still.jpg", "Custom wardrobe installed at a client project", "plan wardrobe storage, shutters and internal layout"],
  ["best-tv-cabinet-design-in-purnia", "Best TV Cabinet Design in Purnia", "TV cabinet design", "Interior Designing", "TV cabinet and media wall design for living rooms.", "/images/services/client-tv-console-and-interior-flooring.jpg", "Custom television console and interior flooring", "design TV cabinets and media units"],
  ["best-wall-panel-design-in-purnia", "Best Wall Panel Design in Purnia", "wall panel design", "Interior Designing", "Decorative wall panel ideas for living rooms, pooja areas and feature walls.", "/images/services/client-decorative-pooja-wall-unit.jpg", "Decorative illuminated wall unit", "choose wall panels by texture and room mood"],
  ["best-false-ceiling-in-purnia", "Best False Ceiling in Purnia", "false ceiling", "Interior Designing", "False ceiling planning for lighting, proportion and room finish.", "/images/services/client-reception-wall-panel-false-ceiling.jpg", "False ceiling and reception wall panel design", "plan false ceilings with lighting and finish"],
  ["best-plywood-shop-in-purnia", "Best Plywood Shop in Purnia", "plywood shop", "Plywood, Laminate & Doors", "Plywood options for wardrobes, kitchens, doors and furniture work.", "/images/plywood-laminate-doors-frames/plywood.jpg", "Stacked plywood boards for interior work", "select plywood by application and durability"],
  ["best-laminate-shop-in-purnia", "Best Laminate Shop in Purnia", "laminate shop", "Plywood, Laminate & Doors", "Decorative laminate finishes for cabinets, doors and wall surfaces.", "/images/plywood-laminate-doors-frames/decorative-laminates.jpg", "Decorative laminate finish samples", "match laminate color, texture and maintenance"],
  ["best-flush-doors-in-purnia", "Best Flush Doors in Purnia", "flush doors", "Plywood, Laminate & Doors", "Flush door and decorative door options for residential interiors.", "/images/plywood-laminate-doors-frames/client-wood-finish-flush-door-01.jpg", "Wood finish flush door at a client project", "choose flush doors by finish and usage"],
  ["best-door-frames-in-purnia", "Best Door Frames in Purnia", "door frames", "Plywood, Laminate & Doors", "Door frame options for coordinated interior installation.", "/images/plywood-laminate-doors-frames/door-frames.jpg", "Wooden door frame profiles", "select door frames for fit and finish"],
  ["best-sanitaryware-in-purnia", "Best Sanitaryware in Purnia", "sanitaryware", "Sanitaryware & Faucet", "Sanitaryware collections for bathrooms, wash areas and new homes.", "/images/sanitaryware-faucets/cera-sanitaryware.jpg", "Modern sanitaryware and faucet collection", "compare sanitaryware by size and style"],
  ["best-faucets-in-purnia", "Best Faucets in Purnia", "faucets", "Sanitaryware & Faucet", "Bathroom and kitchen faucet options in coordinated styles.", "/images/sanitaryware-faucets/client-cera-faucet-video-still.jpg", "Cera faucet product display", "choose faucets by finish and water use"],
  ["best-wash-basins-in-purnia", "Best Wash Basins in Purnia", "wash basins", "Sanitaryware & Faucet", "Countertop, wall-hung and pedestal wash basin options.", "/images/sanitaryware-faucets/client-wash-basin-and-wall-tiles.jpg", "Wash basins installed with wall tiles", "select wash basins by size and mounting"],
  ["best-water-closets-in-purnia", "Best Water Closets in Purnia", "water closets", "Sanitaryware & Faucet", "Water closet options for modern bathroom planning.", "/images/sanitaryware-faucets/water-closets.jpg", "Water closet sanitaryware product", "choose water closets by installation type"],
  ["best-pipes-and-fittings-in-purnia", "Best Pipes and Fittings in Purnia", "pipes and fittings", "Pipe & Fittings", "Plumbing pipe and fitting ranges for residential and commercial projects.", "/images/pipes-fittings/supreme-products.png", "Pipe and fitting product collection", "buy compatible plumbing systems"],
  ["best-cpvc-pipes-in-purnia", "Best CPVC Pipes in Purnia", "CPVC pipes", "Pipe & Fittings", "CPVC pipe options for hot and cold water plumbing.", "/images/pipes-fittings/client-supreme-cpvc-video-still.jpg", "Supreme CPVC hot and cold water system", "select CPVC pipes for plumbing work"],
  ["best-swr-pipes-in-purnia", "Best SWR Pipes in Purnia", "SWR pipes", "Pipe & Fittings", "SWR pipe and fitting options for drainage and rainwater systems.", "/images/pipes-fittings/client-supreme-nudrain-video-still.jpg", "Supreme NuDrain drainage system", "choose SWR pipes for drainage"],
  ["best-water-tanks-in-purnia", "Best Water Tanks in Purnia", "water tanks", "Tanks", "Water storage tank options for homes and commercial use.", "/images/tanks/client-vectus-safe-rooftop-video-still.jpg", "Water storage tank installed at a client site", "select a tank by capacity and durability"],
  ["best-supreme-water-tanks-in-purnia", "Best Supreme Water Tanks in Purnia", "Supreme water tanks", "Tanks", "Supreme water tank options for everyday storage needs.", "/images/tanks/supreme-coppershield.png", "Supreme Coppershield water storage tank", "compare Supreme tank ranges"],
  ["best-vectus-water-tanks-in-purnia", "Best Vectus Water Tanks in Purnia", "Vectus water tanks", "Tanks", "Vectus water tank options for safe rooftop storage.", "/images/tanks/vectus-safe.webp", "Vectus Safe water storage tank", "compare Vectus tank features"],
  ["best-tile-adhesive-in-purnia", "Best Tile Adhesive in Purnia", "tile adhesive", "Adhesives", "Tile and stone adhesive options for strong installation.", "/images/adhesives/ferrous-crete-tile-adhesive-benefits.jpg", "Tile adhesive product benefits", "select adhesive by tile and surface"],
  ["best-grout-in-purnia", "Best Grout in Purnia", "grout", "Adhesives", "Grout and supporting products for tile joints and finishing.", "/images/adhesives/ferrous-crete-epoxy-grout-bucket.jpg", "Epoxy grout bucket product", "choose grout by joint and use area"],
  ["tiles-shop-in-katihar", "Tiles Shop in Katihar", "tiles shop in Katihar", "Floor & Wall Tiles", "Tile selection support for homes and projects around Katihar.", "/images/floor-wall-tiles/client-hall-floor-tiles-video-still.jpg", "Hall floor tile installation", "find tiles for Katihar projects"],
  ["interior-designer-in-katihar", "Interior Designer in Katihar", "interior designer in Katihar", "Interior Designing", "Interior material and design guidance for Katihar homes.", "/images/services/client-custom-office-desk-cabinetry.jpg", "Custom office desk cabinetry", "plan interiors near Katihar"],
  ["modular-kitchen-in-katihar", "Modular Kitchen in Katihar", "modular kitchen in Katihar", "Interior Designing", "Modular kitchen planning and surface selection for Katihar projects.", "/images/applications/kitchen.jpg", "Kitchen interior application", "plan modular kitchens near Katihar"],
] as const;

const blogSeeds = [
  ["how-to-choose-floor-tiles-for-home-purnia", "How to Choose Floor Tiles for a Home in Purnia", "choose floor tiles Purnia", "A practical guide to floor tile finish, size, grip, maintenance and budget for homes in Purnea.", "/images/floor-wall-tiles/floor-tiles.jpg", "Floor tile surface sample"],
  ["bathroom-tiles-design-ideas-purnia", "Bathroom Tiles Design Ideas for Purnia Homes", "bathroom tiles design Purnia", "Bathroom tile ideas for walls, floors, niches, anti-skid areas and easy cleaning.", "/images/floor-wall-tiles/bathroom-tiles.webp", "Bathroom tile design sample"],
  ["kitchen-tiles-vs-granite-countertops", "Kitchen Tiles vs Granite Countertops", "kitchen tiles vs granite", "Compare kitchen tiles and granite countertops by durability, cleaning, cost and design.", "/images/composite-granite/flooring.jpg", "Composite granite countertop installation"],
  ["modular-kitchen-planning-checklist-purnia", "Modular Kitchen Planning Checklist for Purnia", "modular kitchen checklist Purnia", "Checklist for storage, countertop, backsplash, plumbing and electrical planning.", "/images/services/modular-kitchen.jpg", "Modern modular kitchen design"],
  ["wardrobe-design-ideas-for-small-bedrooms", "Wardrobe Design Ideas for Small Bedrooms", "wardrobe design ideas", "Space-saving wardrobe ideas for compact bedrooms, internal storage and finishes.", "/images/services/client-custom-wardrobe-video-still.jpg", "Custom wardrobe design"],
  ["false-ceiling-design-guide-purnia", "False Ceiling Design Guide for Purnia Homes", "false ceiling design Purnia", "False ceiling planning tips for lighting, fan points, room height and finishes.", "/images/services/client-reception-wall-panel-false-ceiling.jpg", "False ceiling and wall panel design"],
  ["pvc-cpvc-pipes-buying-guide", "PVC and CPVC Pipes Buying Guide", "PVC CPVC pipes buying guide", "Understand pipe applications, fittings compatibility and plumbing selection basics.", "/images/pipes-fittings/supreme-products.png", "Pipe and fitting product range"],
  ["water-tank-selection-guide-bihar", "Water Tank Selection Guide for Bihar Homes", "water tank selection Bihar", "How to choose water tank capacity, material, placement and trusted brands.", "/images/tanks/client-vectus-safe-rooftop-video-still.jpg", "Rooftop water storage tank"],
  ["sanitaryware-buying-guide-for-new-home", "Sanitaryware Buying Guide for a New Home", "sanitaryware buying guide", "Plan wash basins, water closets, faucets and bathroom accessories with confidence.", "/images/sanitaryware-faucets/cera-sanitaryware.jpg", "Sanitaryware and faucet display"],
  ["tile-adhesive-vs-cement", "Tile Adhesive vs Cement for Tile Fixing", "tile adhesive vs cement", "Learn when tile adhesive is better than cement for wall, floor and stone installation.", "/images/adhesives/ferrous-crete-tile-fixer.jpg", "Tile fixer adhesive product"],
  ["granite-countertop-maintenance-tips", "Granite Countertop Maintenance Tips", "granite countertop maintenance", "Simple cleaning and care tips for granite and composite granite countertops.", "/images/composite-granite/bathroom-vanities.jpg", "Granite bathroom vanity surface"],
  ["wall-panel-design-ideas", "Wall Panel Design Ideas for Living Rooms", "wall panel design ideas", "Ideas for decorative wall panels, TV backdrops, pooja units and accent surfaces.", "/images/services/wall-panel.jpg", "Decorative wall panel design"],
  ["parking-tiles-buying-guide", "Parking Tiles Buying Guide", "parking tiles buying guide", "Choose parking tiles by grip, load, texture, drainage and exterior maintenance.", "/images/floor-wall-tiles/outdoor-parking-tiles.webp", "Outdoor parking tile surface"],
  ["laminate-and-plywood-selection-guide", "Laminate and Plywood Selection Guide", "laminate plywood selection", "Pick plywood and laminate combinations for wardrobes, kitchens and doors.", "/images/plywood-laminate-doors-frames/decorative-laminates.jpg", "Decorative laminate samples"],
  ["interior-design-budget-planning-purnia", "Interior Design Budget Planning in Purnia", "interior design budget Purnia", "Budget planning tips for modular kitchens, wardrobes, ceilings and surface materials.", "/images/products/premium-living.jpg", "Interior design material palette"],
  ["showroom-visit-checklist-for-tiles-and-interiors", "Showroom Visit Checklist for Tiles and Interiors", "tiles showroom checklist", "What to carry and compare when visiting a tile, sanitaryware or interior showroom.", "/images/about/showroom.jpg", "Aravali Marbles showroom exterior"],
] as const;

function createLocalPage(seed: (typeof localSeeds)[number]): SeoContentPage {
  const [slug, title, primaryKeyword, category, description, image, imageAlt, intent] = seed;
  const location = slug.endsWith("katihar") ? "Katihar" : "Purnia";
  const service = title.replace(/^(Best |Tiles Shop in |Interior Designer in |Modular Kitchen in )/, "");

  return {
    slug,
    title,
    shortTitle: service,
    primaryKeyword,
    metaDescription: `${title}: ${description} Visit Aravali Marbles for guided selection in ${cityCopy[location]}.`.slice(0, 158),
    location,
    service,
    category,
    image,
    imageAlt,
    intent,
    sections: [
      {
        heading: `${title} - What to Compare`,
        body: `When people search for ${primaryKeyword}, they usually need clarity on quality, finish, availability and fit for the actual site. Aravali Marbles helps homeowners, contractors and commercial buyers compare ${service.toLowerCase()} options with practical guidance for ${cityCopy[location]}.`,
        points: [
          `Compare ${service.toLowerCase()} by room, application, finish and maintenance.`,
          "Review product suitability for homes, shops, showrooms and renovation sites.",
          "Check stock, brand options and matching materials before final selection.",
          "Bring measurements or photos so the team can suggest practical combinations.",
        ],
      },
      {
        heading: `Why Aravali Marbles for ${service}`,
        body: `The showroom brings together tiles, sanitaryware, pipes, plywood, tanks, adhesives, composite granite and interior design support in one place. That helps avoid mismatched products and makes project planning easier.`,
        points: [
          "Multiple categories are available for coordinated selection.",
          "Guidance is based on usage, budget, design style and site condition.",
          "Support is available for both product selection and interior execution planning.",
          "Service coverage includes Purnea, Katihar and nearby Bihar locations.",
        ],
      },
      {
        heading: `Planning Tips Before You Buy ${service}`,
        body: `A better selection starts with the right brief. Share the surface area, room type, expected traffic, water exposure, preferred look and timeline so recommendations stay accurate.`,
        points: [
          "Measure the site and add extra quantity for cutting and wastage.",
          "Shortlist finishes under natural and indoor lighting before finalizing.",
          "Ask about compatible adhesives, fittings, trims or support materials.",
          "Confirm delivery timing and installation sequence before work starts.",
        ],
      },
    ],
    faqs: [
      {
        question: `Where can I find ${primaryKeyword} near ${location}?`,
        answer: `Aravali Marbles supports ${primaryKeyword} enquiries for ${cityCopy[location]} with product selection, availability guidance and related material suggestions.`,
      },
      {
        question: `How do I choose the right ${service.toLowerCase()}?`,
        answer: `Start with the room, surface, budget, preferred finish and maintenance expectations. The showroom team can then compare suitable options.`,
      },
      {
        question: "Can I ask for a quote before visiting?",
        answer: "Yes. Share photos, measurements, product category and project location through the enquiry form or WhatsApp for an initial discussion.",
      },
    ],
    relatedKeywords: [
      primaryKeyword,
      `${service.toLowerCase()} near me`,
      `${category.toLowerCase()} ${location}`,
      `Aravali Marbles ${location}`,
      `${service.toLowerCase()} showroom`,
    ],
  };
}

function createBlogPost(seed: (typeof blogSeeds)[number]): BlogPost {
  const [slug, title, primaryKeyword, metaDescription, image, imageAlt] = seed;
  const topic = title.replace(/ in Purnia| for Purnia Homes| for Bihar Homes/g, "");

  return {
    slug,
    title,
    primaryKeyword,
    metaDescription,
    image,
    imageAlt,
    readTime: "5 min read",
    intro: `This guide explains ${primaryKeyword} in practical terms for homeowners, contractors and renovation planners comparing products at Aravali Marbles.`,
    sections: [
      {
        heading: `Start with the room and use case`,
        body: `Good product selection depends on where the material will be used. A kitchen, bathroom, bedroom, terrace, showroom and office all need different priorities.`,
        points: [
          "Note water exposure, foot traffic, cleaning frequency and expected durability.",
          "Carry room dimensions, photos and inspiration references when visiting the showroom.",
          "Compare finishes in person because color and texture change with lighting.",
        ],
      },
      {
        heading: `Balance design with maintenance`,
        body: `${topic} should look good after installation and remain practical after daily use. Maintenance expectations are just as important as first impression.`,
        points: [
          "Choose textures, colors and surfaces that match the user's routine.",
          "Ask which support materials, adhesives or fittings are compatible.",
          "Keep a small reserve quantity for future repairs or changes.",
        ],
      },
      {
        heading: `Discuss availability and budget early`,
        body: `Availability, brand range and installation timing can affect project decisions. Early discussion avoids last-minute substitutions and helps keep the site moving.`,
        points: [
          "Ask for comparable options in good, better and premium ranges.",
          "Confirm delivery timing before booking labor or installation.",
          "Use the enquiry form to share measurements before visiting.",
        ],
      },
    ],
    faqs: [
      {
        question: `Is this ${primaryKeyword} guide useful for Purnea and Katihar projects?`,
        answer: "Yes. The selection principles apply to homes, shops and commercial projects across Purnea, Katihar and nearby Bihar.",
      },
      {
        question: "Can Aravali Marbles help compare options?",
        answer: "Yes. The team can compare products by application, finish, durability, budget and availability.",
      },
    ],
    relatedKeywords: [
      primaryKeyword,
      "Aravali Marbles",
      "tiles in Purnia",
      "interior design Purnia",
      "home renovation materials Bihar",
    ],
  };
}

export const seoLandingPages = localSeeds.map(createLocalPage);
export const blogPosts = blogSeeds.map(createBlogPost);

export const allSeoRoutes = [
  ...seoLandingPages.map((page) => `/${page.slug}`),
  "/blog",
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const seoAuditActionPoints = [
  "Use primary keywords consistently in titles, descriptions, H1/H2 headings and body copy.",
  "Increase useful text content so important pages are not treated as thin content.",
  "Add descriptive image alt text across new and existing visual content.",
  "Publish local landing pages for high-intent Purnia and Katihar searches.",
  "Publish practical blog guides around tiles, interiors, plumbing, sanitaryware, tanks and adhesives.",
  "Add LocalBusiness schema and keep sitemap coverage complete.",
  "Avoid exposing plain email text where a contact form or WhatsApp enquiry can work better.",
  "Improve authority with real local citations, supplier listings and relevant backlinks.",
];
