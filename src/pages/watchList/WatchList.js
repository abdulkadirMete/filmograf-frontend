import React, { useContext, useState } from "react";
import { DeleteDialog } from "../../components/movieDetail/subComponents/comment/subComponents/deleteDialog/DeleteDialog";
import { SecondaryMovieList } from "../../components/movies/subComponents/secondaryMovieList/SecondaryMovieList";
import { clearWatchList } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { strings } from "../../data/text";
import { RemoveListButton } from "./subComponents/removeListButton/RemoveListButton";

export const WatchList = () => {
  const { watchList, dispatch } = useContext(AuthContext);

  // remove watchList
  const [showDialog, setShowDiaolog] = useState(false);
  const confirmDeleteList = () => {
    setShowDiaolog(false);
    clearWatchList(dispatch);
  };

  return (
    <>
      <SecondaryMovieList
        movies={watchList}
        title={strings.watchListHeading}
        background={true}
      ></SecondaryMovieList>
      <RemoveListButton setShowDiaolog={setShowDiaolog} />
      {showDialog && (
        <DeleteDialog
          confirmFunction={confirmDeleteList}
          setShowDiaolog={setShowDiaolog}
          confirmMessage={strings.confirmWatchListDelete}
        />
      )}
    </>
  );
};
