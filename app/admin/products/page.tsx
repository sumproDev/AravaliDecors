import { AdminNav } from "@/app/admin/AdminNav";
import { deleteProductAction, saveProductAction } from "@/app/admin/actions";
import { AdminActionForm, AdminSubmitButton } from "@/app/admin/components/AdminActionForm";
import { ImageUrlField } from "@/app/admin/components/ImageUrlField";
import { requireAdmin } from "@/lib/admin/auth";
import { getAdminCollections } from "@/lib/cms/admin";

export default async function AdminProductsPage() {
  await requireAdmin();
  const collections = await getAdminCollections();
  const products = collections.flatMap((collection) => collection.products.map((product) => ({ ...product, collection })));

  return (
    <>
      <AdminNav />
      <main className="admin-main">
        <div className="admin-page-title">
          <div>
            <h1>Products</h1>
            <p>Manage products inside each collection.</p>
          </div>
        </div>
        <section className="admin-section">
          <article className="admin-card">
            <h2>New Product</h2>
            <ProductForm collections={collections} />
          </article>
          <div className="admin-list">
            {products.map((product) => (
              <article className="admin-card" key={product.id}>
                <div className="admin-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt="" />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.collection.title}</p>
                  </div>
                  <AdminActionForm action={deleteProductAction}>
                    <input type="hidden" name="id" value={product.id} />
                    <AdminSubmitButton className="admin-button admin-danger" pendingText="Deleting...">Delete</AdminSubmitButton>
                  </AdminActionForm>
                </div>
                <ProductForm product={product} collections={collections} />
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

type Collections = Awaited<ReturnType<typeof getAdminCollections>>;
type ProductWithCollection = Collections[number]["products"][number] & { collection: Collections[number] };

function ProductForm({ product, collections }: { product?: ProductWithCollection; collections: Collections }) {
  return (
    <AdminActionForm className="admin-form" action={saveProductAction} successReset={!product}>
      <input type="hidden" name="id" value={product?.id || ""} />
      <label>
        Collection
        <select name="collectionId" defaultValue={product?.collectionId || collections[0]?.id} required>
          {collections.map((collection) => <option key={collection.id} value={collection.id}>{collection.title}</option>)}
        </select>
      </label>
      <label>
        Product name
        <input name="name" defaultValue={product?.name} required />
      </label>
      <label>
        Sort order
        <input name="sortOrder" type="number" defaultValue={product?.sortOrder || 0} />
      </label>
      <label className="admin-check">
        <input name="isPublished" type="checkbox" defaultChecked={product?.isPublished ?? true} />
        Published
      </label>
      <label className="wide">
        Description
        <textarea name="description" defaultValue={product?.description} required />
      </label>
      <label className="wide">
        Image alt text
        <input name="imageAlt" defaultValue={product?.imageAlt} required />
      </label>
      <ImageUrlField name="image" label="Product image URL" defaultValue={product?.image} folder="aravali-products" />
      <AdminSubmitButton>{product ? "Save Product" : "Create Product"}</AdminSubmitButton>
    </AdminActionForm>
  );
}
