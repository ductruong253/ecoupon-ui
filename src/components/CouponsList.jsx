import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CouponCard from "./CouponCard";

function CouponsList({ coupons }) {
  if (!coupons) {
    return <>There is no coupon available</>;
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
