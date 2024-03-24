import { frequencies } from "@/lib/Queries";
import { NextResponse } from "next/server";

export async function GET() {
  const data: { [key: string]: any } = ({} = {});
  (await frequencies).forEach((item) => {
    data[item.key_code] = item;
  });

  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
}
