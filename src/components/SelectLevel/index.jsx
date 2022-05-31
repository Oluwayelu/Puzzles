import { useContext } from "react";
import { GameContext } from "context";
import { levelOptions } from "constants";

import "./index.css";

function getLevel(name) {
  return levelOptions.find((obj) => obj.name === name);
}

const SelectLevel = () => {
  const { state, dispatch, actions } = useContext(GameContext);

  return (
    <div className="level_main">
      <h1 className="title">Choose Level</h1>
      <div className="btn_group">
        {levelOptions.map((level, idx) => (
          <button
            key={idx}
            className={`${
              state.level === level.name ? "active" : ""
            } level_btn`}
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
    </div>
  );
};

export default SelectLevel;
