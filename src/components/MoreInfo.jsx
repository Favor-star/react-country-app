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
                <h4
                  className="offcanvas-title border text-dark"
                  id="offcanvasExampleLabel"
                >
                  {indexVal !== null && countries[indexVal].name.official}
                </h4>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="list-group bg-dark p-1 mb-4">
                  <h6 className="text-center fw-bold text-white ">
                    NATIVE NAMES
                  </h6>
                  o{indexVal !==null && Object.keys(countries[indexVal].name.nativeName).map(
                    (name) => {
                      return (
                        <>
                          <div className="list-group list-group-item mb-1 ">
                            <span className="list-group-item bg-dark-subtle d-flex flex-column ">
                              <span className="fw-bold bg-white border rounded border-primary text-primary text-center ">
                                {name.toUpperCase()}
                              </span>
                              <span className="d-flex column-gap-1">
                                <span className="fst-italic">Official:</span>
                                <span className="fw-bold text-primary">
                                  {
                                    countries[indexVal].name.nativeName[name]
                                      .official
                                  }
                                </span>
                              </span>
                              <span className="d-flex column-gap-1">
                                <span className="fst-italic"> Common:</span>
                                <span className="fw-bold text-primary">
                                  {
                                    countries[indexVal].name.nativeName[name]
                                      .common
                                  }
                                </span>
                              </span>{" "}
                            </span>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
                <div>
                  <div>
                    {indexVal !== null ? (
                      <>
                        <div className="container  mx-auto list-group bg-dark p-1 mb-4">
                          {indexVal !== checkIndex && <Spinner />}
                          {!isLoading && indexVal === checkIndex ? (
                            <>
                              <h6 className=" fw-semibold  text-center text-white">
                                COAT OF ARMS
                              </h6>
                              <img
                                className=" img-fluid d-flex flex-row mx-auto p-1 shadow list-group-item rounded"
                                style={{ maxHeight: "300px" }}
                                src={
                                  Object.keys(countries[indexVal].coatOfArms)
                                    .length === 0
                                    ? image2
                                    : indexVal === checkIndex
                                    ? countries[indexVal].coatOfArms.svg
                                    : ""
                                }
                                alt={`Coat of arms of ${countries[indexVal].name.official}`}
                                onLoad={handleImageLoad}
                              />
                            </>
                          ) : (
                            <Spinner />
                          )}
                        </div>

                        {console.log(countries[indexVal])}
                        <div className="list-group column-gap-1 bg-dark text-white  mb-3 p-1">
                          <h6 className="fw-bold text-center">
                            GEOGRAPHICAL INFORMATION
                          </h6>
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
                          <div className="d-flex bg-dark-subtle column-gap-1  p-2 list-group-item">
                            <p className="fst-italic p-0 m-0 ">Longitudes:</p>
                            <p className="fw-bold p-0 m-0 text-primary ">
                              {countries[indexVal].latlng[1]}
                            </p>
                          </div>
                          <div className="d-flex justify-content-center bg-dark-subtle column-gap-1  p-2 rounded-bottom list-group-item">
                            <div className="row">
                              <div className="col-6 mx-auto">
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
                                    {countries[indexVal].timezones.map(
                                      (val) => (
                                        <li className="dropdown-item border-bottom border-1 border-white">
                                          {val}
                                        </li>
                                      )
                                    )}
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
                                      {countries[indexVal].borders.map(
                                        (val) => (
                                          <li className="dropdown-item border-bottom border-1 border-white">
                                            {val}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              ) : (
                                <button className="col-5 btn btn-outline-primary btn-sm border border-primary rounded ">
                                  No borders countries
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="list-group bg-dark text-white  p-1">
                          <span className="fw-bold">Other Useful Info:</span>{" "}
                          <span className="list-group-item p-1 my-1 rounded">
                            <span>Currencies:</span>
                            {Object.keys(countries[indexVal].currencies).map(
                              (currency) => {
                                return (
                                  <>
                                    <div className=" bg-dark-subtle rounded-top">
                                      <span className="fst-italic">Name: </span>
                                      <span className="fw-bold text-primary">
                                        {
                                          countries[indexVal].currencies[
                                            currency
                                          ].name
                                        }
                                      </span>
                                    </div>
                                    <div className=" bg-dark-subtle rounded-bottom">
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
                          <span className="list-group-item list-group p-1 ">
                            <span className="fst-italic">Languages:</span>
                            {Object.keys(countries[indexVal].languages).map(
                              (lang) => {
                                return (
                                  <span className="text-primary list-group-item bg-dark-subtle fw-bold ">
                                    {countries[indexVal].languages[lang]}
                                  </span>
                                );
                              }
                            )}
                          </span>
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
