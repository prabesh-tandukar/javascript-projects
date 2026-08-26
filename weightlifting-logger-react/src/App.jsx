import { useState } from "react";

function App() {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [entries, setEntries] = useState([]);

  function addEntry() {
    if (!exerciseName || !sets || !reps || !weight) {
      return;
    }

    let workout = {
      date: new Date().toLocaleDateString(),
      exerciseName: exerciseName,
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight),
    };

    setEntries([...entries, workout]);

    console.log(entries);

    setExerciseName("");
    setSets("");
    setReps("");
    setWeight("");
  }

  return (
    <div>
      <h1>Weightlifting logger</h1>

      <div>
        <label htmlFor="exerciseName">Exercise:</label>
        <input
          name="exerciseName"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="sets">Sets:</label>
        <input
          name="sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="reps">Reps:</label>
        <input
          name="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="weight">Weight(kg): </label>
        <input
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button className="entry" onClick={addEntry}>
        Add Entry
      </button>
    </div>
  );
}

export default App;
