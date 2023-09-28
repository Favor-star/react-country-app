import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import MoreInfo from "./components/MoreInfo";
import Spinner from "./components/Spinner";
// import Card from "./components/Card";
import SearchContext from "./components/SearchContext";

function App() {
  const [countries, setCountries] = useState([]);
  const [indexVal, setIndexVal] = useState(null);
  const [result, setResult] = useState(null);
  const [checkIndex, setCheckIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const getCountries = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/africa"
    );
    const data = await response.json();
    setCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);
  const getIndex = (indexValue) => {
    setIndexVal(indexValue);
  };
  return (
    <SearchContext.Provider
      value={[countries,indexVal,checkIndex]
        // result !== undefined && result !== null && checkIndex === indexVal
        //   ? result
        //   : false
      }
    >
      <div className="container-fluid border">
        <div
          className="d-flex flex-wrap gap-3 py-2 my-3 justify-content-center align-items-center"
          style={{ backgroundColor: "#00aa6c40" }}
        >
          {countries.length > 0 ? (
            countries.map((country, index) => (
              <Card
                key={index}
                click={() => {
                  getIndex(index);
                  setIsClicked(!isClicked);
                  setCheckIndex(index);
                }}
                country={country}
        
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
