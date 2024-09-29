let theChosenOneCountdown = 200;
let wildCardAccumulator = 0;


const THE_CHOSEN_ONE = 0;
const WILDCARD = 1;
const NAH = 2;

const isWhat = x => (theChosenOneCountdown === 0 || x < 0.01) ? THE_CHOSEN_ONE : (x < 0.0622 ? WILDCARD : NAH);

let rollOnesLeft = 10;

let isSomeoneChosen = false;
let temporary_roll_result = 2;

function roll() {
  if (isSomeoneChosen) {
    return;
  }

  const rollValue = isWhat(Math.random());
  if (rollValue === THE_CHOSEN_ONE) {
    isSomeoneChosen = true;
  } 

  temporary_roll_result = rollValue;
  return rollValue;
}

function updateRollCount() {
  if (Array.isArray(temporary_roll_result)) {
    let count = 0;
    let wildcard_count = 0;

    for (let i = 0; i < temporary_roll_result.length; i++) {
      if (temporary_roll_result[i] === THE_CHOSEN_ONE) {
        break;
      } else if (temporary_roll_result[i] === WILDCARD) {
        wildcard_count++;
        count++;
      } else {
        count++;
      }
    }

    if (wildcard_count > 0 || count < temporary_roll_result.length) {
      setTimeout(() => {
        theChosenOneCountdown -= count;
        wildCardAccumulator += wildcard_count;

        document.getElementById('tco-countdown').innerHTML = theChosenOneCountdown;
        document.getElementById('wildcard-accumulator').innerHTML = wildCardAccumulator;
      }, 1500);
    } else {
      theChosenOneCountdown -= count;
      document.getElementById('tco-countdown').innerHTML = theChosenOneCountdown;
    }
    
  } else if (temporary_roll_result === WILDCARD) {
    setTimeout(() => {
      theChosenOneCountdown--;
      wildCardAccumulator++;

      document.getElementById('tco-countdown').innerHTML = theChosenOneCountdown;
      document.getElementById('wildcard-accumulator').innerHTML = wildCardAccumulator;
    }, 1000);
  } else if (temporary_roll_result === NAH) {
    setTimeout(() => {
      theChosenOneCountdown--;
      document.getElementById('tco-countdown').innerHTML = theChosenOneCountdown;
    }, 500);
  }
}

function repeat(f, num) {
  const result = [];

  for (let i = 0; i < num; i++) {
    const res = f();
    if (res === 0 || res === 1 || res === 2) {
      result.push(res);
    }
  }

  temporary_roll_result = result;
  return result;
}

function GuaranteeCountdown() {
  return (
    <div id="guarantee-countdown">
      <p><span id="tco-countdown">200</span> rolls left until The Chosen One</p>
      <p><span id="wildcard-accumulator">0</span> Wild Cards have been accumulated</p>
    </div>
  )
}

function Rolls({ setRollResults, playAnimation }) {
  return (
    <div id="roll-buttons">
      <button 
          onClick={() => {
            rollOnesLeft--;
            setRollResults(roll()); 
            updateRollCount(); 
            playAnimation();}}

          style={{
            display: rollOnesLeft > 0 ? 'block' : 'none',
          }}
          >
            Roll 1
      </button>
      <button 
          onClick={() => {
            rollOnesLeft++;
            setRollResults(repeat(roll, 10)); 
            updateRollCount(); 
            playAnimation();}}
      >
        Roll 10
      </button>
    </div>
  )
}

export default function Illustrator({ setRollResults, playAnimation }) {
    return (
      <div id="illustrator">
        <GuaranteeCountdown />
        <Rolls setRollResults={setRollResults} playAnimation={playAnimation} />
      </div>
    )
}