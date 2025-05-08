import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, escuelaId, especialidadId, posicion } = body;
    const year = "2025";
    if (!name || escuelaId || especialidadId || posicion) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await prisma.competidor.upsert({
      where: { name: name },
      update: {},
      create: {
        name: name,
        escuelaId: parseInt(escuelaId),
        especialidadId: parseInt(especialidadId),
      },
    });
    const edicion = await prisma.edicion.findFirst({
      where: { year: year },
    });
    const competidor = await prisma.competidor.findFirst({
      where: { name: name },
    });
    await prisma.resultadoCompetidor.create({
      data: {
        competidorId: competidor?.id!,
        edicionId: edicion?.id!,
        position: posicion,
      },
    });
  } catch (error) {
    console.error("Error saving result:", error);
    return NextResponse.json(
      {
        message: "Error saving result",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const competidorId = searchParams.get("competidorId") || "";
  const edicionId = searchParams.get("edicionId") || "";
  try {
    await prisma.resultadoCompetidor.delete({
      where: {
        competidorId_edicionId: {
          competidorId: parseInt(competidorId),
          edicionId: parseInt(edicionId),
        },
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error deleting result:", error);
    return NextResponse.json(
      { message: "Error deleting results" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const filters: any = {};
    if (searchParams.has("name")) {
      filters.competidor = {
        name: searchParams.get("name") || undefined,
      };
    }
    if (searchParams.has("escuela")) {
      filters.competidor = {
        ...filters.competidor,
        escuela: {
          name: searchParams.get("escuela"),
        },
      };
    }
    if (searchParams.has("year")) {
      filters.edicion = {
        year: searchParams.get("year"),
      };
    }
    if (searchParams.has("especialidad")) {
      filters.competidor = {
        ...filters.competidor,
        especialidad: { name: searchParams.get("especialidad") },
      };
    }
    if (searchParams.has("posicion")) {
      filters.position = searchParams.get("posicion");
    }

    const results = await prisma.resultadoCompetidor.findMany({
      where: filters,
      include: {
        competidor: {
          include: {
            escuela: true,
            especialidad: true,
          },
        },
        edicion: true,
      },
    });

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error fetching results:", error);
    return NextResponse.json(
      { message: "Error fetching results" },
      { status: 500 }
    );
  }
}
