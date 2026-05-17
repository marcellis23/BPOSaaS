import { promises as fs } from "fs";
import path from "path";
import type { AppData } from "./types";

const dataDir = path.join(process.cwd(), "data");
const dataPath = path.join(dataDir, "app-data.json");

const seedData: AppData = {
  users: [
    {
      id: "user-owner",
      name: "Ronald Williams",
      email: "ronald@example.com",
      role: "owner_admin",
      organizationId: "org-main"
    },
    {
      id: "user-member",
      name: "Member Agent",
      email: "agent@example.com",
      role: "member_agent",
      organizationId: "org-main"
    }
  ],
  organizations: [{ id: "org-main", name: "BPO Agent Platform", ownerUserId: "user-owner" }],
  memberships: [
    { id: "mem-owner", userId: "user-owner", organizationId: "org-main", status: "active", plan: "owner" },
    { id: "mem-agent", userId: "user-member", organizationId: "org-main", status: "trial", plan: "member" }
  ],
  properties: [],
  projects: [],
  submissions: [],
  generatedPdfs: [],
  formProgress: []
};

async function ensureDataFile() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(dataPath);
  } catch {
    await fs.writeFile(dataPath, JSON.stringify(seedData, null, 2));
  }
}

export async function readData(): Promise<AppData> {
  await ensureDataFile();
  const raw = await fs.readFile(dataPath, "utf8");
  const data = JSON.parse(raw) as Partial<AppData>;
  return {
    users: data.users ?? seedData.users,
    organizations: data.organizations ?? seedData.organizations,
    memberships: data.memberships ?? seedData.memberships,
    properties: data.properties ?? [],
    projects: data.projects ?? [],
    submissions: data.submissions ?? [],
    generatedPdfs: data.generatedPdfs ?? [],
    formProgress: data.formProgress ?? []
  };
}

export async function writeData(data: AppData) {
  await ensureDataFile();
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

export async function updateData(mutator: (data: AppData) => void | Promise<void>) {
  const data = await readData();
  await mutator(data);
  await writeData(data);
  return data;
}

export function newId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

export function nowIso() {
  return new Date().toISOString();
}
