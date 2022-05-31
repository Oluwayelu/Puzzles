import { useContext } from "react";
import Confetti from "react-confetti";
import { GameContext } from "context";

import "./index.css";
import { SelectLevel } from "components";

const Modal = () => {
  const { state, dispatch, actions } = useContext(GameContext);
  return (
    <div className="modal_main">
      <div className="background" />
      <div>
        {/* <Confetti width={window.innerWidth} height={window.innerHeight} /> */}
      </div>
      <div className="card">
        <div className="card_header">
          <p>Level: {state.level}</p>
          <p>Puzzle solved 🧠 🎉</p>
        </div>
        <div className="card_body">
          <p>
            Score: {state.time.hours > 0 && state.time.hours + "h:"}
            {state.time.minutes && state.time.minutes}m:
            {state.time.seconds && state.time.seconds}s
          </p>
          <SelectLevel />
        </div>
        <div className="footer">
          <div
            onClick={() => {
              dispatch({
                type: actions.RESTART_GAME,
              });
            }}
            className="action_btn"
          >
            Play Again
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
