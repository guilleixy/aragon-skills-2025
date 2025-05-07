import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import results from "../python/medallas-web.json" with { type: "json" };

async function main() {
  for (let result of results) {
    /*     await prisma.edicion.upsert({
      where: { year: result.AÑO },
      update: {},
      create: {
        year: result.AÑO,
      },
    });
    await prisma.escuela.upsert({
      where: { name: result["CENTRO EDUCATIVO"] },
      update: {},
      create: {
        name: result["CENTRO EDUCATIVO"],
      },
    }); */
    await prisma.escuela.upsert({
      where: { name: result["CENTRO EDUCATIVO"] },
      update: {},
      create: {
        name: result["CENTRO EDUCATIVO"],
      },
    });
    await prisma.especialidad.upsert({
      where: { name: result.SKILL },
      update: {},
      create: {
        name: result.SKILL,
      },
    })
    await prisma
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
