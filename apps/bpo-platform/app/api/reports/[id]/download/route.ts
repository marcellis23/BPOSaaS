import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { requireUser } from "../../../../../lib/auth";
import { readData } from "../../../../../lib/store";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const data = await readData();
  const project = data.projects.find((item) => item.id === id && item.organizationId === user.organizationId);
  if (!project?.generatedPdfPath) return new NextResponse("PDF not found", { status: 404 });

  const file = await fs.readFile(project.generatedPdfPath);
  const safeName = `${project.title.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "bpo-report"}.pdf`;
  return new NextResponse(file, {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": `attachment; filename="${safeName}"`,
      "content-length": String(file.length),
      "x-generated-path": path.basename(project.generatedPdfPath)
    }
  });
}
