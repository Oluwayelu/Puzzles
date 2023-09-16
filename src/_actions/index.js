import { canSwap, shuffle, swap } from "helpers";

import { SET_TILES} from "./types";

export const getTiles = (gridSize = 3) => {
  return new Array(gridSize ** 2).fill().map((_, index) => index);
};

export const swapTiles = (state, dispatch, tileIndex) => {
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
      type: SET_TILES,
      payload: swappedTiles,
    });
  }
};

export const shuffleTiles = (state, dispatch) => {
  const shuffledTiles = shuffle(state.tiles, state.gridSize);
  dispatch({
    type: SET_TILES,
    payload: shuffledTiles,
  });
};
