import React, { useContext, useEffect, useState } from "react";
// import image from "./images/image1.JPG";
import MoreInfo from "./MoreInfo";
import Spinner from "./Spinner";
import SearchContext from "./SearchContext";

const Card = ({ country, click, clicked }) => {
  let [checkIndex] = useContext(SearchContext);

  const { names } = country;

  return (
    <div className="card" style={{ width: "15rem" }}>
      <img
        src={country.flags.svg}
        alt=""
        className="card-img-top border border-dark rounded"
      />
      <div className="card-body">
        {/* {console.log(country)} */}
        <h5 className="card-title">{country.name.common}</h5>
        <div className="card-text">
          Capital City:<h5> {country.capital}</h5>
        </div>
        <p className="card-text">Population: {country.population}</p>
        <p className="card-text">Area: {country.area} sq km</p>
        {/*  */}
       

        {country !== undefined ? (
          <>
            {/* <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              See more
            </button> */}
            <MoreInfo key={checkIndex} yes={country} yesClick={click} names={names} />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Card;
