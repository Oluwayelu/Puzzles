import { useContext } from "react";
import { GameContext } from "context";
import { imageOptions } from "constants";

import "./index.css";

function getLevel(name) {
  return imageOptions.find((obj) => obj.name === name);
}

const SelectLevel = () => {
  const { state, dispatch, actions } = useContext(GameContext);

  return (
    <div className="level_main">
      <h1 className="title">Choose Image</h1>
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
    </div>
  );
};

export default SelectLevel;
