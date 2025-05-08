import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const especialidades = await prisma.especialidad.findMany({});

    return NextResponse.json(especialidades);
  } /* c8 ignore start */ catch (error) {
    console.error(error);
    return NextResponse.error();
  } /* c8 ignore end */
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const newEspecialidad = await prisma.especialidad.create({
      data: {
        name,
      },
    });

    return NextResponse.json(newEspecialidad, { status: 201 });
  } /* c8 ignore start */ catch (error) {
    console.error(error);
    return NextResponse.error();
  } /* c8 ignore end */
}
