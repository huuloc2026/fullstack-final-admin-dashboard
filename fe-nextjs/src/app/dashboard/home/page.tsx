import { ChartArea } from "@/app/components/chart-area";
import { ChartBar } from "@/app/components/chart-bar";
import ListProduct from "@/app/components/list-01";
import { fetchToken } from "@/app/dashboard/product/fetchProduct";
import UserList from "@/app/components/list-user";
import { Calendar } from "lucide-react";
import { FetchProduct, FetchUser } from "@/utils/httpRequest";

const HomeDashBoardPage = async () => {
  const token = await fetchToken();
  if (!token) return;

  const fetchProduct = await FetchProduct(token);
  const fetchUser = await FetchUser(token);
  const arrayProduct = fetchProduct;
  const arrayUser = fetchUser;
  return (
    <div className="grid grid-cols-8 grid-rows-6 gap-4 ">
      {/* Left Panel - List */}
      <div className="col-span-2 row-span-2 col-start-1 col-end-5  rounded-lg shadow-sm ">
        <ListProduct arrayProduct={arrayProduct} />
      </div>

      {/* User List */}
      <div className="col-span-2 row-span-2 col-start-5  col-end-10 rounded-lg shadow-sm ">
        <UserList arrayUser={arrayUser} />
      </div>

      {/* Large Chart */}
      {/* <div className="col-span-5 row-span-3 row-start-3">
        <ChartBar />
      </div> */}

      {/* Upcoming Events */}
      {/* <div className="col-span-3 row-span-3 col-start-6 row-start-3">
        <ListProduct />
      </div> */}
    </div>
  );
};

export default HomeDashBoardPage;
