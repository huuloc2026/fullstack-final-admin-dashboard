export const dynamic = "force-static";

export async function POST(request: Request) {
  const res = await request.json();
  const token = res.result.accessToken;
  if (!token) {
    return new Response(JSON.stringify({ message: "Token is missing" }), {
      status: 400,
    });
  }

  return Response.json(
    { token },
    {
      status: 200,
      headers: { "Set-Cookie": `accessToken=${token}; Path=/; HttpOnly` },
    }
  );
}
