import "./App.css";

//hooks:
import { useFetch } from "./hooks/useFetch";
import { useState, useRef } from "react";

//components:
import MaleList from "./components/MaleList.js";
import FemaleList from "./components/FemaleList";

function App() {
  const url = "http://localhost:3000/championship-tour";

  const { data: tour } = useFetch(url);

  const [display, setDisplay] = useState(true);

  return (
    <div className="App">
      <div className="title">
        <h1>2022 WSL Champions</h1>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            setDisplay(true);
          }}
        >
          Men's Tour
        </button>
        <button
          className="button"
          onClick={() => {
            setDisplay(false);
          }}
        >
          Women's Tour
        </button>
      </div>
      <div className="tour">
        {display === true
          ? tour?.map((event) => (
              <MaleList
                event={event.event}
                locale={event.locale}
                maleChampion={event.malechampion}
                maleVice={event.malevice}
                key={event.id}
              />
            ))
          : tour?.map((event) => (
              <FemaleList
                event={event.event}
                locale={event.locale}
                femaleChampion={event.femalechampion}
                femaleVice={event.femalevice}
                key={event.id}
              />
            ))}
        <div className="description">
          <p className="description-p">
            This project is my first ever React project. It was designed with
            ReactJS, CSS and information from the WSL official site. For more
            info check:
            <a href="https://www.worldsurfleague.com" target="_blank">
              www.worldsurfleague.com
            </a>
            . And for more projects check my github repositorie here :
            <a href="https://github.com/felipeNardi09" target="_blank">
              github.com/felipeNardi09
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
