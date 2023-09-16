import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { GameContext } from "context";
import { PLAY } from "navigation/routes";
import { Header, Modal } from "components";
import { imageOptions, levelOptions } from "utils/constants";

import "./welcome.css";

function getLevel(name) {
  return levelOptions.find((obj) => obj.name === name);
}

export const Welcome = () => {
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const [showSelecetLevel, setShowSelecetLevel] = useState(false);

  const { state, dispatch, actions } = useContext(GameContext);

  useEffect(() => {
    setTimeout(() => {
      setShowHowToPlayModal(true);
    }, 500);
  }, []);

  return (
    <div className="container">
      <Header />

      <div className="content">
        <button
          onClick={() => setShowHowToPlayModal(true)}
          className="btn btn-primary"
        >
          How to play?
        </button>
        <h2>Choose Image</h2>
        <div className="img_group">
          <div
            className={`${
              state.imgUrl === "" ? "white_shadow active" : ""
            } tile_img`}
            onClick={() => {
              dispatch({
                type: actions.CHANGE_IMAGE,
                payload: "",
              });
            }}
          >
            1
          </div>
          {imageOptions.map((image, index) => (
            <img
              className={`${state.imgUrl === image.imgUrl ? "active" : ""} img`}
              src={image.imgUrl}
              alt={image.name}
              key={index}
              onClick={() => {
                dispatch({
                  type: actions.CHANGE_IMAGE,
                  payload: image.imgUrl,
                });
              }}
            />
          ))}
        </div>

        <div className="page-btn-end">
          <button
            onClick={() => setShowSelecetLevel(true)}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
      </div>

      {showSelecetLevel && (
        <Modal header="Select level" close={() => setShowSelecetLevel(false)}>
          <div className="btn_group">
            {levelOptions.map((level, idx) => (
              <button
                key={idx}
                className={`${
                  state.gridSize === level.gridSize
                    ? "btn-primary"
                    : "btn-white"
                } btn`}
                onClick={() => {
                  dispatch({
                    type: actions.CHANGE_LEVEL,
                    payload: getLevel(level.name),
                  });
                }}
              >
                {level.name}
              </button>
            ))}
          </div>
          <div className="page-btn">
            <button
              onClick={() => setShowSelecetLevel(false)}
              className="btn btn-error"
            >
              close
            </button>
            <Link to={PLAY}>
              <button
                onClick={() => setShowSelecetLevel(false)}
                className="btn btn-primary"
              >
                Play
              </button>
            </Link>
          </div>
        </Modal>
      )}
      {showHowToPlayModal && (
        <Modal header="How to play?" close={() => setShowHowToPlayModal(false)}>
          <div>
            <h3>Objective</h3>
            <p>
              The goal of the game is to arrange the shuffled pieces of an image
              back into thier original form
            </p>
          </div>
          <div>
            <h3>Difficulty Levels</h3>
            <ul>
              <li>Easy(3x3): Arrange 8 pieces in a 3x3 grid</li>
              <li>Medium(4x4): Arrange 15 pieces in a 4x4 grid</li>
              <li>Hard(5x5): Arrange 24 pieces in a 5x5 grid</li>
              <li>Advanced(7x7): Arrange 48 pieces in a 7x7 grid</li>
            </ul>
          </div>
          <div>
            <h3>How to play?</h3>
            <ul>
              <li>Tap on a piece to swap with the empty grid next it</li>
              <li>Continue moving pieces until the image is restored</li>
              <li>
                Once all pieces are correctly arranged, you've completed the
                puzzle!
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};
