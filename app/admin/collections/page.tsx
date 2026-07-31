import { AdminNav } from "@/app/admin/AdminNav";
import { deleteCollectionAction, saveCollectionAction } from "@/app/admin/actions";
import { AdminActionForm, AdminSubmitButton } from "@/app/admin/components/AdminActionForm";
import { ImageUrlField } from "@/app/admin/components/ImageUrlField";
import { requireAdmin } from "@/lib/admin/auth";
import { getAdminCollections } from "@/lib/cms/admin";

const icons = ["Grid3X3", "Layers3", "Bath", "Columns3", "Gem", "PanelsTopLeft"];

export default async function AdminCollectionsPage() {
  await requireAdmin();
  const collections = await getAdminCollections();

  return (
    <>
      <AdminNav />
      <main className="admin-main">
        <div className="admin-page-title">
          <div>
            <h1>Collections</h1>
            <p>Create and edit product collection pages.</p>
          </div>
        </div>
        <section className="admin-section">
          <article className="admin-card">
            <h2>New Collection</h2>
            <CollectionForm />
          </article>
          <div className="admin-list">
            {collections.map((collection) => (
              <article className="admin-card" key={collection.id}>
                <div className="admin-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={collection.image} alt="" />
                  <div>
                    <h3>{collection.title}</h3>
                    <p>{collection.products.length} products · /products/{collection.slug}</p>
                  </div>
                  <AdminActionForm action={deleteCollectionAction}>
                    <input type="hidden" name="id" value={collection.id} />
                    <AdminSubmitButton className="admin-button admin-danger" pendingText="Deleting...">Delete</AdminSubmitButton>
                  </AdminActionForm>
                </div>
                <CollectionForm collection={collection} />
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function CollectionForm({ collection }: { collection?: Awaited<ReturnType<typeof getAdminCollections>>[number] }) {
  return (
    <AdminActionForm className="admin-form" action={saveCollectionAction} successReset={!collection}>
      <input type="hidden" name="id" value={collection?.id || ""} />
      <label>
        Title
        <input name="title" defaultValue={collection?.title} required />
      </label>
      <label>
        Slug
        <input name="slug" defaultValue={collection?.slug} required />
      </label>
      <label>
        Short title
        <input name="shortTitle" defaultValue={collection?.shortTitle} required />
      </label>
      <label>
        Icon
        <select name="icon" defaultValue={collection?.icon || "Grid3X3"}>
          {icons.map((icon) => <option key={icon}>{icon}</option>)}
        </select>
      </label>
      <label>
        Sort order
        <input name="sortOrder" type="number" defaultValue={collection?.sortOrder || 0} />
      </label>
      <label className="admin-check">
        <input name="isPublished" type="checkbox" defaultChecked={collection?.isPublished ?? true} />
        Published
      </label>
      <label className="wide">
        Intro
        <textarea name="intro" defaultValue={collection?.intro} required />
      </label>
      <label className="wide">
        Description
        <textarea name="description" defaultValue={collection?.description} required />
      </label>
      <label className="wide">
        Image alt text
        <input name="imageAlt" defaultValue={collection?.imageAlt} required />
      </label>
      <ImageUrlField name="image" label="Collection image URL" defaultValue={collection?.image} folder="aravali-collections" />
      <AdminSubmitButton>{collection ? "Save Collection" : "Create Collection"}</AdminSubmitButton>
    </AdminActionForm>
  );
}
