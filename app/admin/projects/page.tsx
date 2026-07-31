import { AdminNav } from "@/app/admin/AdminNav";
import { deleteProjectAction, saveProjectAction } from "@/app/admin/actions";
import { AdminActionForm, AdminSubmitButton } from "@/app/admin/components/AdminActionForm";
import { ImageUrlField } from "@/app/admin/components/ImageUrlField";
import { requireAdmin } from "@/lib/admin/auth";
import { getAdminProjects } from "@/lib/cms/admin";

export default async function AdminProjectsPage() {
  await requireAdmin();
  const projects = await getAdminProjects();

  return (
    <>
      <AdminNav />
      <main className="admin-main">
        <div className="admin-page-title">
          <div>
            <h1>Projects</h1>
            <p>Manage project and design inspiration cards.</p>
          </div>
        </div>
        <section className="admin-section">
          <article className="admin-card">
            <h2>New Project</h2>
            <ProjectForm />
          </article>
          <div className="admin-list">
            {projects.map((project) => (
              <article className="admin-card" key={project.id}>
                <div className="admin-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt="" />
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                  </div>
                  <AdminActionForm action={deleteProjectAction}>
                    <input type="hidden" name="id" value={project.id} />
                    <AdminSubmitButton className="admin-button admin-danger" pendingText="Deleting...">Delete</AdminSubmitButton>
                  </AdminActionForm>
                </div>
                <ProjectForm project={project} />
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectForm({ project }: { project?: Awaited<ReturnType<typeof getAdminProjects>>[number] }) {
  return (
    <AdminActionForm className="admin-form" action={saveProjectAction} successReset={!project}>
      <input type="hidden" name="id" value={project?.id || ""} />
      <label>
        Title
        <input name="title" defaultValue={project?.title} required />
      </label>
      <label>
        Type
        <input name="type" defaultValue={project?.type} required />
      </label>
      <label>
        Sort order
        <input name="sortOrder" type="number" defaultValue={project?.sortOrder || 0} />
      </label>
      <label className="admin-check">
        <input name="isFeatured" type="checkbox" defaultChecked={project?.isFeatured ?? false} />
        Wide featured card
      </label>
      <label className="admin-check">
        <input name="isPublished" type="checkbox" defaultChecked={project?.isPublished ?? true} />
        Published
      </label>
      <label className="wide">
        Description
        <textarea name="description" defaultValue={project?.description} required />
      </label>
      <label className="wide">
        Image alt text
        <input name="imageAlt" defaultValue={project?.imageAlt} required />
      </label>
      <ImageUrlField name="image" label="Project image URL" defaultValue={project?.image} folder="aravali-projects" />
      <AdminSubmitButton>{project ? "Save Project" : "Create Project"}</AdminSubmitButton>
    </AdminActionForm>
  );
}
