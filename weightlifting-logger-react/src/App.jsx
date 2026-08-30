import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [entries, setEntries] = useState([]);

  // 2. useEffect hooks
  useEffect(() => {
    // load from localStorage
    let data = localStorage.getItem("workouts");
    console.log("loading from localStorage", data);
    data = data ? JSON.parse(data) : [];
    setEntries(data);
  }, []);

  useEffect(() => {
    // save to localStorage
    console.log("saving to localStorage", entries);
    if (entries.length === 0) return;
    localStorage.setItem("workouts", JSON.stringify(entries));
  }, [entries]);

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

    setExerciseName("");
    setSets("");
    setReps("");
    setWeight("");
  }

  function deleteEntry(indexToDelete) {
    setEntries(entries.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="app">
      <h1>Lift Log</h1>

      {/* Added className="form-card" here */}
      <div className="form-card">
        <div className="field">
          <label>Exercise</label>
          <input
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            placeholder="e.g. Bench Press"
          />
        </div>
        <div className="field">
          <label>Sets</label>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            placeholder="4"
          />
        </div>
        <div className="field">
          <label>Reps</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="8"
          />
        </div>
        <div className="field">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="100"
          />
        </div>
        <button className="entry" onClick={addEntry}>
          Add Entry
        </button>
      </div>

      {/* Added className="entries" here */}
      <ul className="entries">
        {entries.length === 0 && (
          <p className="empty">No entries yet — add your first lift above</p>
        )}
        {entries.map((entry, index) => (
          <li key={index} className="entry-row">
            <span className="entry-date">{entry.date}</span>
            <span className="entry-name">{entry.exerciseName}</span>
            <span className="entry-stats">
              {entry.sets}s × {entry.reps}r × {entry.weight}kg
            </span>
            <button className="delete-btn" onClick={() => deleteEntry(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
