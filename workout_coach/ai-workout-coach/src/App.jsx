import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [equipment, setEquipment] = useState("");
  const [experience, setExperience] = useState("beginner");
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [injuries, setInjuries] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  async function generateWorkout() {
    if (!goal || !time || !equipment || !experience || !daysPerWeek) {
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3001/generate-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal,
          time,
          equipment,
          experience,
          daysPerWeek,
          injuries,
        }),
      });

      const data = await response.json();

      setWorkoutPlan(data.workoutPlan);
    } catch {
      setError("Something went wrong, try again.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <h1>AI Workout Coach</h1>

      <div className="field">
        <label>Goal</label>
        <input
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="eg. build muscle"
        />
      </div>
      <div className="field">
        <label>Time Available</label>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter in minutes"
        />
      </div>
      <div className="field">
        <label>Equipment</label>
        <input
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          placeholder="What equipments do you have ?"
        ></input>
      </div>
      <div className="field">
        <label>Days Per Week</label>
        <input
          type="number"
          value={daysPerWeek}
          onChange={(e) => setDaysPerWeek(e.target.value)}
          min={1}
          max={7}
          step={1}
          placeholder="How many days per week will you workout ?"
        ></input>
      </div>
      <div className="field">
        <label>Injuries/Limitations:</label>
        <input
          value={injuries}
          onChange={(e) => setInjuries(e.target.value)}
          placeholder="Do you have any injuries or limitations ?"
        ></input>
      </div>
      <div className="field">
        <label>Select you experience level:</label>
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div>
        <button onClick={generateWorkout} disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Workout"}
        </button>
      </div>
      {workoutPlan && (
        <div className="workout-plan">
          <h2>Your Workout Plan</h2>
          <div className="markdown">
            <ReactMarkdown>{workoutPlan}</ReactMarkdown>
          </div>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
