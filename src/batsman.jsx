import { useState } from "react";
export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  return (
    <div>
      <p>Bangladeshi Players</p>
      {runs > 50 && <h1>Your score : {runs}</h1>}
      <h1>Score : {runs}</h1>
      <h3>Total sixes : {sixes}</h3>
      <button onClick={() => setRuns(runs + 1)}>single</button>
      <button onClick={() => setRuns(runs + 4)}>Four</button>
      <button
        onClick={() => {
          setRuns(runs + 6);
          setSixes(sixes + 1);
        }}
      >
        Six
      </button>
      <button
        onClick={() => {
          setRuns(0);
          setSixes(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
