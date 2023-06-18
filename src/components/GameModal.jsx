import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WheelComponent from "react-wheel-of-prizes";
import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import classes from './GameModal.module.css'

function GameModal() {
  const game = useLoaderData();
  const segments = game.gameContent.map((content) => content.campaignCode);
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner) => {
    console.log(winner);
  };
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
      <Modal.Body className={classes.modal_body} >
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
        <Button href={`/games`}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal;

export async function gameDetailLoader({params}) {
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
  console.log(resData.game);
  return resData.game;
}
