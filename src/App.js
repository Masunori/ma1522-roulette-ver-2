import { useState } from "react";
import Banner from "./assets/Banner";
import Rule from "./assets/Rule";
import RollAnimation from "./assets/RollAnimation";
import "./fonts.css";
import "./styles.css";
import RollResultDisplayer from "./assets/RollResultDisplayer";

let rollCount = 0;

const rollInformation = ["The Chosen One", "Wild Card", "Not Chosen"];

export default function App() {
  const [rollResults, setRollResults] = useState([]);
  const [outcome, setOutcome] = useState(2);

  const [passToRRD, setPassToRRD] = useState([]);

  function setAndLog (result) {
    setOutcome(2);
    setPassToRRD(prev => Array.isArray(result) ? result : [result]);

    if (result === 0 || result === 1 || result === 2) {
      rollCount++;
      setRollResults(oldLog => {
        const newLog = [...oldLog];
        newLog.unshift([rollCount, rollInformation[result]]);
        return newLog; 
      })

      setOutcome(prev => Math.min(prev, result));
      console.log(rollCount + ": " + outcome);
    } else if (Array.isArray(result)) {
      for (const res of result) {
        rollCount++;
        const currentRollCount = rollCount;
        setRollResults(oldLog => {
          const newLog = [...oldLog];
          newLog.unshift([currentRollCount, rollInformation[res]]);
          return newLog; 
        })

        setOutcome(prev => Math.min(prev, res));
      }
    }
  };

  console.log(passToRRD);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  }

  const handleEnded = () => {
    setTimeout(() => {
      setIsPlaying(false);
    }, 250)
    setTimeout(() => {
      setIsRRDDisplayed(true);
    }, 750);
  }

  const [isRRDDisplayed, setIsRRDDisplayed] = useState(false);

  const closeRRD = () => {
    setIsRRDDisplayed(false);
  }

  return (
    <div id="app">
      <Banner setRollResults={setAndLog} playAnimation={handlePlay} />
      <Rule rollResults={rollResults} />
      <RollAnimation isPlaying={isPlaying} handleEnded={handleEnded} outcome={outcome} />
      <RollResultDisplayer resultArray={passToRRD} closeRRD={closeRRD} displayStatus={isRRDDisplayed} />
    </div>
  )
}
