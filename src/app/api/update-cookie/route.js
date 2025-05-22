import { updateCookie } from "@/services/api/patrol";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const cookie = searchParams.get("cookie");
    const pwd = searchParams.get("pwd");
    console.log(cookie, pwd);
    const response = await updateCookie(cookie, pwd);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error updating cookie:", error);
    return NextResponse.json(
      { code: 500, message: "更新 Cookie 失败" },
      { status: 500 }
    );
  }
}
