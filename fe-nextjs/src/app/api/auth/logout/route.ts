import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken")
    cookieStore.set("accessToken", "", { maxAge: -1 });
    return new Response(
      JSON.stringify({ message: "Logged out successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Logout failed" }), {
      status: 500,
    });
  }
}
