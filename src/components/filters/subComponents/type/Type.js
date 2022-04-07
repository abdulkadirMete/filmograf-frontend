import React, { useContext, useEffect, useState } from "react";
import { BiMovie } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setRobotFilter } from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { getTypes } from "../../../../context/typeContext/apiCalls";
import { TypeContext } from "../../../../context/typeContext/TypeContext";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import { scrollSettings, typeLimitFilter } from "../../../../data/options";
import { strings } from "../../../../data/text";
import { scrollToDivider } from "../../../../helpers/helpers";
import { SectionHeading } from "../../../../styles/globalStyles";
import { CommonHeader } from "../../FiltersStyles";
import { DropDown } from "../dropdown/DropDown";
import { TypeItem, TypesContainer, TypesSection } from "./TypeStyles";

export const Type = ({ mobileMenuMode }) => {
  const { types, typesLoading, typesError, dispatch } = useContext(TypeContext);
  const { dispatch: movieDispatch } = useContext(MovieContext);
  const { toggleAside } = useContext(UtilContext);
  const { type } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    if (typesLoading) return;
    getTypes(dispatch);
  }, []);

  const handleTypeClick = (id) => {
    setRobotFilter(false, movieDispatch);
    toggleAside(false);
    scrollToDivider();
  };

  // drop down
  const [drop, setDrop] = useState(false);

  // error
  if (typesError) {
    toast.error("Film türleri yüklenirken bir hata oluştu!!");
    navigate("/notfound");
  }
  return (
    <TypesSection mobileMenuMode={mobileMenuMode}>
      {!mobileMenuMode && (
        <CommonHeader>
          <BiMovie className="icon" />
          <SectionHeading>{strings.typeTitle}</SectionHeading>
        </CommonHeader>
      )}
      <TypesContainer mobileMenuMode={mobileMenuMode}>
        {(drop ? types : types?.slice(0, typeLimitFilter))?.map((item) => {
          return (
            <Link to={`/filter/types/${item._id}`} key={item._id}>
              <TypeItem
                mobileMenuMode={mobileMenuMode}
                className={item._id === type ? "active" : null}
                onClick={() => handleTypeClick(item._id)}
                key={item._id}
                id={item._id}
              >
                {item.title.replace("Filmleri", "").replace("Filmler", "")}
              </TypeItem>
            </Link>
          );
        })}
      </TypesContainer>
      <DropDown
        mobileMenuMode={mobileMenuMode}
        drop={drop}
        setDrop={setDrop}
      ></DropDown>
    </TypesSection>
  );
};
