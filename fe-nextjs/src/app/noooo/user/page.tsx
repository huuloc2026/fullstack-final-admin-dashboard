import { ChartArea } from "@/app/components/chart-area";
import ProductCRUD from "@/app/noooo/product/ProductForm";

import React from "react";

export const UserPage = () => {
  const arrayList: any[] = [];
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-6 gap-4 ">
        <div className="col-span-2 row-span-2  ">
          User Layout updating....
          <ProductCRUD />
        </div>
        <div className="col-span-2 row-span-2 col-start-3">
          <ChartArea dataFromFetch={arrayList} />
        </div>
        <div className="col-span-4 row-span-4 row-start-3"></div>
      </div>
    </>
  );
};
export default UserPage;
