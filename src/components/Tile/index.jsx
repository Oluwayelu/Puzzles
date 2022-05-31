import { useContext } from "react";
import { Motion, spring } from "react-motion";
import { GameContext } from "context";
import { getMatrixPosition, getVisualPosition } from "helpers";
import { BOARD_SIZE } from "constants";

function Tile(props) {
  const { state } = useContext(GameContext);
  const { tile, index, width, height, handleTileClick, imgUrl } = props;
  const { row, col } = getMatrixPosition(index, state.gridSize);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileStyle = {
    width: `calc(100% / ${state.gridSize})`,
    height: `calc(100% / ${state.gridSize})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: `${BOARD_SIZE * 1.25}px`,
    backgroundPosition: `${
      (100 / (state.gridSize - 1)) * (tile % state.gridSize)
    }% ${(100 / (state.gridSize - 1)) * Math.floor(tile / state.gridSize)}%`,
  };
  console.log(
    (100 / (state.gridSize - 1)) * (tile % state.gridSize),
    (100 / (state.gridSize - 1)) * Math.floor(tile / state.gridSize)
  );
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
          <span className={`${imgUrl && "tile_num"}`}>{tile + 1}</span>
        </div>
      )}
    </Motion>

    // <div
    //   style={{
    //     position: "absolute",
    //     width: "33.333%",
    //     height: "33.333%",
    //     border: "1px solid white",
    //     backgroundSize: "300%",
    //     backgroundImage: `url(${imgUrl})`,
    //     translateX: visualPos.x,
    //     translateY: visualPos.y,
    //     listStyle: "none",
    //     display: "grid",
    //     background: "#669bec",
    //     backgroundPosition: `${
    //       (100 / (state.gridSize - 1)) * (tile % state.gridSize)
    //     }% ${
    //       (100 / (state.gridSize - 1)) * Math.floor(tile / state.gridSize)
    //     }%`,
    //     placeItems: "center",
    //     boxSizing: "border-box",
    //   }}
    // >
    //   <span className={`${imgUrl && "tile_num"}`}>{tile + 1}</span>
    // </div>
  );
}

export default Tile;
