import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
      where: { username: username, password: password },
    });
    if (user) {
      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json({ status: 401 });
    }
  } catch (error) {
    console.error("Error fetching results:", error);
    return NextResponse.json(
      { message: "Error fetching results" },
      { status: 500 }
    );
  }
}
