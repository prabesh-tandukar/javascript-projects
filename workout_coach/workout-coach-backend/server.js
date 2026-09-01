const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = "AQ.Ab8RN6JW24cd7S7gEgA0Hivb7l35ouBhItTQxMia8MjM74nTFg";

app.post("/generate-workout", async (req, res) => {
  const { goal, time, equipment, experience } = req.body;

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

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    },
  );

  const data = await response.json();
  //   console.log(JSON.stringify(data, null, 2));
  const workoutPlan = data.candidates[0].content.parts[0].text;

  res.json({ workoutPlan });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
