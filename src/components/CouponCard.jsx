import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./CouponCard.module.css";
import { getAuthToken } from "../utils/auth";

function CouponCard({ coupon }) {
  let navigate = useNavigate();
  async function handleClaimCoupon() {
    const couponId = coupon.id;
    const token = getAuthToken();
    const response = await fetch(
      `http://localhost:8083/coupons/claim?campaignId=${couponId}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    console.log(response);
    if (response.status !== 200) {
      alert("Cannot claim this coupon: " + response.statusText);
    } else {
      alert('Success!')
      navigate("/coupons");
    }
  }
  return (
    <>
      <Card style={{ width: "18rem" }} className={classes.card}>
        <Card.Img
          variant="top"
          src="https://img.giftpop.vn/brand/PHUCLONG/MP2106100003_BASIC_origin.jpg"
        />
        <Card.Body>
          <Card.Title>{coupon.campaignCode}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {mapDiscountTypeEnumToString(coupon.type)}
          </Card.Subtitle>
          <Card.Text>{`Discount ${coupon.discountPercent}%, maximum ${coupon.maxDiscountValue} ${coupon.unit}`}</Card.Text>
          <Button variant="secondary">Details</Button>
          <Button variant="primary" onClick={handleClaimCoupon}>
            Get this
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CouponCard;

function mapDiscountTypeEnumToString(discountType) {
  switch (discountType) {
    case "SHIPPING_DISCOUNT":
      return "Free ship";
    case "PRICE_DISCOUNT":
      return "Sale off";
    default:
      return "Discount!!!";
  }
}
