import Card from "react-bootstrap/Card";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./GameInfoCard.module.css";
import { getAuthToken } from "../utils/auth";

function GameInfoCard({ game }) {
  return (
    <Card style={{ width: "18rem" }} className={classes.card}>
      <Card.Img
        variant="top"
        src="https://img.giftpop.vn/brand/PHUCLONG/MP2106100003_BASIC_origin.jpg"
      />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>{" "}
        <Card.Subtitle className="mb-2 text-muted">Game subtitle</Card.Subtitle>
        <Card.Text>game description</Card.Text>
        <Button variant="primary" href={`/games/play`}>
          Play!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GameInfoCard;
