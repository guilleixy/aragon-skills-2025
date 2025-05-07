import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import results from "../python/medallas-web.json" with { type: "json" };

async function main() {
  for (let result of results) {
    await prisma.escuela.upsert({
      where: { name: result["CENTRO EDUCATIVO"] },
      update: {},
      create: {
        name: result["CENTRO EDUCATIVO"],
      },
    });

    const escuela = await prisma.escuela.findFirst({
      where: {name: result["CENTRO EDUCATIVO"]}
    })

    await prisma.especialidad.upsert({
      where: { name: result.SKILL },
      update: {},
      create: {
        name: result.SKILL,
      },
    })

    const especialidad = await prisma.especialidad.findFirst({
      where: {name: result.SKILL}
    })
    
    await prisma.competidor.upsert({
      where: { name: result.COMPETIDOR },
      update: {},
      create: {
        name: result.COMPETIDOR,
        escuelaId: escuela?.id,
        especialidadId: especialidad?.id
      },
    })

    await prisma.edicion.upsert({
      where: { year: result.AÑO },
      update: {},
      create: {
        year: result.AÑO,
      },
    })

    const edicion = await prisma.edicion.findFirst({
      where: {year: result.AÑO}
    })

    const competidor = await prisma.competidor.findFirst({
      where: {name: result.COMPETIDOR}
    })

    await prisma.resultadoCompetidor.create({
      data: {
        competidorId: competidor?.id!,
        edicionId: edicion?.id!,
        position: result.MEDALLA,
      }
    }) 
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
