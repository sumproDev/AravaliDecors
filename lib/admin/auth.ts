import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "aravali_admin_session";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "aravaliadmin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "aravaliadmin123";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || "change-this-secret-before-production";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function sign(value: string) {
  return createHmac("sha256", SESSION_SECRET).update(value).digest("base64url");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

function createSessionValue(username: string) {
  const expires = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = `${username}.${expires}`;
  return `${payload}.${sign(payload)}`;
}

function verifySessionValue(value?: string) {
  if (!value) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [username, expires, signature] = parts;
  const payload = `${username}.${expires}`;

  if (username !== ADMIN_USERNAME) return false;
  if (Number(expires) < Date.now()) return false;
  return safeEqual(sign(payload), signature);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifySessionValue(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}

export async function loginAdmin(username: string, password: string) {
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return false;
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSessionValue(username), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_MAX_AGE_SECONDS,
    path: "/",
  });

  return true;
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
