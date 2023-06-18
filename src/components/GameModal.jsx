import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WheelComponent from "react-wheel-of-prizes";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import classes from "./GameModal.module.css";
import { useState } from "react";

function GameModal() {
  let navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [played, setPlayed] = useState(false);
  const game = useLoaderData();
  const segments = game.gameContent.map((content) => content.campaignCode);
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];

  const onFinished = (winner) => {
    setCouponCode(winner);
    setPlayed(true);
  };

  async function handleClaimPrize() {
    const token = getAuthToken();
    const gameContent = game.gameContent;
    const couponId = gameContent.filter(
      (game) => game.campaignCode === couponCode
    )[0].id;

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
      alert("Success!");
      navigate("/coupons");
    }
  }

  return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {game.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.modal_body}>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </Modal.Body>
      <Modal.Footer>
        {played ? (
          <Button onClick={handleClaimPrize}>Get Prize!!!</Button>
        ) : (
          <Button href={`/games`}>Close</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal;

export async function gameDetailLoader({ params }) {
  const id = params.id;
  const token = getAuthToken();
  const response = await fetch(`http://localhost:8083/games/id/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Credentials": true,
    },
  });
  const resData = await response.json();
  return resData.game;
}
