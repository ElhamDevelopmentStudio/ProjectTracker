import { NextRequest, NextResponse } from "next/server";

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
