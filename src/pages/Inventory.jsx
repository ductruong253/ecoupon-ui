import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import CouponsList from "../components/CouponsList";

function InventoryPage() {
  const coupons = useLoaderData();
  return <CouponsList coupons={coupons.map(coupon => coupon.campaign)} />;
}

export default InventoryPage;

export async function inventoryLoader() {
  const token = getAuthToken();
  const response = await fetch("http://localhost:8083/coupons/inventory", {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Credentials": true,
    },
  });
  const resData = await response.json();
  console.log(resData.coupons);
  return resData.coupons;
}
