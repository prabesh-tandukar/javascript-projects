import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [equipment, setEquipment] = useState("");
  const [experience, setExperience] = useState("beginner");
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function generateWorkout() {
    if (!goal || !time || !equipment || !experience) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/generate-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, time, equipment, experience }),
      });
      const data = await response.json();
      setIsLoading(false);
      setWorkoutPlan(data.workoutPlan);
      console.log(data.workoutPlan);
    } catch (error) {}
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
          <ReactMarkdown>{workoutPlan}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;
