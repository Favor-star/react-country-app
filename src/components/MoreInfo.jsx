import React, { useContext, useEffect, useState } from "react";
import SearchContext from "./SearchContext";
import Spinner from "./Spinner";

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
              <div className="offcanvas-header border m-2 rounded border-3 border-opacity-50 border-info bg-info bg-opacity-25">
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
                        <div className="container">
                          {indexVal !== checkIndex && <Spinner />}
                          {!isLoading && indexVal === checkIndex ? (
                            <img
                              className="img-fluid"
                              src={
                                indexVal === checkIndex
                                  ? countries[indexVal].coatOfArms.svg
                                  : ""
                              }
                              alt={`coatOfArms-of${countries[indexVal].name.official}`}
                              onLoad={handleImageLoad}
                            />
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
                        <div>{countries[indexVal].name.common}</div>
                        {countries[indexVal].hasOwnProperty("borders") &&
                        countries[indexVal].borders.length > 0 ? (
                          <>
                            <div class="btn-group">
                              <button
                                class="btn btn-outline-primary btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Borders
                              </button>
                              <ul class="dropdown-menu bg-secondary bg-opacity-25">
                                {countries[indexVal].borders.map((val) => (
                                  <li class="dropdown-item border-bottom border-1 border-white">
                                    {val}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <ul className="list-group">
                            <li className="list-group-item">
                              {" "}
                              It has no borders countries
                            </li>
                          </ul>
                        )}
                      </>
                    ) : (
                      <Spinner />
                    )}
                    {console.log(countries[indexVal])}
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
