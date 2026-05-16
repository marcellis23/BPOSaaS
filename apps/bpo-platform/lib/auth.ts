import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readData } from "./store";
import type { User } from "./types";

const cookieName = "bpo_user_id";

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const userId = cookieStore.get(cookieName)?.value;
  const data = await readData();
  return data.users.find((user) => user.id === userId) ?? null;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== "owner_admin") redirect("/dashboard");
  return user;
}

export async function setUserCookie(userId: string) {
  const cookieStore = await cookies();
  cookieStore.set(cookieName, userId, { httpOnly: true, sameSite: "lax", path: "/" });
}

export async function clearUserCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}
