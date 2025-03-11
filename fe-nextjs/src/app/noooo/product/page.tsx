import { ChartArea } from "@/app/components/chart-area";

import ProductCRUD from "@/app/noooo/product/ProductForm";
import ProductListPagination from "@/app/dashboard/product/ProductList";
import { fetchToken } from "@/utils/FetchToken";

export const ProductPage = async () => {
  const token = await fetchToken();
  const response = await fetch("http://localhost:8386/v1/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const userFromFetch = await response.json();

  const arrayList = userFromFetch.data;

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-6 gap-4 ">
        <div className="col-span-2 row-span-2">
          <ProductCRUD />
        </div>
        <div className="col-span-2 row-span-2 col-start-3">
          <ChartArea dataFromFetch={arrayList} />
        </div>
        <div className="col-span-4 row-span-4 row-start-3">
          <ProductListPagination />
        </div>
      </div>
    </>
  );
};
export default ProductPage;
