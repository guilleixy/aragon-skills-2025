import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import results from "../python/medallas-web.json";

async function main() {
  for (let result of results) {
    await prisma.resultadoCompetidor.create({
      data: result,
    });
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
