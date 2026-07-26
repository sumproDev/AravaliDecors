export type OfferIcon = "Grid3X3" | "Layers3" | "Bath" | "Columns3" | "Gem" | "PanelsTopLeft";

export interface ProductItem {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProductCollection {
  slug: string;
  title: string;
  shortTitle: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: OfferIcon;
  items: ProductItem[];
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export const productCollections: ProductCollection[] = [
  {
    slug: "floor-wall-tiles",
    title: "Floor & Wall Tiles",
    shortTitle: "Tiles",
    intro: "Tile collections for floors, walls, bathrooms, kitchens, halls and exterior areas.",
    description: "Choose tiles by room, surface, format, finish, grip, maintenance needs and design preference.",
    image: "/images/floor-wall-tiles/hall-living-room-tiles.png",
    imageAlt: "Floor and wall tile samples in multiple colours and finishes",
    icon: "Grid3X3",
    items: [
      { name: "Floor Tiles", description: "Durable vitrified, porcelain and ceramic options for homes and commercial spaces.", image: "/images/floor-wall-tiles/client-floor-tiles-video-still.jpg", imageAlt: "Glossy floor tiles installed at a client project" },
      { name: "Wall Tiles", description: "Easy-care decorative surfaces for bathrooms, kitchens and feature walls.", image: "/images/floor-wall-tiles/client-wall-tiles-video-still.jpg", imageAlt: "Decorative striped wall tiles installed at a client project" },
      { name: "Bathroom Tiles", description: "Coordinated wall tiles and anti-skid floor tiles designed for wet areas.", image: "/images/floor-wall-tiles/client-finished-bathroom-wall-floor-tiles.jpg", imageAlt: "Finished bathroom wall and floor tiles at a client project" },
      { name: "Hall & Living Room Tiles", description: "Large-format and premium-finish tiles for spacious, high-use interiors.", image: "/images/floor-wall-tiles/client-hall-floor-tiles-video-still.jpg", imageAlt: "Polished hall floor tiles installed at a client project" },
      { name: "Kitchen Tiles", description: "Practical backsplash and floor options selected for cleaning and stain resistance.", image: "/images/floor-wall-tiles/kitchen-tiles.webp", imageAlt: "Easy-care kitchen wall and floor tiles" },
      { name: "Outdoor & Parking Tiles", description: "Textured, hard-wearing tiles for balconies, passages, parking and utility areas.", image: "/images/floor-wall-tiles/outdoor-parking-tiles.webp", imageAlt: "Textured outdoor and parking tiles" },
    ],
  },
  {
    slug: "pipes-fittings",
    title: "Pipe & Fittings",
    shortTitle: "Pipes & Fittings",
    intro: "Complete plumbing ranges for water supply, drainage, waste and rainwater applications.",
    description: "Explore compatible pipe systems, fittings and trusted brand ranges for residential and commercial plumbing.",
    image: "/images/pipes-fittings/supreme-products.png",
    imageAlt: "Organized pipe and fitting product collection",
    icon: "Layers3",
    items: [
      { name: "Pipes", description: "General plumbing pipes and compatible fittings for complete system requirements.", image: "/images/pipes-fittings/client-supreme-pvc-pipes-video-still.jpg", imageAlt: "Supreme PVC pipes from client-shared product media" },
      { name: "SWR", description: "Soil, waste and rainwater pipes and fittings for efficient discharge systems.", image: "/images/pipes-fittings/client-supreme-nudrain-video-still.jpg", imageAlt: "Supreme NuDrain drainage system from client-shared product media" },
      { name: "CPVC", description: "Hot and cold water plumbing pipes with coordinated fittings.", image: "/images/pipes-fittings/client-supreme-cpvc-video-still.jpg", imageAlt: "Supreme Lifeline CPVC hot and cold water system" },
      { name: "Cera Sanitaryware", description: "Cera bathroom products available alongside plumbing and fitting requirements.", image: "/images/sanitaryware-faucets/client-cera-basin-showroom-still.jpg", imageAlt: "Cera basin display photographed in the client showroom" },
      { name: "Supreme Products", description: "Supreme pipes, SWR, CPVC and matching fittings for dependable installations.", image: "/images/pipes-fittings/client-supreme-products-video-still.jpg", imageAlt: "Supreme plumbing and drainage product overview" },
    ],
  },
  {
    slug: "sanitaryware-faucets",
    title: "Sanitaryware & Faucet",
    shortTitle: "Sanitaryware",
    intro: "Coordinated sanitaryware, faucets and bathroom fitting collections.",
    description: "Select practical bathroom products by style, size, installation type, water use and finish.",
    image: "/images/sanitaryware-faucets/cera-sanitaryware.jpg",
    imageAlt: "Modern sanitaryware and bathroom faucet collection",
    icon: "Bath",
    items: [
      { name: "Cera Sanitaryware", description: "Trusted sanitaryware collections for complete bathroom requirements.", image: "/images/sanitaryware-faucets/client-cera-basin-showroom-still.jpg", imageAlt: "Cera sanitaryware display in the client showroom" },
      { name: "Wash Basins", description: "Countertop, wall-hung, pedestal and integrated basin options.", image: "/images/sanitaryware-faucets/client-wash-basin-and-wall-tiles.jpg", imageAlt: "Multiple wash basins installed at a client project" },
      { name: "Water Closets", description: "Floor-mounted and wall-hung closet solutions in modern forms.", image: "/images/sanitaryware-faucets/client-bathroom-fixtures-video-still.jpg", imageAlt: "Client bathroom installation with sanitary fixtures" },
      { name: "Faucets", description: "Basin, sink and bath faucets in coordinated finishes and styles.", image: "/images/sanitaryware-faucets/client-cera-faucet-video-still.jpg", imageAlt: "Cera Luxe faucet from client-shared product media" },
      { name: "Showers & Accessories", description: "Shower fittings and essential bathroom accessories for a complete setup.", image: "/images/sanitaryware-faucets/client-sanitaryware-showroom-video-still.jpg", imageAlt: "Sanitaryware and bathroom accessory displays in the client showroom" },
    ],
  },
  {
    slug: "plywood-laminate-doors-frames",
    title: "Plywood, Laminate & Doors/Frames",
    shortTitle: "Plywood & Doors",
    intro: "Core boards, decorative finishes, doors and frames for complete interior work.",
    description: "Compare structural materials and finished surfaces for furniture, storage, kitchens and door systems.",
    image: "/images/plywood-laminate-doors-frames/plywood.jpg",
    imageAlt: "Plywood, laminate, door and frame material samples",
    icon: "Columns3",
    items: [
      { name: "Plywood", description: "Commercial, moisture-resistant and application-specific boards for interior work.", image: "/images/plywood-laminate-doors-frames/plywood.jpg", imageAlt: "Stacked plywood boards for interior work" },
      { name: "Decorative Laminates", description: "Colours, woodgrains, textures and finishes for furniture and wall surfaces.", image: "/images/plywood-laminate-doors-frames/decorative-laminates.jpg", imageAlt: "Decorative laminate finish samples" },
      { name: "Flush Doors", description: "Clean, durable door solutions suitable for residential and commercial interiors.", image: "/images/plywood-laminate-doors-frames/client-wood-finish-flush-door-01.jpg", imageAlt: "Wood-finish flush door installed at a client project" },
      { name: "Decorative Doors", description: "Finished door options selected to coordinate with the interior palette.", image: "/images/plywood-laminate-doors-frames/client-wood-finish-flush-door-02.jpg", imageAlt: "Decorative wood-finish door supplied for a client project" },
      { name: "Door Frames", description: "Strong, accurately finished frames for coordinated door installations.", image: "/images/plywood-laminate-doors-frames/door-frames.jpg", imageAlt: "Wooden door frame profiles" },
    ],
  },
  {
    slug: "tanks",
    title: "Tanks",
    shortTitle: "Tanks",
    intro: "Reliable water storage tanks from trusted Supreme and Vectus ranges.",
    description: "Explore tank options by brand, capacity, construction, durability and water-protection features.",
    image: "/images/tanks/supreme-coppershield.png",
    imageAlt: "Water storage tank product range",
    icon: "Layers3",
    items: [
      { name: "Supreme Siltank", description: "Supreme water storage tanks designed for dependable everyday use.", image: "/images/tanks/supreme-siltank.jpg", imageAlt: "Supreme Siltank water storage tank" },
      { name: "Supreme Coppershield", description: "Premium Supreme tank range with advanced protective features.", image: "/images/tanks/supreme-coppershield.png", imageAlt: "Supreme Coppershield water storage tank" },
      { name: "Vectus Granito", description: "Durable Vectus water storage tanks with a distinctive premium finish.", image: "/images/tanks/vectus-granito.webp", imageAlt: "Vectus Granito water storage tank" },
      { name: "Vectus Smart", description: "Practical Vectus tank range for residential water storage needs.", image: "/images/tanks/vectus-smart.webp", imageAlt: "Vectus Smart water storage tank" },
      { name: "Vectus Safe", description: "Reliable storage tanks focused on safe, hygienic water storage.", image: "/images/tanks/client-vectus-safe-rooftop-video-still.jpg", imageAlt: "Vectus Safe water storage tank installed at a client site" },
    ],
  },
  {
    slug: "adhesives",
    title: "Adhesives",
    shortTitle: "Adhesives",
    intro: "Tile, stone and construction adhesive products for strong, durable installation.",
    description: "Choose the fixing product according to surface, tile or stone type, application area and site conditions.",
    image: "/images/adhesives/berger-products.png",
    imageAlt: "Tile and construction adhesive product range",
    icon: "Gem",
    items: [
      { name: "Berger Adhesives", description: "Berger tile and construction adhesives for selected installation requirements.", image: "/images/adhesives/berger-home-shield-tile-adhesive-plus-bag.jpg", imageAlt: "Berger Home Shield Tile Adhesive Plus client product image" },
      { name: "Ferrous Crete Tile Fixer", description: "Tile-fixing adhesive for secure and consistent tile installation.", image: "/images/adhesives/ferrous-crete-ferro-1111-tile-fixer-bag.jpg", imageAlt: "Ferrous Crete Ferro 1111 tile fixer client product image" },
      { name: "Tile Adhesives", description: "Application-specific fixing solutions for ceramic, vitrified and porcelain tiles.", image: "/images/adhesives/ferrous-crete-tile-adhesive-benefits.jpg", imageAlt: "Ferrous Crete tile adhesive product benefits" },
      { name: "Marble & Granite Adhesives", description: "Bonding products suited to natural and composite stone applications.", image: "/images/adhesives/ferrous-crete-ferro-1130-natural-stone-adhesive.jpg", imageAlt: "Ferrous Crete Ferro 1130 adhesive for natural stone" },
      { name: "Grouts & Supporting Products", description: "Joint fillers and supporting installation products for a clean final finish.", image: "/images/adhesives/ferrous-crete-epoxy-grout-bucket.jpg", imageAlt: "Ferrous Crete epoxy grout client product image" },
    ],
  },
  {
    slug: "composite-granite",
    title: "Composite Granite",
    shortTitle: "Composite Granite",
    intro: "Engineered granite surfaces combining consistent appearance with practical durability.",
    description: "Explore composite granite for counters, vanities, floors, stairs and coordinated architectural details.",
    image: "/images/composite-granite/kitchen-countertops.jpg",
    imageAlt: "Composite granite slabs and finished surface samples",
    icon: "Gem",
    items: [
      { name: "Kitchen Countertops", description: "Durable, easy-care composite granite surfaces for everyday kitchen use.", image: "/images/composite-granite/kitchen-countertops.jpg", imageAlt: "Granite kitchen countertop installation" },
      { name: "Bathroom Vanities", description: "Coordinated vanity surfaces with a clean and consistent finish.", image: "/images/composite-granite/bathroom-vanities.jpg", imageAlt: "Granite bathroom vanity surface" },
      { name: "Flooring", description: "Hard-wearing composite granite options for residential and commercial floors.", image: "/images/composite-granite/client-granite-flooring-video-still.jpg", imageAlt: "Polished granite elevator flooring at a client project" },
      { name: "Stairs & Steps", description: "Strong, refined surfaces for stair treads, risers and landings.", image: "/images/composite-granite/client-black-granite-staircase-01.jpg", imageAlt: "Black granite stairs installed at a client project" },
      { name: "Wall Cladding", description: "Composite granite surfaces for feature walls and architectural highlights.", image: "/images/composite-granite/client-black-granite-elevator-cladding-01.jpg", imageAlt: "Black granite elevator wall cladding at a client project" },
    ],
  },
];

export const categories = [
  ...productCollections.map((collection) => ({
    icon: collection.icon,
    title: collection.title,
    text: collection.intro,
    href: `/products/${collection.slug}`,
    image: collection.image,
  })),
  {
    icon: "PanelsTopLeft" as const,
    title: "Interior Designing",
    text: "Modular kitchens, wardrobes, false ceilings, wall panels and TV cabinets",
    href: "/services",
    image: "/images/products/premium-living.jpg",
  },
];

export const services = [
  { name: "Modular Kitchen", text: "Customized kitchen layouts, storage, materials and finishes planned around everyday use.", image: "/images/services/modular-kitchen.jpg", imageAlt: "Modern modular kitchen with coordinated cabinets and countertops" },
  { name: "Wardrobes", text: "Made-to-fit wardrobe and storage solutions designed for the room and your needs.", image: "/images/services/client-custom-wardrobe-video-still.jpg", imageAlt: "Custom wardrobe installed at a client project" },
  { name: "False Ceiling", text: "Clean ceiling designs that coordinate lighting, services and visual character.", image: "/images/services/client-reception-wall-panel-false-ceiling.jpg", imageAlt: "False ceiling and reception design completed for a client" },
  { name: "Wall Panel", text: "Decorative wall-panel concepts that add texture, warmth and a finished look.", image: "/images/services/client-decorative-pooja-wall-unit.jpg", imageAlt: "Decorative illuminated wall unit completed for a client" },
  { name: "TV Cabinets etc.", text: "Tailored TV cabinets, media walls and related living-room storage solutions.", image: "/images/services/client-tv-console-and-interior-flooring.jpg", imageAlt: "Custom television console and interior flooring at a client project" },
];

export const testimonials = [
  { quote: "The team helped us choose the right wall and floor tiles and explained every option clearly. The final selection looks excellent in our home.", name: "Rajesh Sharma", location: "Purnea" },
  { quote: "We found the pipe fittings, sanitaryware and tank products we needed in one place. The recommendations were practical and transparent.", name: "Meera Kapoor", location: "Katihar" },
  { quote: "Our modular kitchen and wardrobes were planned professionally, with careful attention to storage and finishes.", name: "Amit Verma", location: "Araria" },
];
