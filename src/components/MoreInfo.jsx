import React, { useContext, useEffect, useState } from "react";
import SearchContext from "./SearchContext";
import Spinner from "./Spinner";
import image2 from "./images/Image2.png";
const MoreInfo = ({ yes, names, yesClick }) => {
  const [countries, indexVal, checkIndex] = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoading(false);
    setImageLoaded(true);
  };
  useEffect(() => {
    setIsLoading(false);
  }, [indexVal]);
  return (
    <>
      {isLoading === true ? (
        <>
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn-primary btn-sm"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            onClick={yesClick}
          >
            See More
          </button>

          <div>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header border m-2 rounded border-3 border-opacity-50 border-primary bg-primary bg-opacity-25">
                <h5
                  className="offcanvas-title border text-dark"
                  id="offcanvasExampleLabel"
                >
                  {indexVal !== null && countries[indexVal].name.official}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  <div>
                    {indexVal !== null ? (
                      <>
                        <div className="container  mx-auto ">
                          {indexVal !== checkIndex && <Spinner />}
                          {!isLoading && indexVal === checkIndex ? (
                            <>
                              <img
                                className=" img-fluid d-flex flex-row mx-auto p-1 shadow"
                                style={{ maxHeight: "300px" }}
                                src={
                                  Object.keys(countries[indexVal].coatOfArms)
                                    .length === 0
                                    ? image2
                                    : indexVal === checkIndex
                                    ? countries[indexVal].coatOfArms.svg
                                    : ""
                                }
                                alt={`coatOfArms-of${countries[indexVal].name.official}`}
                                onLoad={handleImageLoad}
                              />
                              <p className="fst-italic fw-semibold me-5 text-center">
                                Coart Of Arms
                              </p>
                            </>
                          ) : (
                            <Spinner />
                          )}
                        </div>
                        <div>
                          <span className="text-dark fw-semibold">
                            Official Name:
                          </span>
                          {countries[indexVal].name.official}
                        </div>
                        {console.log(countries[indexVal])}
                        <div className="list-group column-gap-1 bg-dark text-white  mb-3 p-1">
                          <span className="fw-bold">
                            Geographical Information:
                          </span>
                          <div className=" d-flex  bg-dark-subtle p-2 rounded-top list-group-item">
                            <p className="fst-italic p-0 m-0 ">Region: </p>
                            <p className="fw-bold p-0 m-0 text-primary ">
                              {countries[indexVal].region}
                            </p>
                          </div>
                          <div className="d-flex bg-dark-subtle column-gap-1  p-2  list-group-item">
                            <p className="fst-italic p-0 m-0 ">Sub-region:</p>
                            <p className="fw-bold p-0 m-0 text-primary ">
                              {countries[indexVal].subregion}
                            </p>
                          </div>
                          <div className="d-flex bg-dark-subtle column-gap-1  p-2 list-group-item">
                            <p className="fst-italic p-0 m-0 ">Area:</p>
                            <p className="fw-bold p-0 m-0 text-primary ">
                              {countries[indexVal].area} Sq Km
                            </p>
                          </div>
                          <div className="d-flex bg-dark-subtle column-gap-1  p-2 list-group-item">
                            <p className="fst-italic p-0 m-0 ">Population:</p>
                            <p className="fw-bold p-0 m-0 text-primary ">
                              {countries[indexVal].population}
                            </p>
                          </div>
                          <div className="d-flex bg-dark-subtle column-gap-1  p-2  list-group-item">
                            <p className="fst-italic p-0 m-0 ">Latitudes:</p>
                            <p className="fw-bold p-0 m-0 text-primary ">
                              {countries[indexVal].latlng[0]}
                            </p>
                          </div>
                          <div className="d-flex bg-dark-subtle column-gap-1  p-2 rounded-bottom list-group-item">
                            <p className="fst-italic p-0 m-0 ">Longitudes:</p>
                            <p className="fw-bold p-0 m-0 text-primary ">
                              {countries[indexVal].latlng[1]}
                            </p>
                          </div>
                        </div>
                        <div className="list-group bg-dark text-white  p-1">
                          <span className="fw-bold">Currencies:</span>{" "}
                          <span>
                            {Object.keys(countries[indexVal].currencies).map(
                              (currency) => {
                                return (
                                  <>
                                    <div className="list-group-item bg-dark-subtle rounded-top">
                                      <span className="fst-italic">Name: </span>
                                      <span className="fw-bold text-primary">
                                        {
                                          countries[indexVal].currencies[
                                            currency
                                          ].name
                                        }
                                      </span>
                                    </div>
                                    <div className="list-group-item bg-dark-subtle rounded-bottom">
                                      <span className="fst-italic">
                                        Symbol:{" "}
                                      </span>
                                      <span className="fw-bold text-primary">
                                        {
                                          countries[indexVal].currencies[
                                            currency
                                          ].symbol
                                        }
                                      </span>
                                    </div>
                                  </>
                                );
                              }
                            )}
                          </span>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-6">
                            <div className="btn-group">
                              <button
                                className="btn btn-outline-primary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Time Zones
                              </button>
                              <ul className="dropdown-menu bg-secondary-subtle">
                                {countries[indexVal].timezones.map((val) => (
                                  <li className="dropdown-item border-bottom border-1 border-white">
                                    {val}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {countries[indexVal].hasOwnProperty("borders") &&
                          countries[indexVal].borders.length > 0 ? (
                            <div className="col-6">
                              <div className="btn-group">
                                <button
                                  className="btn btn-outline-primary  dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Borders
                                </button>
                                <ul className="dropdown-menu bg-secondary-subtle">
                                  {countries[indexVal].borders.map((val) => (
                                    <li className="dropdown-item border-bottom border-1 border-white">
                                      {val}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ) : (
                            <button className="col-5 btn btn-outline-primary btn-sm border border-primary rounded ">
                              No borders countries
                            </button>
                          )}
                        </div>
                      </>
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MoreInfo;
