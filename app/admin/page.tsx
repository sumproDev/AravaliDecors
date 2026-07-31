import Link from "next/link";
import { AdminNav } from "@/app/admin/AdminNav";
import { requireAdmin } from "@/lib/admin/auth";
import { getAdminDashboardData } from "@/lib/cms/admin";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const stats = await getAdminDashboardData();

  return (
    <>
      <AdminNav />
      <main className="admin-main">
        <div className="admin-page-title">
          <div>
            <h1>Dashboard</h1>
            <p>Content is stored in the database. Uploaded images are stored in Cloudinary as URLs.</p>
          </div>
          <Link className="admin-button" href="/admin/images">
            Upload Images
          </Link>
        </div>
        <section className="admin-grid">
          {Object.entries(stats).map(([label, value]) => (
            <article className="admin-card admin-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
