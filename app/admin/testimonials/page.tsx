import { AdminNav } from "@/app/admin/AdminNav";
import { deleteTestimonialAction, saveTestimonialAction } from "@/app/admin/actions";
import { AdminActionForm, AdminSubmitButton } from "@/app/admin/components/AdminActionForm";
import { requireAdmin } from "@/lib/admin/auth";
import { getAdminTestimonials } from "@/lib/cms/admin";

export default async function AdminTestimonialsPage() {
  await requireAdmin();
  const testimonials = await getAdminTestimonials();

  return (
    <>
      <AdminNav />
      <main className="admin-main">
        <div className="admin-page-title">
          <div>
            <h1>Testimonials</h1>
            <p>Manage rotating customer quotes on the homepage.</p>
          </div>
        </div>
        <section className="admin-section">
          <article className="admin-card">
            <h2>New Testimonial</h2>
            <TestimonialForm />
          </article>
          <div className="admin-list">
            {testimonials.map((testimonial) => (
              <article className="admin-card" key={testimonial.id}>
                <div className="admin-row">
                  <div aria-hidden="true" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location} · {testimonial.quote}</p>
                  </div>
                  <AdminActionForm action={deleteTestimonialAction}>
                    <input type="hidden" name="id" value={testimonial.id} />
                    <AdminSubmitButton className="admin-button admin-danger" pendingText="Deleting...">Delete</AdminSubmitButton>
                  </AdminActionForm>
                </div>
                <TestimonialForm testimonial={testimonial} />
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function TestimonialForm({ testimonial }: { testimonial?: Awaited<ReturnType<typeof getAdminTestimonials>>[number] }) {
  return (
    <AdminActionForm className="admin-form" action={saveTestimonialAction} successReset={!testimonial}>
      <input type="hidden" name="id" value={testimonial?.id || ""} />
      <label>
        Customer name
        <input name="name" defaultValue={testimonial?.name} required />
      </label>
      <label>
        Location
        <input name="location" defaultValue={testimonial?.location} required />
      </label>
      <label>
        Sort order
        <input name="sortOrder" type="number" defaultValue={testimonial?.sortOrder || 0} />
      </label>
      <label className="admin-check">
        <input name="isPublished" type="checkbox" defaultChecked={testimonial?.isPublished ?? true} />
        Published
      </label>
      <label className="wide">
        Quote
        <textarea name="quote" defaultValue={testimonial?.quote} required />
      </label>
      <AdminSubmitButton>{testimonial ? "Save Testimonial" : "Create Testimonial"}</AdminSubmitButton>
    </AdminActionForm>
  );
}
