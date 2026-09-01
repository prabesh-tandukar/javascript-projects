import { useState } from "react";

function App() {
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [equipment, setEquipment] = useState("");
  const [experience, setExperience] = useState("beginner");

  async function generateWorkout() {
    if (!goal || !time || !equipment || !experience) {
      return;
    }

    const prompt = `You are a professional fitness coach. Create a detailed workout plan for someone with the following details:

    - Goal: ${goal}
    - Time Available: ${time} minutes
    - Equipment: ${equipment}
    - Experience Level: ${experience}

    Please provide:
    1. A brief intro explaining the workout approach
    2. A structured list of exercises with sets, reps, and rest periods
    3. Any important form tips or safety notes

    Keep the plan realistic and achievable for the given experience level and time constraint.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        messages: [{ role: "user", content: { prompt } }],
      }),
    });

    const data = await response.json();

    console.log(data.content[0].text);
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
        <button onClick={generateWorkout}>Generate Workout</button>
      </div>
    </div>
  );
}

export default App;
