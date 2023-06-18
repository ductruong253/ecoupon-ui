import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WheelComponent from "react-wheel-of-prizes";

function GameModal({game}) {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
  ];
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
