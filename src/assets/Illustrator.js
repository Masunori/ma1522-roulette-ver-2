let theChosenOneCountdown = 300;
let wildCardAccumulator = 0;


const THE_CHOSEN_ONE = 0;
const WILDCARD = 1;
const NAH = 2;

const isWhat = x => (theChosenOneCountdown === 0 || x < 0.01) ? THE_CHOSEN_ONE : (x < 0.0622 ? WILDCARD : NAH);

let isSomeoneChosen = false;

function roll() {
  if (isSomeoneChosen) {
    return;
  }

  const rollValue = isWhat(Math.random());
  if (rollValue === THE_CHOSEN_ONE) {
    isSomeoneChosen = true;
  } else if (rollValue === WILDCARD) {
    theChosenOneCountdown--;
    wildCardAccumulator++;

    document.getElementById('tco-countdown').innerHTML = theChosenOneCountdown;
    document.getElementById('wildcard-accumulator').innerHTML = wildCardAccumulator;
  } else {
    theChosenOneCountdown--;
    document.getElementById('tco-countdown').innerHTML = theChosenOneCountdown;
  }

  return rollValue;
}

function repeat(f, num) {
  const result = [];

  for (let i = 0; i < num; i++) {
    const res = f();
    if (res === 0 || res === 1 || res === 2) {
      result.push(res);
    }
  }

  return result;
}

function GuaranteeCountdown() {
  return (
    <div id="guarantee-countdown">
      <p><span id="tco-countdown">300</span> rolls left until The Chosen One</p>
      <p><span id="wildcard-accumulator">0</span> Wild Cards have been accumulated</p>
    </div>
  )
}

function Rolls({ setRollResults, playAnimation }) {
  return (
    <div id="roll-buttons">
      <button onClick={() => {setRollResults(roll()); playAnimation();}}>Roll 1</button>
      <button onClick={() => {setRollResults(repeat(roll, 10)); playAnimation();}}>Roll 10</button>
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