import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./CouponCard.module.css";
function CouponCard({ coupon }) {
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
          <Button variant="primary">Get this</Button>
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
