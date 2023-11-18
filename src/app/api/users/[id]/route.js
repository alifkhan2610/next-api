import { NextResponse } from "next/server";
import { user } from "../../util/db";

export function GET(request, content) {
  const userData = user.filter((item) => item.id == content.params.id);
  console.log(userData);
  return NextResponse.json(
    userData.length == 0
      ? { Result: "No Data Found", success: false }
      : { Result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;
  console.log(payload);
  if(!payload.id || payload.name || payload.age || payload.email){
    return NextResponse.jsopn({ result: "request data is not valid", success:false },{status:400});
  }
  return NextResponse.jsopn({ result: payload, success:ture },{status:200});
}
