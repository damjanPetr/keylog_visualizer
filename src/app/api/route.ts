import { NextResponse } from "next/server";
import { sequelize } from "@/lib/db";

export async function GET() {
  const data: { [key: string]: any } = ({} = {});
  // (await frequencies).forEach((item) => {
  //   data[item.key_code] = item;
  // });
  //

  sequelize.qurey('select * from key_logs', {
    type: sequelize.QueryTypes.SELECT
  });


  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
}
