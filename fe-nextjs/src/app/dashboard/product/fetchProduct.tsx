import { cookies } from "next/headers";
import { ApiRequest } from "@/app/apiRequest/apiRequest";

export async function fetchToken() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  const token = accessToken?.value as string;
  if (!token) {
    return;
  }
  try {
    const product = ApiRequest.getInstance();
    return token;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}
