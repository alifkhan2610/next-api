import { NextResponse } from "next/server";
import { user } from "../util/db";

export function GET(request, content) {
  const userData = user;
  console.log(userData);
  return NextResponse.json(userData, { status: 200 });
}

// export function POST(){
//   return NextResponse.json({result:"Hello"});
// }

export async function POST(request){
  let payload = await request.json();
  console.log(payload.name);
  if(!payload.name || !payload.age ||!payload.email ){
    return NextResponse.json({result: "Required field is not found.",success:false},{status:400});
  }
  return NextResponse.json({result:"New user create.",success:true},{status:201});
}