import { useContext } from "react";
import { Motion, spring } from "react-motion";

import { GameContext } from "context";
import { BOARD_SIZE } from "utils/constants";
import { getMatrixPosition, getVisualPosition } from "helpers";

function Tile(props) {
  const { state } = useContext(GameContext);
  const { tile, index, width, height, handleTileClick } = props;
  const { row, col } = getMatrixPosition(index, state.gridSize);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileStyle = {
    width: `calc(100% / ${state.gridSize})`,
    height: `calc(100% / ${state.gridSize})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    border: "1px solid white",
    listStyle: "none",
    display: "grid",
    placeItems: "center",
    boxSizing: "border-box",
    backgroundImage: `url(${state.imgUrl})`,
    backgroundSize: `${BOARD_SIZE}px`,
    backgroundPosition: `${
      (100 / (state.gridSize - 1)) * (tile % state.gridSize)
    }% ${(100 / (state.gridSize - 1)) * Math.floor(tile / state.gridSize)}%`,
  };

  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y),
  };

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <div
          style={{
            ...tileStyle,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            // Is last tile?
            opacity: tile === state.gridSize ** 2 - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {!state.imgUrl && (
            <span className={`${state.imgUrl && "tile_num"}`}>{tile + 1}</span>
          )}
        </div>
      )}
    </Motion>
  );
}

export default Tile;
