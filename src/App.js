import { useRef, useState } from "react";
import Banner from "./assets/Banner";
import Rule from "./assets/Rule";
import RollAnimation from "./assets/RollAnimation";
import "./fonts.css";
import "./styles.css";

let rollCount = 0;

const rollInformation = ["The Chosen One", "Wild Card", "Not Chosen"];

export default function App() {
  const [rollResults, setRollResults] = useState([]);
  function setAndLog (result) {
    if (result === 0 || result === 1 || result === 2) {
      rollCount++;
      setRollResults(oldLog => {
        const newLog = [...oldLog];
        newLog.unshift([rollCount, rollInformation[result]]);
        return newLog; 
      })
      return;
    }

    if (Array.isArray(result)) {
      for (const res of result) {
        rollCount++;
        const currentRollCount = rollCount;
        setRollResults(oldLog => {
          const newLog = [...oldLog];
          newLog.unshift([currentRollCount, rollInformation[res]]);
          return newLog; 
        })
      }
    }
  };

  const videoRef = useRef(null);
  const [playFunction, setPlayFunction] = useState(() => () => null);

  const handleSetPlay = () => {
    setPlayFunction(() => {
      return () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      };
    });
  };

  return (
    <div id="app">
      <Banner setRollResults={setAndLog} playAnimation={handleSetPlay}/>
      <Rule rollResults={rollResults} />
      <RollAnimation setPlayFunction={{setPlayFunction}} />
    </div>
  )
}
