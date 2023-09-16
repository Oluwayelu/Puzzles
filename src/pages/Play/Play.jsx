import { motion } from "framer-motion";
import { MdRefresh } from "react-icons/md";
import { Prompt, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay, FaPause, FaStop, FaImage } from "react-icons/fa";

import { useTimer } from "hooks";
import { useGame } from "context";
import { isSolved } from "helpers";
import { shuffleTiles } from "_actions";
import { WELCOME } from "navigation/routes";
import { Board, Header, Modal, SelectLevel } from "components";

import "./play.css";

export const Play = () => {
  const [showPic, setShowPic] = useState(false);

  const { time, onStart, onStop, onPause } = useTimer();
  const { state, dispatch, actions } = useGame();

  useEffect(() => {
    if (state.status === actions.PLAYING && isSolved(state.tiles)) {
      dispatch({
        type: actions.GAME_OVER,
        payload: time,
      });
      onStop();
    }
  }, [
    state.tiles,
    state.status,
    actions.PLAYING,
    actions.GAME_OVER,
    dispatch,
    time,
    onStop,
  ]);

  const handlePlay = () => {
    if (state.status === actions.PREGAME) {
      onStop();
      shuffleTiles(state, dispatch);
    }
    onStart();
    dispatch({
      type: actions.START_GAME,
    });
  };

  const handlePause = () => {
    onPause();
    dispatch({
      type: actions.PAUSE_GAME,
    });
  };

  const handleRefresh = () => {
    onStop();
    onStart();
    shuffleTiles(state, dispatch);
    dispatch({
      type: actions.START_GAME,
    });
  };

  const handleStop = () => {
    onStop();
    dispatch({
      type: actions.STOP_GAME,
    });
  };

  return (
    <div className="container">
      <Header time={time} />

      <div className="content">
        {/* controls */}
        <div className="controls">
          {state.status !== actions.PREGAME && (
            <button onClick={handleRefresh}>
              <MdRefresh size={20} />
            </button>
          )}
          {state.status === actions.PLAYING ? (
            <button onClick={handlePause}>
              <FaPause size={20} />
            </button>
          ) : (
            <button onClick={handlePlay}>
              <FaPlay size={20} />
            </button>
          )}
          <button onClick={handleStop}>
            <FaStop size={20} className="error" />
          </button>

          {state.imgUrl && (
            <>
              <button onClick={() => setShowPic((prev) => !prev)}>
                <FaImage size={20} />
              </button>
              {showPic && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                  className="img_display"
                >
                  <img src={state.imgUrl} alt="puzzle" className="img" />
                </motion.div>
              )}
            </>
          )}
        </div>
        <Board imgUrl={state.imgUrl} />
      </div>
      <Prompt
        when={state.status === actions.PLAYING}
        message="Are you sure you wannt to leave?"
      />
      {state.status === actions.WON && (
        <Modal header="Puzzle solved">
          <div>
            <p>Level: {state.level}</p>
            <p>
              Score: {state.time.hours > 0 && state.time.hours + "h:"}
              {state.time.minutes && state.time.minutes}m:
              {state.time.seconds && state.time.seconds}s
            </p>
          </div>
          <SelectLevel />
          <div className="page-btn">
            <Link to={WELCOME} className="btn btn-error">
              Go home
            </Link>
            <button
              onClick={() => {
                dispatch({
                  type: actions.RESTART_GAME,
                });
              }}
              className="btn btn-primary"
            >
              Play Again
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
