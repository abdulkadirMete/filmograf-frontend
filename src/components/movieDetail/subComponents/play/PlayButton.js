import React, { useContext, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { strings } from "../../../../data/text";
import { PlayButtonContainer } from "./PlayButtonStyles";
import { toast } from "react-toastify";

export const PlayButton = ({ video, increaseMovieView }) => {
  const { increaseViewLoading, increaseViewSuccess, increaseViewError } =
    useContext(MovieContext);
  const [redirectLock, setRedirectLock] = useState(false);

  console.log(increaseViewSuccess);
  useEffect(() => {
    console.log("work");
    if (redirectLock) {
      if (increaseViewLoading) return;
      if (increaseViewSuccess) {
        window.location.href = video;
      } else {
        toast.error(strings.defaultError);
      }
      setRedirectLock(false);
    }
  }, [redirectLock, increaseViewSuccess]);

  const handleClick = () => {
    if (redirectLock) return setRedirectLock(false);
    increaseMovieView();
    if (video.includes(strings.brokenSp)) {
      alert(strings.brokenSpMessage);
    }
    setRedirectLock(true);
  };
  return (
    <PlayButtonContainer onClick={handleClick}>
      <FaPlay />
    </PlayButtonContainer>
  );
};
