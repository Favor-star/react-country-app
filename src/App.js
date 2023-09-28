import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import MoreInfo from "./components/MoreInfo";
import Spinner from "./components/Spinner";
// import Card from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);
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
  const getID = () => {
    console.log(true)
   
}
  return (
    <div className="container-fluid border"> 
      <MoreInfo />
     
      <div className="d-flex flex-wrap gap-3 py-2 my-3 justify-content-center align-items-center" style={{ backgroundColor: "#00aa6c40" }}>
        {countries.length > 0 ? (
          countries.map((country) => <Card key={country.name.common} click={getID} country={country} />)
        ) : (
           <Spinner/>
        )}
      </div>
    </div>
  );
}

export default App;
