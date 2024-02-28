import { NextRequest, NextResponse } from "next/server";
import { scheduler } from "timers/promises";
import schema from "../../users/schema";

interface Products {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params: { id } }: Products) {
  return NextResponse.json({
    id: id,
    name: "Elham",
    price: 12,
  });
}

export async function PUT(request: NextRequest, { params: { id } }: Products) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors);
  }
  if (id > 10) {
    return NextResponse.json(
      { error: "Product not found error" },
      { status: 404 }
    );
  }
  return NextResponse.json({ id: id, name: body.name, price: body.price });
}
