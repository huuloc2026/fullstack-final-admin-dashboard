import { UserPageProps } from "@/app/dashboard/user/page";

export const FetchProduct = async (token: string) => {
  const response = await fetch("http://localhost:8386/v1/api/product", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return <div>Failed fetch data</div>;
  }
  const productsFromFetch = await response.json();
  return productsFromFetch.data;
};

export const FetchUser = async (token: string) => {
  const response = await fetch("http://localhost:8386/v1/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return <div>Failed fetch data</div>;
  }
  const user = await response.json();
  return user.data;
};

export const FetchUserPagination = async (
  token: string,
  page: number,
  limit: number
): Promise<UserPageProps> => {
  const response = await fetch(
    `http://localhost:8386/v1/api/users?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed fetch data");
  }
  const user = await response.json();
  return {
    data: user.data,
    page: user.page,
    limit: user.limit,
    total: user.total,
  };
};

export const FetchProductPagination = async (
  token: string,
  page: number,
  limit: number
): Promise<UserPageProps> => {
  const response = await fetch(
    `http://localhost:8386/v1/api/product?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed fetch data");
  }
  const user = await response.json();
  return {
    data: user.data,
    page: user.page,
    limit: user.limit,
    total: user.total,
  };
};
