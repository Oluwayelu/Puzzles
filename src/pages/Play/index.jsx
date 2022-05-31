import React, { useState, useEffect, useContext } from "react";
// import Typewriter from "typewriter-effect";
import { Board, Header } from "components";
import { updateURLParameter } from "helpers";
import { useTimer } from "hooks";
import { GameContext } from "context";

function Play() {
  const { state } = useContext(GameContext);
  const [imgUrl, setImgUrl] = useState("");
  const { time, onStart, onStop } = useTimer();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

  return (
    <div className="App">
      <Header time={time} />
      <Board
        imgUrl={state.imgUrl}
        time={time}
        onStart={onStart}
        onStop={onStop}
      />
      {/* <input value={imgUrl} onChange={handleImageChange} /> */}
    </div>
  );
}

export default Play;
