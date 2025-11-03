import Weather from "./Weather";
import NumberOfCitizens from "./NumberOfCitizens";
import WhereIsOlomucany from "./WhereIsOlomucany";
import Contact from "./Contact";
import Visit from "./Visit";
import Tips from "./Tips";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Olomučany</h1>
        <div className="cards">
          <Weather />
          <NumberOfCitizens />
          <WhereIsOlomucany />
          <Tips />
        </div>
      </div>
      <div className="container2">
        <Visit />
        <Contact />
      </div>
    </>
  );
}

export default App;
