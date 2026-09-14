const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// console.log("api key:", GEMINI_API_KEY);

app.post("/generate-workout", async (req, res) => {
  const { goal, time, equipment, experience, daysPerWeek, injuries } = req.body;

  const prompt = `You are a professional fitness coach. Create a detailed workout plan for someone with the following details:
        - Goal: ${goal}
        - Time Available: ${time} minutes
        - Equipment: ${equipment}
        - Experience Level: ${experience}
        - Days per week: ${daysPerWeek}
        - Injuries or limitations: ${injuries}

        Please provide:
        1. A brief intro explaining the workout approach
        2. A structured list of exercises with sets, reps, and rest periods
        3. Any important form tips or safety notes

         Format your response using ONLY these markdown elements:
          - ## for section headings (e.g. ## Warm Up, ## Main Circuit, ## Cool Down)
          - **bold** for exercise names
          - Numbered lists for exercises in order
          - Regular text for descriptions, sets, reps, and rest periods

          Do NOT use tables. Do NOT use | characters. Do NOT use HTML.

          Structure every exercise exactly like this:
          1. **Exercise Name**
            - Sets: X | Reps: X | Rest: X seconds
            - How to do it: brief description
            - Tip: one form or safety tip

          End with a ## Cool Down section and one encouraging closing sentence.

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

  const workoutPlan = data.candidates[0].content.parts[0].text;

  res.json({ workoutPlan });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
