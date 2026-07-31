import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";

export function AdminNav() {
  return (
    <header className="admin-header">
      <div>
        <strong>Aravali CMS</strong>
        <span>Manage website content, images and product data</span>
      </div>
      <nav className="admin-nav" aria-label="Admin navigation">
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/collections">Collections</Link>
        <Link href="/admin/products">Products</Link>
        <Link href="/admin/projects">Projects</Link>
        <Link href="/admin/testimonials">Testimonials</Link>
        <Link href="/admin/images">Images</Link>
        <Link href="/">View Site</Link>
        <form action={logoutAction}>
          <button type="submit">Logout</button>
        </form>
      </nav>
    </header>
  );
}
