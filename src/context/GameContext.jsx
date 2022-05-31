import { useReducer, createContext } from "react";
import { gameInitState, gameReducer } from "_reducers";
import * as actions from "_actions/types";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, gameInitState);
  const providerValue = {
    state,
    actions,
    dispatch,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
