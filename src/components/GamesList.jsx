import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./CouponList.module.css";
import GameInfoCard from "./GameInfoCard";

function GamesList({ games }) {
  if (!games || games.length === 0) {
    return (
      <div className={classes.noGame}>
        <h3>There is no game available</h3>
      </div>
    );
  } else {
    return (
      <Container>
        <Row>
          {games.map((game) => (
            <Col key={game.id} sm={6} md={6} lg={3} className="mt-3">
              <GameInfoCard key={game.id} game={game} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default GamesList;
