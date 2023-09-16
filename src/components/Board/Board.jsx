import { useGame } from "context";
import { Tile } from "components";
import { swapTiles } from "_actions";
import { BOARD_SIZE } from "utils/constants";

import "./board.css";

const Board = ({ imgUrl }) => {
  const { state, dispatch, actions } = useGame();

  const handleTileClick = (index) => {
    swapTiles(state, dispatch, index);
  };

  const pieceWidth = Math.round(BOARD_SIZE / state.gridSize);
  const pieceHeight = Math.round(BOARD_SIZE / state.gridSize);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };

  return (
    <>
      <ul style={style} className="board">
        {state.tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            imgUrl={state.imgUrl}
            handleTileClick={handleTileClick}
          />
        ))}
        {state.status !== actions.PLAYING && (
          <div className="options">
            {state.status === actions.PREGAME ? "START GAME" : state.status}
          </div>
        )}
      </ul>
    </>
  );
};

export default Board;
