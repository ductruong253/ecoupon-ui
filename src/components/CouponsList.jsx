import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CouponCard from "./CouponCard";
import classes from "./CouponList.module.css";

function CouponsList({ coupons }) {
  if (!coupons || coupons.length === 0) {
    return (
      <div className={classes.noCoupon}>
        <h3>There is no coupon available</h3>
      </div>
    );
  } else {
    return (
      <Container>
        <Row>
          {coupons.map((coupon) => (
            <Col key={coupon.id} sm={6} md={6} lg={3} className="mt-3">
              <CouponCard key={coupon.id} coupon={coupon} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CouponsList;
