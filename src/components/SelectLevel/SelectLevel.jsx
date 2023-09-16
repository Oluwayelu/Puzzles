import { useContext } from "react";
import { GameContext } from "context";

import { levelOptions } from "utils/constants";

import "./select_level.css";

function getLevel(name) {
  return levelOptions.find((obj) => obj.name === name);
}

const SelectLevel = () => {
  const { state, dispatch, actions } = useContext(GameContext);

  return (
    <div className="btn_group">
      {levelOptions.map((level, idx) => (
        <button
          key={idx}
          className={`${
            state.gridSize === level.grid ? "btn-primary" : "btn-white"
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
  );
};

export default SelectLevel;
