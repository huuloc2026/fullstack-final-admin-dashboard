import { cookies } from "next/headers";
import { ApiRequest } from "@/app/apiRequest/apiRequest";

export async function fetchProfile() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const token = accessToken?.value as string;
  if (!token) {
    return { email: "Guest" };
  }

  try {
    const user = ApiRequest.getInstance();
    return await user.profile(token);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}
