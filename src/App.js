import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Cards from "./components/Cards";
import cardsData from "./utils/cardData";

const allFields = ["ALL", ...new Set(cardsData.map((card) => card.field))];

function App() {
  const [showData, setShowData] = useState(cardsData);
  const [buttons, setButton] = useState(allFields);

  //   Filter Function

  const filter = (button) => {
    if (button === "ALL") {
      setShowData(cardsData);
      return;
    }

    const filteredData = cardsData.filter((card) => card.field === button);
    setShowData(filteredData);
  };

  return (
    <div className="cards--section">
      <div className="navbar">
        <Button button={buttons} filter={filter} />
      </div>
      <div className="cards--section__cards">
        <Cards showData={showData} />
      </div>
    </div>
  );
}

export default App;
