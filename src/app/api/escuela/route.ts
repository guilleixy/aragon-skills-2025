import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const escuelas = await prisma.escuela.findMany({});

    return NextResponse.json(escuelas);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const newEscuela = await prisma.escuela.create({
      data: {
        name,
      },
    });

    return NextResponse.json(newEscuela, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
