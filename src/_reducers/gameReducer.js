import { getTiles } from "_actions";
import * as actions from "_actions/types";

export const initState = {
  imgUrl: "",
  time: {},
  status: "PREGAME",
  level: "Easy",
  gridSize: 3,
  boardSize: 320,
  tiles: getTiles(),
};

const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.START_GAME:
      return { ...state, status: actions.PLAYING };

    case actions.PAUSE_GAME:
      return { ...state, status: actions.PAUSE };

    case actions.STOP_GAME:
      return {
        ...state,
        status: actions.PREGAME,
        tiles: getTiles(state.gridSize),
      };

    case actions.RESTART_GAME:
      return { ...state, status: actions.PREGAME };

    case actions.GAME_OVER:
      return { ...state, status: actions.WON, time: payload };

    case actions.CHANGE_LEVEL:
      return {
        ...state,
        level: payload.name,
        status: actions.PREGAME,
        gridSize: payload.gridSize,
        tiles: getTiles(payload.gridSize),
      };

    case actions.CHANGE_IMAGE:
      return { ...state, imgUrl: payload };

    case actions.SET_TILES:
      return { ...state, tiles: payload };

    default:
      return state;
  }
};

export default gameReducer;
