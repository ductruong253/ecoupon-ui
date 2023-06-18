import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import CouponsList from "../components/CouponsList";

function CouponPage() {
  const coupons = useLoaderData();
  return <CouponsList coupons={coupons} />;
}

export default CouponPage;

export async function couponsLoader() {
  const token = getAuthToken();
  const response = await fetch("http://localhost:8083/campaigns", {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Credentials": true,
    },
  });
  const resData = await response.json();
  console.log(resData.campaigns);
  return resData.campaigns;
}
