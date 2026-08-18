import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Weightlifting logger</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
