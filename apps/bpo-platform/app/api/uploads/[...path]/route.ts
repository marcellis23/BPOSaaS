import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathParts } = await params;
    const filePath = path.join(process.cwd(), "data", "uploads", ...pathParts);
    
    // Safety check: ensure file is inside the data/uploads directory to prevent path traversal
    const resolvedPath = path.resolve(filePath);
    const uploadsRoot = path.resolve(path.join(process.cwd(), "data", "uploads"));
    if (!resolvedPath.startsWith(uploadsRoot)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const fileBuffer = await fs.readFile(resolvedPath);
    const ext = path.extname(resolvedPath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".pdf": "application/pdf"
    };
    const contentType = mimeTypes[ext] || "application/octet-stream";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
