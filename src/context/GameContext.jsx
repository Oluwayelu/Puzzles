import { useReducer, createContext } from "react";
import { gameInitState, gameReducer } from "_reducers";
import * as actions from "_actions/types";
import { useContext } from "react";

export const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame should be used within the GameProvider");
  }
  return context;
};

export const GameProvider = ({ children }) => {
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


