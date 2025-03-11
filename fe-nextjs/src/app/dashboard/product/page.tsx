import { ChartArea } from "@/app/components/chart-area";


import ProductList from "@/app/dashboard/product/ProductList";
import { fetchToken } from "@/utils/FetchToken";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { FetchProductPagination } from "@/utils/httpRequest";
import ProductCRUD from "./ProductForm";
export interface ProductPageProps {
  data: any;
  limit: number;
  page: number;
  total: number;
}
interface ParamsProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}
export const ProductPage = async ({ searchParams }: ParamsProps) => {
  const Param = await searchParams;
  console.log(Param);
  const token = await fetchToken();
  if (!token) return;
  const page = parseInt(Param.page || "1", 10);
  const limit = parseInt(Param.limit || "10", 10);
  const { data, total } = await FetchProductPagination(token, page, limit);
  const arrayList = data || [];
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
          <ProductList dataFromFetch={arrayList} />
          <PaginationWithLinks
            page={page}
            pageSize={limit}
            totalCount={total}
          />
        </div>
      </div>
    </>
  );
};
export default ProductPage;
