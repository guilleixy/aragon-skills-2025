import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: Request) {}

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
      filters.driver = {
        ...filters.competidor,
        escuelaId: parseInt(searchParams.get("escuela")!),
      };
    }
    if (searchParams.has("especialidad")) {
      filters.driver = {
        ...filters.competidor,
        especialidadId: parseInt(searchParams.get("especialidad")!),
      };
    }
    if (searchParams.has("posicion")) {
      filters.driver = {
        ...filters.competidor,
        posicion: parseInt(searchParams.get("posicion")!),
      };
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
