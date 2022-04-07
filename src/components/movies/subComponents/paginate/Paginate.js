import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { moviePerPage, paginateSettings } from "../../../../data/options";
import { strings } from "../../../../data/text";
import { determineUrl, scrollToDivider } from "../../../../helpers/helpers";
import {
  CurrentPage,
  NavigationButton,
  NavigationGroup,
  Pages,
} from "./PaginateStyles";

export const Paginate = () => {
  const { movies, count, hasRobotFilter, robotFilterValues } =
    useContext(MovieContext);

  // handle url change
  let { page = 1, type, release, imdb } = useParams();
  page = parseInt(page);

  let navigate = useNavigate();
  const setPage = (currentPage) => {
    navigate(
      determineUrl(
        hasRobotFilter,
        robotFilterValues,
        type,
        release,
        imdb,
        currentPage
      )
    );
  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    scrollToDivider();
  };

  // pagination for filter results
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrevious, setDisablePrevious] = useState(false);

  useEffect(() => {
    page === 1 && setDisablePrevious(true);
    movies.length !== moviePerPage && setDisableNext(true);
  }, []);

  const handlePreviousPage = () => {
    setPage(page - 1);
    scrollToDivider();
  };

  const handleNextPage = () => {
    setPage(page + 1);
    scrollToDivider();
  };

  // check any filter
  const hasAnyFilter = () => {
    return type || release || imdb;
  };

  return (
    <>
      {!hasAnyFilter() && !hasRobotFilter ? (
        <Pages
          pageCount={Math.ceil(count / moviePerPage)}
          onPageChange={handlePageClick}
          forcePage={page - 1}
          {...paginateSettings}
        ></Pages>
      ) : (
        <NavigationGroup>
          <NavigationButton
            disabled={disablePrevious}
            className={disablePrevious && "disabled"}
            onClick={handlePreviousPage}
          >
            {strings.paginateButtonPrevious}
          </NavigationButton>
          <CurrentPage>{page}</CurrentPage>
          <NavigationButton
            disabled={disableNext}
            className={disableNext && "disabled"}
            onClick={handleNextPage}
          >
            {strings.paginateButtonNext}
          </NavigationButton>
        </NavigationGroup>
      )}
    </>
  );
};
