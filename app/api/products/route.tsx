import { NextRequest, NextResponse } from "next/server";
import schema from "../users/schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: "1",
      name: "milk",
      price: 12,
    },
    {
      id: "2",
      name: "Chocolate",
      price: 8,
    },
    {
      id: "3",
      name: "Salt",
      price: 10,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }
  return NextResponse.json({ id: 4, name: body.name, price: body.price });
}
