import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Users {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params: { id } }: Users) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" });
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Users) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const UpdatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(UpdatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Users) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
}