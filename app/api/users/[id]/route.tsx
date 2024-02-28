import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Users {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params: { id } }: Users) {
  if (id > 10) {
    return NextResponse.json({ error: "User not found" });
  }
  return NextResponse.json({ id, name: "Elhamullah Hossaini" });
}

export async function PUT(request: NextRequest, { params: { id } }: Users) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id, name: body.name });
}

export function DELETE(request: NextRequest, { params: { id } }: Users) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ message: "User deleted successfully" });
}