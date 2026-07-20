export type ProductCategory =
  | "Granite & Stone"
  | "Tiles"
  | "PVC Panels"
  | "Marble Sheets"
  | "Flooring"
  | "Bathroom"
  | "Wall Panels";

export interface Product {
  id: number;
  title: string;
  category: ProductCategory;
  image: string;
  detail: string;
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const categories = [
  { icon: "Grid3X3", title: "Granite Wall & Floor Tiles", text: "Hard-wearing natural stone for every plane" },
  { icon: "PanelsTopLeft", title: "PVC Panels & Ceiling", text: "Durable, low-maintenance solutions" },
  { icon: "Gem", title: "Marble Tiles & Slabs", text: "Natural veining in curated premium finishes" },
  { icon: "Bath", title: "Bathroom Fittings", text: "Refined function for daily living" },
  { icon: "Columns3", title: "WPC Louvers & Panels", text: "Texture and rhythm for feature walls" },
  { icon: "Layers3", title: "Wooden, Vinyl & SPC", text: "Comfortable flooring built to last" },
];

export const products: Product[] = [
  { id: 1, title: "Absolute Black Granite Tiles", category: "Granite & Stone", image: "/images/products/black-granite-tiles-v2.png", detail: "Polished finish · wall and floor formats" },
  { id: 2, title: "Calacatta & Marble Tile Collection", category: "Marble Sheets", image: "/images/products/marble-tile-collection-v2.png", detail: "Curated natural stone · honed and polished" },
  { id: 3, title: "Granite Wall & Floor Series", category: "Granite & Stone", image: "/images/products/granite-wall-floor-v2.png", detail: "Textured wall finish · satin floor finish" },
  { id: 4, title: "WPC Fluted Wall Louvers", category: "Wall Panels", image: "/images/products/living-panels.jpg", detail: "Warm timber look · moisture resistant" },
  { id: 5, title: "SPC Wooden Flooring", category: "Flooring", image: "/images/products/bedroom-flooring.jpg", detail: "Quiet underfoot · scratch resistant" },
  { id: 6, title: "Premium Bathroom Vanity Surface", category: "Bathroom", image: "/images/products/bathroom.jpg", detail: "Elegant stone finish · practical care" },
  { id: 7, title: "Large-Format Porcelain Tiles", category: "Tiles", image: "/images/products/premium-living.jpg", detail: "Wall and floor use · easy maintenance" },
  { id: 8, title: "Bookmatched Marble Wall Slabs", category: "Marble Sheets", image: "/images/products/vanity.jpg", detail: "Statement veining · precision installation" },
];

export const applications = [
  { name: "Living Rooms", text: "Wall panels, flooring & marble", image: "/images/products/marble-wall.jpg" },
  { name: "Bedrooms", text: "Warm flooring & feature walls", image: "/images/products/bedroom-flooring.jpg" },
  { name: "Kitchens", text: "Tiles and durable surfaces", image: "/images/applications/kitchen.jpg" },
  { name: "Bathrooms", text: "Fittings, vanities & tiles", image: "/images/products/bathroom.jpg" },
  { name: "Offices", text: "Panels and resilient flooring", image: "/images/applications/office.jpg" },
  { name: "Shops & Showrooms", text: "Premium high-impact finishes", image: "/images/products/dining-panels.jpg" },
  { name: "Hotels", text: "Elegant surfaces made to endure", image: "/images/products/premium-living.jpg" },
  { name: "Restaurants", text: "Distinctive walls and floors", image: "/images/about/showroom.jpg" },
];

export const testimonials = [
  { quote: "The marble sheets transformed our living room. The team guided us through every finish and completed the fitting with remarkable precision.", name: "Rajesh Sharma", location: "Noida" },
  { quote: "A genuinely wide collection and transparent advice. Our showroom flooring was supplied on time and the final detailing looks excellent.", name: "Meera Kapoor", location: "Gurugram" },
  { quote: "From measurement to installation, everything was handled professionally. The PVC panels look premium and are very easy to maintain.", name: "Amit Verma", location: "Delhi" },
];
