import React from "react";
import image from "./images/image1.JPG";
import MoreInfo from "./MoreInfo";
import Spinner from "./Spinner";

const Card = ({ country,click }) => {
  const { thisCountry } = country;
  return (
    <div className="card" style={{ width: "15rem" }}>
      {/* <div className="card-header">{}</div> */}

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
              <button className="btn btn-secondary"  onClick={click}>Get ID</button>
        {country !== undefined ? <MoreInfo country={country} /> : <Spinner />}
      </div>
    </div>
  );
};

export default Card;
