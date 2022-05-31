/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Modal, Tile } from "components";
import { MdRefresh, MdPlayArrow } from "react-icons/md";
import { BOARD_SIZE } from "constants";
import { canSwap, shuffle, swap, isSolved } from "helpers";
import { GameContext } from "context";

import "./index.css";

const Board = ({ imgUrl, time, onStart, onStop }) => {
  const { state, dispatch, actions } = useContext(GameContext);
  console.log(state);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(state.tiles, state.gridSize);
    dispatch({
      type: actions.SET_TILES,
      payload: shuffledTiles,
    });
  };

  const swapTiles = (tileIndex) => {
    if (
      canSwap(
        tileIndex,
        state.tiles.indexOf(state.tiles.length - 1),
        state.gridSize
      )
    ) {
      const swappedTiles = swap(
        state.tiles,
        tileIndex,
        state.tiles.indexOf(state.tiles.length - 1)
      );
      dispatch({
        type: actions.SET_TILES,
        payload: swappedTiles,
      });
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  // const handleShuffleClick = () => {
  //   shuffleTiles();
  // };

  const handleStartClick = () => {
    onStart();
    shuffleTiles();
    dispatch({
      type: actions.START_GAME,
    });
  };

  const pieceWidth = Math.round(BOARD_SIZE / state.gridSize);
  const pieceHeight = Math.round(BOARD_SIZE / state.gridSize);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };

  useEffect(() => {
    if (state.status === actions.PLAYING && isSolved(state.tiles)) {
      dispatch({
        type: actions.GAME_OVER,
        payload: time,
      });
      onStop();
    }
  }, [state.tiles, state.status]);

  return (
    <>
      <ul style={style} className="board">
        {state.tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {state.status === actions.WON && <Modal />}
      {state.status === actions.PREGAME ? (
        <button className="play_btn" onClick={handleStartClick}>
          <MdPlayArrow size={30} />
        </button>
      ) : (
        <button className="refresh_btn" onClick={handleStartClick}>
          <MdRefresh size={30} />
        </button>
      )}
    </>
  );
};

export default Board;
