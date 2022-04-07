import React, { useContext, useEffect, useState } from "react";
import { BsBookmarksFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  addToWatchList,
  removeToWatchList,
} from "../../../../context/authContext/apiCalls";
import { AuthContext } from "../../../../context/authContext/AuthContext";
import { defaultMoviePhoto } from "../../../../data/options";
import {
  BookmarkButton,
  DetailImg,
  DetailImgGroup,
  DetailImgWrapper,
  SkeletonPlaceHolder,
} from "./MovieImageGroupStyles";
import { MovieRate } from "./subComponents/MovieRate";

export const MovieImageGroup = ({
  _id,
  img,
  name,
  avarageRate,
  imdb,
  release,
}) => {
  // add to watchlist
  const [bookmark, setBookmark] = useState(false);
  const { watchList, dispatch } = useContext(AuthContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  // check bookmark is exist
  useEffect(() => {
    const watchListMovieIds = watchList.map((movie) => movie._id);
    if (watchListMovieIds.includes(_id)) {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
  }, [watchList]);

  const handleToggleWatchList = () => {
    if (!bookmark) {
      const bookmarkMovie = { _id, img, name, imdb, release };
      addToWatchList(bookmarkMovie, dispatch);
      toast.success("Film izleme listesine eklendi!!");
    } else {
      removeToWatchList(_id, dispatch);
      toast.info("Film izleme listesinden kaldırıldı!!");
    }
  };

  return (
    <DetailImgGroup>
      <DetailImgWrapper>
        <DetailImg
          imageLoaded={imageLoaded}
          src={img || defaultMoviePhoto}
          alt={name}
          onLoad={() => {
            setImageLoaded(true);
          }}
        ></DetailImg>
        <SkeletonPlaceHolder imageLoaded={imageLoaded} />
      </DetailImgWrapper>
      <BookmarkButton
        onClick={handleToggleWatchList}
        className={bookmark && "active"}
      >
        {bookmark ? "Listeden Kaldır" : "Listeye Ekle"}
      </BookmarkButton>
      <MovieRate avarageRate={avarageRate} />
    </DetailImgGroup>
  );
};
