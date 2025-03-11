const BASE_URL = "http://localhost:8386/v1/api";

const request = async (
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  token: string,
  data?: any
) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error(`API request failed: ${error}`);
    throw error;
  }
};

export const UpdateUserApi = (userId: string, token: string, data: any) => {
  return request(`/users/${userId}`, "PUT", token, data);
};

export const DeleteUserApi = (userId: string, token: string, data: any) => {
  return request(`/users/${userId}`, "DELETE", token, data);
};

export const UpdateProductApi = (
  productId: string,
  token: string,
  data: any
) => {
  return request(`/product/${productId}`, "PUT", token, data);
};

export const DeleteProductApi = (productId: string, token: string) => {
  return request(`/product/${productId}`, "DELETE", token);
};

export const MeProfileApi = (token: string) => {
  return request("/auth/me", "GET", token);
};

export const LogOutApi = (token: string) => {
  return request("/auth/logout", "POST", token);
};
export const DeleteAccountApi = (UserId: string, token: string) => {
  return request(`/users/${UserId}`, "DELETE", token);
};
