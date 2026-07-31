import { AdminNav } from "@/app/admin/AdminNav";
import { deleteImageAction, saveImageAction } from "@/app/admin/actions";
import { AdminActionForm, AdminSubmitButton } from "@/app/admin/components/AdminActionForm";
import { ImageUrlField } from "@/app/admin/components/ImageUrlField";
import { requireAdmin } from "@/lib/admin/auth";
import { getAdminImages } from "@/lib/cms/admin";

export default async function AdminImagesPage() {
  await requireAdmin();
  const images = await getAdminImages();

  return (
    <>
      <AdminNav />
      <main className="admin-main">
        <div className="admin-page-title">
          <div>
            <h1>Images</h1>
            <p>Upload images to Cloudinary and reuse their URLs in products, collections and projects.</p>
          </div>
        </div>
        <section className="admin-section">
          <article className="admin-card">
            <h2>Upload or Save Image URL</h2>
            <AdminActionForm className="admin-form" action={saveImageAction} successReset>
              <label>
                Alt text
                <input name="alt" required />
              </label>
              <label>
                Folder
                <input name="folder" defaultValue="aravali-cms" />
              </label>
              <ImageUrlField name="url" label="Image URL" altInputName="alt" folder="aravali-cms" />
              <AdminSubmitButton>Save Image</AdminSubmitButton>
            </AdminActionForm>
          </article>
          <div className="admin-list">
            {images.map((image) => (
              <article className="admin-row admin-card" key={image.id}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.url} alt="" />
                <div>
                  <h3>{image.alt}</h3>
                  <p>{image.url}</p>
                </div>
                <AdminActionForm action={deleteImageAction}>
                  <input type="hidden" name="id" value={image.id} />
                  <AdminSubmitButton className="admin-button admin-danger" pendingText="Deleting...">Delete</AdminSubmitButton>
                </AdminActionForm>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
