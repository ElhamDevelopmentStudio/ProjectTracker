import { NextRequest, NextResponse } from "next/server";
import { scheduler } from "timers/promises";
import schema from "../../users/schema";
import { prisma } from "@/prisma/client";

interface Products {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params: { id } }: Products) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params: { id } }: Products) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors);
  }
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });

  if (!product) {
    return NextResponse.json(
      { error: "Product not found error" },
      { status: 404 }
    );
  }

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(id) },
    data: { name: body.name, price: body.price },
  });

  return NextResponse.json(updatedProduct);
}
