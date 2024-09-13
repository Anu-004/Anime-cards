import { useState } from "react";
import "./ButtonTask.css";

const ButtonTask = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [showRevealButton, setShowRevealButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const harryPotter =
    "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg";
  const lordoftherings =
    "https://m.media-amazon.com/images/I/8150KG7y2EL._AC_UF1000,1000_QL80_.jpg";

  const toggleState = () => {
    setIsTrue(!isTrue);
    setShowRevealButton(true);
    setShowImage(false)
  };

  const revealImage = () => {
    setShowImage(true);

  };
  return (
    <div className="container">
      <p>The state is now {isTrue ? "true" : "false"}</p>
      <button
        onClick={toggleState}
        className={`change-state-button ${
          isTrue ? "true-state" : "false-state"
        } `}
      >
        Change State
      </button>
      <br />
      {showRevealButton && (
        <button
          className={`reveal-beast-button ${
            isTrue ? "true-state" : "false-state"
          } `}
          onClick={revealImage}
        >
          Reveal the {isTrue ? "Harry Potter" : "Lord of the rings"}
       
        </button>
      )}
      {/* {showRevealButton ? (
        <button
          className={`reveal-beast-button ${
            isTrue ? "true-state" : "false-state"
          } `}
          onClick={revealImage}
        >
          Reveal the {isTrue ? "Harry Potter" : "Lord of the rings"}
       
        </button>
      ): null} */}

      {showImage && (
        <div>
          <img
            src={isTrue ? harryPotter : lordoftherings}
            alt={isTrue ? "harryPotter" : "lordoftherings"}
          />
        </div>
      )}

{/* {showImage ? (
        <div>
          <img
            src={isTrue ? harryPotter : lordoftherings}
            alt={isTrue ? "harryPotter" : "lordoftherings"}
          />
        </div>
      ):null} */}

    </div>
  );
};

export default ButtonTask;
