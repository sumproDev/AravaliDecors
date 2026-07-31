"use client";

import { useRef, useState } from "react";

type ImageUrlFieldProps = {
  name: string;
  label: string;
  defaultValue?: string;
  altInputName?: string;
  folder?: string;
  required?: boolean;
};

export function ImageUrlField({ name, label, defaultValue = "", altInputName = "imageAlt", folder = "aravali-cms", required = true }: ImageUrlFieldProps) {
  const [url, setUrl] = useState(defaultValue);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "info">("info");
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadSelectedFile() {
    const file = inputRef.current?.files?.[0];
    if (!file) {
      setStatusType("error");
      setStatus("Choose an image before uploading.");
      return;
    }

    setUploading(true);
    setStatusType("info");
    setStatus("Uploading...");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);
      const altInput = document.querySelector<HTMLInputElement>(`[name="${altInputName}"]`);
      formData.append("alt", altInput?.value || file.name);

      const response = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok) {
        setStatusType("error");
        setStatus(result.error || "Upload failed");
        return;
      }

      setUrl(result.image.url);
      setStatusType("success");
      setStatus("Image uploaded successfully.");
    } catch (error) {
      setStatusType("error");
      setStatus(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <label className="wide image-upload">
      <span>{label}</span>
      <input name={name} value={url} onChange={(event) => setUrl(event.target.value)} required={required} />
      <div className="image-upload__row">
        <input ref={inputRef} type="file" accept="image/*" />
        <button className="admin-button" type="button" onClick={uploadSelectedFile} disabled={uploading} aria-busy={uploading}>
          {uploading ? <span className="admin-spinner" aria-hidden="true" /> : null}
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {url ? <img className="image-upload__preview" src={url} alt="" /> : null}
      {status ? <small className={`image-upload__status image-upload__status--${statusType}`}>{status}</small> : null}
    </label>
  );
}
