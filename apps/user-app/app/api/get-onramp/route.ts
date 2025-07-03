import { NextResponse } from "next/server";
import { getOnRampTransactions } from "../../lib/data/transferData";

export async function GET() {
  try {
    const data = await getOnRampTransactions();
    return NextResponse.json({ status: true, data });
  } catch (error) {
    return NextResponse.json(
      { status: false, message: "Failed to fetch transactions", error },
      { status: 500 }
    );
  }
}
