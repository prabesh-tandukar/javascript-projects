# Complete Written-Based Learning Roadmap
## 4-Week Intensive: Read → Exercise → Build → Test → Move Forward

**Learning Philosophy:** 
- 📖 Read documentation and articles (PRIMARY)
- ✍️ Do exercises immediately after reading
- 🏗️ Build projects to solidify understanding
- ✅ Pass knowledge checks before advancing
- 🎥 Watch videos ONLY if stuck for >1 hour

**Time Commitment:** 3-4 hours/day weekdays, 6-8 hours/day weekends

---

# WEEK 1: JAVASCRIPT & REACT FOUNDATIONS

## **MODULE 1: JavaScript Fundamentals (Days 1-2)**

### **📖 READ (3-4 hours)**

**Primary Resources:**
1. [JavaScript.info - Part 1](https://javascript.info/first-steps) 
   - Read sections 2.1 to 2.14
   - Focus: Variables, data types, operators, functions

2. [JavaScript.info - Data Types](https://javascript.info/types)
   - Primitives vs objects
   - Type conversion

3. [JavaScript.info - Functions](https://javascript.info/function-basics)
   - Function declarations
   - Arrow functions
   - Default parameters

4. [JavaScript.info - Objects](https://javascript.info/object)
   - Object basics
   - Object methods
   - "this" keyword

5. [JavaScript.info - Arrays](https://javascript.info/array)
   - Array basics
   - Array methods

**Optional if stuck:** 
🎥 [JavaScript Crash Course](https://www.youtube.com/watch?v=hdI2bqOjy3c) - Traversy Media

### **✍️ EXERCISES (2 hours)**

**Exercise Set 1 - Variables & Types:**
```javascript
// Type these out and run them. Predict output before running.

// 1. Variable declarations
let name = 'Juan';
const age = 25;
var city = 'Manila'; // Why avoid var?

// 2. Type checking
console.log(typeof name);
console.log(typeof age);
console.log(typeof undefined);
console.log(typeof null); // Surprise! What does this return?

// 3. Type conversion
let str = '10';
let num = 5;
console.log(str + num); // What is the result?
console.log(Number(str) + num); // Now?

// ANSWERS to check yourself:
// typeof null returns "object" (JavaScript quirk)
// str + num = "105" (string concatenation)
// Number(str) + num = 15 (addition)
```

**Exercise Set 2 - Functions:**
```javascript
// 1. Write a function that takes a name and returns greeting
function greet(name) {
  // YOUR CODE
}
console.log(greet('Maria')); // Should output: "Hello Maria"

// 2. Convert to arrow function
const greet = // YOUR CODE

// 3. Function with default parameter
const greet = (name = 'Guest') => // YOUR CODE
console.log(greet()); // Should output: "Hello Guest"

// 4. Function that returns an object
const createUser = (name, age) => {
  // YOUR CODE - return object with name and age
};

// VERIFY YOUR ANSWERS:
// 1. function greet(name) { return `Hello ${name}`; }
// 2. const greet = (name) => `Hello ${name}`;
// 3. const greet = (name = 'Guest') => `Hello ${name}`;
// 4. const createUser = (name, age) => ({ name, age });
```

**Exercise Set 3 - Objects & Arrays:**
```javascript
// 1. Create a user object
const user = {
  name: 'Juan',
  age: 25,
  // Add a method 'greet' that returns "Hello, I'm Juan"
};

// 2. Access and modify
console.log(user.name);
user.age = 26;

// 3. Create array of users
const users = [
  { name: 'Juan', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 22 }
];

// 4. Access array elements
console.log(users[0].name); // What does this output?

// ANSWER: "Juan"
```

### **✅ KNOWLEDGE CHECK 1 (Must pass before continuing)**

**Test 1 - Write from memory (no looking!):**
```javascript
// 1. Declare a constant variable called 'PI' with value 3.14


// 2. Write an arrow function 'double' that doubles a number


// 3. Create an object 'book' with title and author


// 4. Create an array of 3 numbers


// Check your answers:
// 1. const PI = 3.14;
// 2. const double = (n) => n * 2;
// 3. const book = { title: 'Sample', author: 'Author' };
// 4. const nums = [1, 2, 3];
```

**Test 2 - Explain in your own words:**
Write answers in a notebook:
- What's the difference between `let` and `const`?
- What's an arrow function?
- What's the difference between `==` and `===`?
- What is `undefined` vs `null`?

**Expected answers:**
- `let` can be reassigned, `const` cannot
- Arrow function: shorter syntax for functions `() => {}`
- `==` does type conversion, `===` checks type and value
- `undefined` means not assigned, `null` means intentionally empty

**✅ YOU PASS IF:** You got 80%+ correct without looking back. If not, re-read the sections you got wrong.

---

### **📖 READ - Array Methods (2-3 hours)**

**Primary Resources:**
1. [JavaScript.info - Array Methods](https://javascript.info/array-methods)
   - Read entire page carefully
   - Focus on: map, filter, reduce, find, some, every

2. [Eloquent JavaScript - Chapter 5](https://eloquentjavascript.net/05_higher_order.html)
   - Higher-order functions
   - Abstraction

3. [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
   - Reference for specific methods

### **✍️ EXERCISES - Array Methods (2 hours)**

**Exercise Set 4 - Understanding Each Method:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. MAP - Transform each element
// Get each number doubled
const doubled = numbers.map(/* YOUR CODE */);
console.log(doubled); // Should be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 2. FILTER - Keep elements that match condition
// Get only even numbers
const evens = numbers.filter(/* YOUR CODE */);
console.log(evens); // Should be [2, 4, 6, 8, 10]

// 3. FIND - Get first element that matches
// Find first number greater than 5
const found = numbers.find(/* YOUR CODE */);
console.log(found); // Should be 6

// 4. REDUCE - Combine all elements into single value
// Sum all numbers
const sum = numbers.reduce(/* YOUR CODE */, 0);
console.log(sum); // Should be 55

// 5. SOME - Check if at least one element matches
// Check if any number is greater than 8
const hasLarge = numbers.some(/* YOUR CODE */);
console.log(hasLarge); // Should be true

// 6. EVERY - Check if all elements match
// Check if all numbers are positive
const allPositive = numbers.every(/* YOUR CODE */);
console.log(allPositive); // Should be true

// ANSWERS:
// 1. numbers.map(n => n * 2)
// 2. numbers.filter(n => n % 2 === 0)
// 3. numbers.find(n => n > 5)
// 4. numbers.reduce((sum, n) => sum + n, 0)
// 5. numbers.some(n => n > 8)
// 6. numbers.every(n => n > 0)
```

**Exercise Set 5 - Real World Practice:**
```javascript
const students = [
  { name: 'Juan', grade: 85, subject: 'Math' },
  { name: 'Maria', grade: 92, subject: 'Science' },
  { name: 'Pedro', grade: 78, subject: 'Math' },
  { name: 'Ana', grade: 95, subject: 'Science' }
];

// 1. Get array of all student names
const names = // YOUR CODE

// 2. Get all students with grade >= 90
const topStudents = // YOUR CODE

// 3. Get all Math students
const mathStudents = // YOUR CODE

// 4. Calculate average grade
const average = // YOUR CODE

// 5. Check if any student failed (grade < 60)
const anyFailed = // YOUR CODE

// 6. Get names of top students only
const topNames = // YOUR CODE (combine filter and map)

// ANSWERS:
// 1. students.map(s => s.name)
// 2. students.filter(s => s.grade >= 90)
// 3. students.filter(s => s.subject === 'Math')
// 4. students.reduce((sum, s) => sum + s.grade, 0) / students.length
// 5. students.some(s => s.grade < 60)
// 6. students.filter(s => s.grade >= 90).map(s => s.name)
```

### **🏗️ PROJECT 1: Word Translator (2-3 hours)**

**Requirements:**
Build a JavaScript module that translates English words to Tagalog.

```javascript
// wordTranslator.js

// Step 1: Create dictionary
const dictionary = [
  { english: 'hello', tagalog: 'kumusta', example: 'Kumusta ka?' },
  { english: 'thank you', tagalog: 'salamat', example: 'Salamat po!' },
  { english: 'yes', tagalog: 'oo', example: 'Oo, tama yan.' },
  { english: 'no', tagalog: 'hindi', example: 'Hindi ako.' },
  { english: 'good morning', tagalog: 'magandang umaga', example: 'Magandang umaga po!' },
  // ADD 5 MORE WORDS
];

// Step 2: Implement these functions

// Translate English to Tagalog
function translate(englishWord) {
  // Use array.find() to search dictionary
  // Return tagalog translation or "Translation not found"
}

// Get all words longer than specified length
function filterByLength(minLength) {
  // Use array.filter() 
  // Return array of words where english.length >= minLength
}

// Get all translations as formatted strings
function getAllTranslations() {
  // Use array.map()
  // Return array like ["hello = kumusta", "thank you = salamat", ...]
}

// Get random word for practice
function getRandomWord() {
  // Return random word from dictionary
}

// Search by partial match
function searchWords(searchTerm) {
  // Use array.filter()
  // Return words where english OR tagalog includes searchTerm
}

// Step 3: Test your functions
console.log(translate('hello')); // "kumusta"
console.log(filterByLength(5)); // Words >= 5 letters
console.log(getAllTranslations()); // All formatted translations
console.log(getRandomWord()); // Random word
console.log(searchWords('ma')); // Words containing "ma"
```

**Completion Checklist:**
- [ ] All 5 functions implemented
- [ ] All test cases pass
- [ ] Added at least 10 total words to dictionary
- [ ] Code runs without errors
- [ ] Can explain what each array method does

**✅ YOU PASS IF:** All functions work correctly when you run the file.

---

### **📖 READ - Asynchronous JavaScript (3-4 hours)**

**Primary Resources:**
1. [JavaScript.info - Callbacks](https://javascript.info/callbacks)
   - Introduction to callbacks
   - Callback hell

2. [JavaScript.info - Promises](https://javascript.info/promise-basics)
   - Promise basics
   - Promise chaining
   - Error handling with promises

3. [JavaScript.info - Async/Await](https://javascript.info/async-await)
   - Async functions
   - Await syntax
   - Error handling

4. [MDN - Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
   - Read "Introducing asynchronous JavaScript"
   - Read "How to use promises"

**Optional if stuck:**
🎥 [Async JavaScript Crash Course](https://www.youtube.com/watch?v=PoRJizFvM7s)

### **✍️ EXERCISES - Async JavaScript (2 hours)**

**Exercise Set 6 - Understanding Timing:**
```javascript
// 1. Predict the output order
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');

// What order will these print? Write your prediction:
// YOUR PREDICTION: 

// Run it. Were you correct?
// ANSWER: 1, 3, 2 (setTimeout is async, even with 0 delay)

// 2. Create a delay function
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Test it
wait(2000).then(() => console.log('2 seconds passed'));

// 3. Use async/await with wait
async function delayedGreeting() {
  console.log('Starting...');
  await wait(1000);
  console.log('1 second later');
  await wait(1000);
  console.log('2 seconds later');
}

delayedGreeting();
```

**Exercise Set 7 - Promises:**
```javascript
// 1. Create a promise that resolves after 1 second
const delayedPromise = new Promise((resolve, reject) => {
  // YOUR CODE
});

delayedPromise.then(result => console.log(result));

// 2. Create a function that returns a promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'Juan' });
      } else {
        reject('Invalid ID');
      }
    }, 1000);
  });
}

// Use it with .then/.catch
fetchUser(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));

// 3. Convert to async/await
async function getUser(id) {
  try {
    const user = await fetchUser(id);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

getUser(1);
getUser(-1); // Should catch error
```

### **🏗️ PROJECT 2: Simulated Chat Conversation (2-3 hours)**

**Requirements:**
Create a script that simulates a conversation between user and AI with realistic delays.

```javascript
// chatSimulator.js

// Step 1: Create helper function
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Step 2: Create message display functions
async function userSays(message) {
  await wait(1000); // Simulate typing delay
  console.log(`👤 User: ${message}`);
}

async function aiResponds(message) {
  await wait(1500); // AI takes slightly longer
  console.log(`🤖 AI: ${message}`);
}

// Step 3: Create conversation function
async function haveConversation() {
  console.log('=== Conversation Started ===\n');
  
  await userSays('Kumusta?');
  await aiResponds('Kumusta! Mabuti naman ako. Ikaw?');
  
  await userSays('Mabuti din!');
  await aiResponds('Maganda! Gusto mo bang matuto ng mas maraming Tagalog?');
  
  await userSays('Oo, please!');
  await aiResponds('Sige! Magsimula tayo. What do you want to learn?');
  
  console.log('\n=== Conversation Ended ===');
}

// Step 4: Add conversation history tracking
const conversationHistory = [];

async function userSaysWithHistory(message) {
  await wait(1000);
  console.log(`👤 User: ${message}`);
  conversationHistory.push({ role: 'user', message, timestamp: new Date() });
}

async function aiRespondsWithHistory(message) {
  await wait(1500);
  console.log(`🤖 AI: ${message}`);
  conversationHistory.push({ role: 'ai', message, timestamp: new Date() });
}

// Step 5: Function to review conversation
function reviewConversation() {
  console.log('\n=== Conversation History ===');
  conversationHistory.forEach((msg, i) => {
    console.log(`${i + 1}. [${msg.role}]: ${msg.message}`);
  });
}

// Run it
async function main() {
  await haveConversation();
  reviewConversation();
}

main();
```

**Completion Checklist:**
- [ ] Messages appear with delays
- [ ] Conversation flows naturally
- [ ] History tracking works
- [ ] Can review conversation
- [ ] No errors in console

**✅ YOU PASS IF:** Run the script and see a conversation with proper timing.

---

### **✅ KNOWLEDGE CHECK 2 - JavaScript Complete**

**Must pass all 3 tests before moving to React:**

**Test 1 - Array Methods (Write without looking):**
```javascript
const words = ['kumusta', 'salamat', 'oo', 'hindi', 'magandang umaga'];

// 1. Get all words with 'a' in them


// 2. Get lengths of all words


// 3. Get first word longer than 5 characters


// 4. Check if all words are strings


// ANSWERS:
// 1. words.filter(w => w.includes('a'))
// 2. words.map(w => w.length)
// 3. words.find(w => w.length > 5)
// 4. words.every(w => typeof w === 'string')
```

**Test 2 - Async/Await (Write without looking):**
```javascript
// Create an async function that:
// 1. Waits 1 second
// 2. Returns "Hello"
// 3. Handle errors with try/catch

async function delayedHello() {
  // YOUR CODE
}

// ANSWER:
async function delayedHello() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'Hello';
  } catch (error) {
    console.error(error);
  }
}
```

**Test 3 - Explain These Concepts:**
Write answers in notebook:
1. What does `map()` do?
2. What does `filter()` do?
3. What does `reduce()` do?
4. What's the difference between Promise and async/await?
5. What happens if you don't use `await` with an async function?

**Expected Answers:**
1. Transforms each element, returns new array
2. Keeps elements matching condition, returns new array
3. Combines all elements into single value
4. async/await is cleaner syntax for Promises
5. Function returns Promise, doesn't wait for result

**✅ YOU PASS IF:** 90%+ correct. If not, go back and re-read weak areas.

---

## **MODULE 2: React Fundamentals (Days 3-7)**

### **📖 READ - React Core Concepts (4-5 hours)**

**Primary Resources:**
1. [React Official Docs - Quick Start](https://react.dev/learn)
   - Read entire Quick Start section
   - Don't skip any subsections

2. [React - Describing the UI](https://react.dev/learn/describing-the-ui)
   - Your First Component
   - Importing and Exporting Components
   - Writing Markup with JSX
   - JavaScript in JSX with Curly Braces
   - Passing Props to a Component
   - Conditional Rendering
   - Rendering Lists

3. [React - Adding Interactivity](https://react.dev/learn/adding-interactivity)
   - Responding to Events
   - State: A Component's Memory
   - Render and Commit

4. [React - Managing State](https://react.dev/learn/managing-state)
   - Reacting to Input with State
   - Choosing the State Structure
   - Sharing State Between Components

**Interactive Learning:**
🔗 [React Tic Tac Toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- Read through entire tutorial
- Type out all code examples

**Optional if stuck:**
🎥 [React Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

### **✍️ EXERCISES - React Basics (3 hours)**

**Setup First:**
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

**Exercise Set 8 - Components & JSX:**
```jsx
// src/App.jsx

// 1. Create a simple component
function Greeting() {
  return <h1>Hello React!</h1>;
}

// 2. Component with props
function UserGreeting(props) {
  return <h1>Hello {props.name}!</h1>;
}

// Or with destructuring:
function UserGreeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

// 3. Use the component
function App() {
  return (
    <div>
      <Greeting />
      <UserGreeting name="Juan" />
      <UserGreeting name="Maria" />
    </div>
  );
}

// Test: Does this show 3 greetings?
```

**Exercise Set 9 - Understanding JSX:**
```jsx
// What's wrong with these? Fix them:

// 1. Multiple root elements
function Broken1() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}
// FIX: Wrap in fragment or div

// 2. Unclosed tag
function Broken2() {
  return <img src="photo.jpg">;
}
// FIX: Self-closing tag <img />

// 3. Class instead of className
function Broken3() {
  return <div class="container">Hello</div>;
}
// FIX: Use className

// 4. Using reserved words
function Broken4() {
  return <label for="name">Name</label>;
}
// FIX: Use htmlFor

// ANSWERS:
function Fixed1() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}

function Fixed2() {
  return <img src="photo.jpg" />;
}

function Fixed3() {
  return <div className="container">Hello</div>;
}

function Fixed4() {
  return <label htmlFor="name">Name</label>;
}
```

**Exercise Set 10 - Props:**
```jsx
// 1. Create a UserCard component
function UserCard({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// 2. Create a WordCard for vocabulary
function WordCard({ tagalog, english, example }) {
  return (
    <div>
      <h3>{tagalog}</h3>
      <p>English: {english}</p>
      {example && <p>Example: {example}</p>}
    </div>
  );
}

// 3. Use them
function App() {
  return (
    <div>
      <UserCard name="Juan" age={25} email="juan@example.com" />
      <WordCard 
        tagalog="kumusta" 
        english="hello" 
        example="Kumusta ka?"
      />
    </div>
  );
}
```

### **📖 READ - React State (useState) (2-3 hours)**

**Primary Resources:**
1. [React - State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
   - Read carefully - this is crucial
   - Type out all examples

2. [React - useState Reference](https://react.dev/reference/react/useState)
   - Read usage section
   - Read all examples

3. [React - Render and Commit](https://react.dev/learn/render-and-commit)
   - Understand re-rendering

### **✍️ EXERCISES - useState (2-3 hours)**

**Exercise Set 11 - Basic State:**
```jsx
import { useState } from 'react';

// 1. Simple counter
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// 2. Text input
function NameInput() {
  const [name, setName] = useState('');
  
  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}!</p>
    </div>
  );
}

// 3. Toggle
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

// Test each component - do they work?
```

**Exercise Set 12 - Array State:**
```jsx
// Managing array in state (IMPORTANT!)
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    // WRONG WAY (mutating state):
    // todos.push(input); // ❌ Don't do this!
    
    // RIGHT WAY (new array):
    setTodos([...todos, input]); // ✅ Correct
    setInput('');
  };
  
  const deleteTodo = (index) => {
    // Create new array without item at index
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### **🏗️ PROJECT 3: Counter App (2 hours)**

**Requirements:**
Build a counter with multiple features.

```jsx
// src/App.jsx
import { useState } from 'react';

function App() {
  // State
  const [count, setCount] = useState(0);
  
  // Functions
  const increment = () => {
    // YOUR CODE
  };
  
  const decrement = () => {
    // YOUR CODE
    // Don't go below 0
  };
  
  const reset = () => {
    // YOUR CODE
  };
  
  const incrementBy = (amount) => {
    // YOUR CODE
  };
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Counter App</h1>
      
      {/* Display count */}
      <h2 style={{ fontSize: '48px' }}>
        {count}
      </h2>
      
      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => incrementBy(5)}>+5</button>
        <button onClick={() => incrementBy(10)}>+10</button>
      </div>
      
      {/* Conditional messages */}
      {count === 0 && <p>Start clicking!</p>}
      {count >= 10 && <p>🎉 You reached 10!</p>}
      {count >= 50 && <p>🏆 Halfway to 100!</p>}
      {count >= 100 && <p>💯 You made it to 100!</p>}
    </div>
  );
}

export default App;
```

**Completion Checklist:**
- [ ] Increment works
- [ ] Decrement works (stops at 0)
- [ ] Reset works
- [ ] +5 and +10 work
- [ ] Messages appear at correct counts
- [ ] No errors in console

**✅ YOU PASS IF:** All buttons work correctly.

---

### **🏗️ PROJECT 4: Todo List (3-4 hours)**

**Requirements:**
Build a complete todo list with add, delete, and toggle features.

```jsx
// src/App.jsx
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (!input.trim()) return; // Don't add empty todos
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInput('');
  };
  
  const deleteTodo = (id) => {
    // YOUR CODE - filter out todo with this id
  };
  
  const toggleTodo = (id) => {
    // YOUR CODE - map through todos, toggle completed for matching id
    // Hint: setTodos(todos.map(todo => 
    //   todo.id === id ? { ...todo, completed: !todo.completed } : todo
    // ))
  };
  
  const clearCompleted = () => {
    // YOUR CODE - filter out completed todos
  };
  
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>My Todo List</h1>
      
      {/* Input section */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          style={{ flex: 1, padding: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px 20px' }}>
          Add
        </button>
      </div>
      
      {/* Todo list */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id}
            style={{ 
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span 
              onClick={() => toggleTodo(todo.id)}
              style={{ 
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : '#000'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {/* Stats and actions */}
      {todos.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <p>
            Total: {todos.length} | 
            Completed: {todos.filter(t => t.completed).length} | 
            Active: {todos.filter(t => !t.completed).length}
          </p>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      )}
    </div>
  );
}

export default App;
```

**Completion Checklist:**
- [ ] Can add todos
- [ ] Can delete todos
- [ ] Can toggle todos (line through when completed)
- [ ] Pressing Enter adds todo
- [ ] Can clear all completed todos
- [ ] Stats show correctly
- [ ] Empty input doesn't add todo

**✅ YOU PASS IF:** All features work without bugs.

---

### **📖 READ - useEffect Hook (2-3 hours)**

**Primary Resources:**
1. [React - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
   - Read entire page
   - Understand dependency array

2. [React - useEffect Reference](https://react.dev/reference/react/useEffect)
   - Read all examples
   - Understand cleanup

3. [React - You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
   - Understand when NOT to use useEffect

### **✍️ EXERCISES - useEffect (2 hours)**

**Exercise Set 13 - Basic useEffect:**
```jsx
import { useState, useEffect } from 'react';

// 1. Run on mount
function Example1() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []); // Empty array = run once on mount
  
  return <div>Check console</div>;
}

// 2. Run on every render
function Example2() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Component rendered!');
  }); // No array = run on every render
  
  return <button onClick={() => setCount(count + 1)}>Click</button>;
}

// 3. Run when specific value changes
function Example3() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Run when count changes
  
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

// 4. Cleanup
function Example4() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log('Cleaned up!');
    };
  }, []);
  
  return <div>Timer running...</div>;
}
```

**Exercise Set 14 - Practical useEffect:**
```jsx
// 1. Document title
function TitleUpdater() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

// 2. Save to localStorage
function PersistentCounter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count');
    return saved ? parseInt(saved) : 0;
  });
  
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 3. Fetch data (simulated)
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData({ message: 'Hello from API' });
      setLoading(false);
    }, 2000);
  }, []);
  
  if (loading) return <div>Loading...</div>;
  return <div>{data.message}</div>;
}
```

### **🏗️ PROJECT 5: Chat Interface (4-5 hours)**

**Requirements:**
Build a chat interface with message history and auto-scroll.

```jsx
// src/App.jsx
import { useState, useEffect, useRef } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: 'Kumusta! I am your Tagalog tutor.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const sendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: input
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response after 1 second
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: 'ai',
        text: `You said: "${input}". Let's practice more Tagalog!`
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ padding: '20px', margin: 0, borderBottom: '1px solid #ddd' }}>
        Tagalog Chat
      </h1>
      
      {/* Messages */}
      <div style={{ 
        flex: 1, 
        overflow: 'auto', 
        padding: '20px',
        backgroundColor: '#f5f5f5'
      }}>
        {messages.map(msg => (
          <div 
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px'
            }}
          >
            <div style={{
              maxWidth: '70%',
              padding: '10px 15px',
              borderRadius: '10px',
              backgroundColor: msg.role === 'user' ? '#007bff' : '#fff',
              color: msg.role === 'user' ? '#fff' : '#000',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div style={{ 
        padding: '20px', 
        borderTop: '1px solid #ddd',
        backgroundColor: '#fff'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            style={{ 
              flex: 1, 
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
          <button 
            onClick={sendMessage}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
```

**Completion Checklist:**
- [ ] Can send messages
- [ ] Messages appear correctly (blue for user, white for AI)
- [ ] Auto-scrolls to bottom when new message
- [ ] AI responds after 1 second delay
- [ ] Pressing Enter sends message
- [ ] Input clears after sending
- [ ] Messages stack correctly

**✅ YOU PASS IF:** Chat works smoothly without bugs.

---

### **📖 READ - TypeScript with React (3-4 hours)**

**Primary Resources:**
1. [TypeScript Handbook - The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
   - Read sections: Basic Types, Everyday Types
   
2. [TypeScript Handbook - More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

3. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
   - Read: Getting Started, Basic Type Example
   - Read: Function Components, Hooks

### **✍️ EXERCISES - TypeScript (2 hours)**

**Exercise Set 15 - Basic Types:**
```typescript
// 1. Basic type annotations
let name: string = 'Juan';
let age: number = 25;
let isStudent: boolean = true;

// 2. Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ['Juan', 'Maria'];

// 3. Objects
let user: { name: string; age: number } = {
  name: 'Juan',
  age: 25
};

// 4. Interfaces
interface User {
  id: string;
  name: string;
  email: string;
  age?: number; // Optional
}

const user1: User = {
  id: '1',
  name: 'Juan',
  email: 'juan@example.com'
};

// 5. Functions
function greet(name: string): string {
  return `Hello ${name}`;
}

const add = (a: number, b: number): number => a + b;

// 6. Union types
let id: string | number;
id = '123';
id = 123; // Both valid

type Role = 'user' | 'ai'; // Can only be these values
let role: Role = 'user';
```

**Exercise Set 16 - React with TypeScript:**
```typescript
// Convert to TypeScript - add types!

import { useState } from 'react';

// 1. Define interface for Message
interface Message {
  // YOUR CODE
}

// 2. Type the component props
interface ChatMessageProps {
  // YOUR CODE
}

function ChatMessage({ message }: ChatMessageProps) {
  return <div>{message.text}</div>;
}

// 3. Type useState
function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  
  const sendMessage = (): void => {
    // YOUR CODE
  };
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

// ANSWERS:
interface Message {
  id: number;
  role: 'user' | 'ai';
  text: string;
  timestamp?: Date;
}

interface ChatMessageProps {
  message: Message;
}
```

### **🏗️ PROJECT 6: Convert Chat to TypeScript (2-3 hours)**

**Requirements:**
Take Project 5 (Chat Interface) and convert to TypeScript.

```typescript
// src/App.tsx
import { useState, useEffect, useRef } from 'react';

// Define types
interface Message {
  id: number;
  role: 'user' | 'ai';
  text: string;
}

function App(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'ai', text: 'Kumusta! I am your Tagalog tutor.' }
  ]);
  const [input, setInput] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const sendMessage = (): void => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      text: input
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        role: 'ai',
        text: `You said: "${input}"`
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  return (
    // Same JSX as before
  );
}

export default App;
```

**Completion Checklist:**
- [ ] All files renamed to .tsx
- [ ] All variables have types
- [ ] All functions have return types
- [ ] Interfaces defined for complex objects
- [ ] No TypeScript errors
- [ ] App still works correctly

**✅ YOU PASS IF:** TypeScript compiler shows no errors.

---

### **✅ WEEK 1 FINAL CHECKPOINT**

**You must pass ALL these tests before Week 2:**

**Test 1 - Build from Scratch (2 hours, no looking):**
Build a simple counter with:
- Increment button
- Decrement button  
- Reset button
- Display current count
- Show "High!" if count >= 10

**Test 2 - Code Review:**
Explain what this code does:
```jsx
function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('items');
    if (saved) setItems(JSON.parse(saved));
  }, []);
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  
  return <div>{items.length} items</div>;
}
```

**Test 3 - TypeScript Challenge:**
Add proper TypeScript types to this:
```typescript
interface ??? {
  // Define
}

function TodoItem({ ??? }: ???) {
  const [completed, setCompleted] = useState(false);
  
  return (
    <div onClick={() => setCompleted(!completed)}>
      ???
    </div>
  );
}
```

**✅ YOU PASS WEEK 1 IF:**
- Can build counter in under 2 hours
- Can explain the code review example
- Can add TypeScript types correctly

---

# WEEK 2: BACKEND & APIs

## **MODULE 3: Node.js & Express (Days 8-10)**

### **📖 READ - Node.js Fundamentals (3-4 hours)**

**Primary Resources:**
1. [Node.js Official Getting Started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
   - Read: Introduction to Node.js
   - Read: How much JavaScript do you need to know
   - Read: Differences between Node.js and the Browser

2. [Node.js Getting Started Guide](https://nodejs.org/en/learn/getting-started/how-to-use-the-nodejs-repl)
   - Read all sections in "Getting Started"

3. [Express.js Getting Started](https://expressjs.com/en/starter/installing.html)
   - Read entire "Getting Started" section
   - Type out all examples

4. [Express.js Guide - Routing](https://expressjs.com/en/guide/routing.html)
   - Read routing basics
   - Understand route parameters

5. [Express.js Guide - Writing Middleware](https://expressjs.com/en/guide/writing-middleware.html)

**Optional if stuck:**
🎥 [Express Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)

### **✍️ EXERCISES - Express Basics (3 hours)**

**Setup:**
```bash
mkdir backend-learning
cd backend-learning
npm init -y
npm install express
```

**Exercise Set 17 - First Server:**
```javascript
// server.js

const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// 1. Basic GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 2. JSON response
app.get('/api/info', (req, res) => {
  res.json({
    message: 'This is my API',
    version: '1.0.0'
  });
});

// 3. Route parameters
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId, name: 'Juan' });
});

// 4. Query parameters
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  res.json({ searchQuery: query });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

**Test:**
```bash
node server.js
# Visit in browser:
# http://localhost:3000
# http://localhost:3000/api/info
# http://localhost:3000/api/users/123
# http://localhost:3000/api/search?q=tagalog
```

**Exercise Set 18 - POST Routes:**
```javascript
// Add to server.js

// In-memory storage
let users = [
  { id: 1, name: 'Juan', email: 'juan@example.com' },
  { id: 2, name: 'Maria', email: 'maria@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET one user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// POST new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: 'User deleted' });
});

// UPDATE user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
});
```

**Test with Thunder Client or Postman:**
- GET http://localhost:3000/api/users
- POST http://localhost:3000/api/users (body: { "name": "Pedro", "email": "pedro@example.com" })
- DELETE http://localhost:3000/api/users/1

### **🏗️ PROJECT 7: Vocabulary API (4-5 hours)**

**Requirements:**
Build a complete CRUD API for vocabulary words.

```javascript
// vocabulary-api.js

const express = require('express');
const app = express();

app.use(express.json());

// In-memory database
let vocabulary = [
  { 
    id: 1, 
    tagalog: 'kumusta', 
    english: 'hello', 
    example: 'Kumusta ka?',
    category: 'greetings'
  },
  { 
    id: 2, 
    tagalog: 'salamat', 
    english: 'thank you', 
    example: 'Salamat po!',
    category: 'greetings'
  }
];

// GET /api/words - Get all words
app.get('/api/words', (req, res) => {
  // Optional: filter by category if provided
  const { category } = req.query;
  if (category) {
    const filtered = vocabulary.filter(w => w.category === category);
    return res.json(filtered);
  }
  res.json(vocabulary);
});

// GET /api/words/:id - Get one word
app.get('/api/words/:id', (req, res) => {
  // YOUR CODE
});

// POST /api/words - Create new word
app.post('/api/words', (req, res) => {
  const newWord = {
    id: vocabulary.length + 1,
    tagalog: req.body.tagalog,
    english: req.body.english,
    example: req.body.example,
    category: req.body.category || 'general'
  };
  
  // Validation
  if (!newWord.tagalog || !newWord.english) {
    return res.status(400).json({ error: 'Tagalog and English are required' });
  }
  
  vocabulary.push(newWord);
  res.status(201).json(newWord);
});

// PUT /api/words/:id - Update word
app.put('/api/words/:id', (req, res) => {
  // YOUR CODE
});

// DELETE /api/words/:id - Delete word
app.delete('/api/words/:id', (req, res) => {
  // YOUR CODE
});

// GET /api/random - Get random word
app.get('/api/random', (req, res) => {
  const random = vocabulary[Math.floor(Math.random() * vocabulary.length)];
  res.json(random);
});

// GET /api/search?q=term - Search words
app.get('/api/search', (req, res) => {
  const term = req.query.q.toLowerCase();
  const results = vocabulary.filter(w => 
    w.tagalog.toLowerCase().includes(term) ||
    w.english.toLowerCase().includes(term)
  );
  res.json(results);
});

app.listen(3000, () => {
  console.log('Vocabulary API running on port 3000');
});
```

**Completion Checklist:**
- [ ] All CRUD endpoints work
- [ ] Can filter by category
- [ ] Random word endpoint works
- [ ] Search endpoint works
- [ ] Validation prevents invalid data
- [ ] Proper status codes (200, 201, 404, 400)

**Test all endpoints with Thunder Client**

**✅ YOU PASS IF:** All endpoints work correctly with proper responses.

---

### **📖 READ - Connecting Frontend to Backend (2-3 hours)**

**Primary Resources:**
1. [MDN - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
   - Read entire guide
   - Type out all examples

2. [JavaScript.info - Fetch](https://javascript.info/fetch)
   - Read Fetch section
   - Read POST requests

3. [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
   - Understand cross-origin requests

### **✍️ EXERCISES - Fetch API (2 hours)**

**Exercise Set 19 - Basic Fetch:**
```javascript
// In browser console or React app

// 1. Simple GET request
fetch('http://localhost:3000/api/words')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// 2. Async/await version
async function getWords() {
  try {
    const response = await fetch('http://localhost:3000/api/words');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// 3. POST request
async function addWord() {
  try {
    const response = await fetch('http://localhost:3000/api/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tagalog: 'oo',
        english: 'yes',
        example: 'Oo, tama yan.',
        category: 'basic'
      })
    });
    
    const data = await response.json();
    console.log('Created:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// 4. Error handling
async function getWordWithError() {
  try {
    const response = await fetch('http://localhost:3000/api/words/999');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```

**Exercise Set 20 - CORS Setup:**
```javascript
// backend/server.js
// Add CORS middleware

const cors = require('cors');

// Install: npm install cors

app.use(cors()); // Allow all origins (development only)

// Or specific origin:
app.use(cors({
  origin: 'http://localhost:5173' // Your React app URL
}));
```

### **🏗️ PROJECT 8: Full Stack Vocabulary App (5-6 hours)**

**Requirements:**
Connect your React frontend to the Express backend.

**Backend (vocabulary-api.js):**
```javascript
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let vocabulary = [
  { id: 1, tagalog: 'kumusta', english: 'hello', learned: false },
  { id: 2, tagalog: 'salamat', english: 'thank you', learned: false }
];

app.get('/api/words', (req, res) => {
  res.json(vocabulary);
});

app.post('/api/words', (req, res) => {
  const newWord = {
    id: Date.now(),
    tagalog: req.body.tagalog,
    english: req.body.english,
    learned: false
  };
  vocabulary.push(newWord);
  res.status(201).json(newWord);
});

app.delete('/api/words/:id', (req, res) => {
  vocabulary = vocabulary.filter(w => w.id !== parseInt(req.params.id));
  res.json({ message: 'Deleted' });
});

app.patch('/api/words/:id/learned', (req, res) => {
  const word = vocabulary.find(w => w.id === parseInt(req.params.id));
  if (word) {
    word.learned = !word.learned;
    res.json(word);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.listen(3000, () => console.log('API on port 3000'));
```

**Frontend (src/App.tsx):**
```typescript
import { useState, useEffect } from 'react';

interface Word {
  id: number;
  tagalog: string;
  english: string;
  learned: boolean;
}

function App() {
  const [words, setWords] = useState<Word[]>([]);
  const [tagalog, setTagalog] = useState('');
  const [english, setEnglish] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Load words on mount
  useEffect(() => {
    fetchWords();
  }, []);
  
  const fetchWords = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/words');
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error('Error fetching words:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const addWord = async () => {
    if (!tagalog || !english) return;
    
    try {
      const response = await fetch('http://localhost:3000/api/words', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tagalog, english })
      });
      
      const newWord = await response.json();
      setWords([...words, newWord]);
      setTagalog('');
      setEnglish('');
    } catch (error) {
      console.error('Error adding word:', error);
    }
  };
  
  const deleteWord = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/words/${id}`, {
        method: 'DELETE'
      });
      setWords(words.filter(w => w.id !== id));
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  };
  
  const toggleLearned = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/words/${id}/learned`, {
        method: 'PATCH'
      });
      const updated = await response.json();
      setWords(words.map(w => w.id === id ? updated : w));
    } catch (error) {
      console.error('Error updating word:', error);
    }
  };
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Tagalog Vocabulary</h1>
      
      {/* Add new word */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          placeholder="Tagalog"
          value={tagalog}
          onChange={(e) => setTagalog(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input 
          placeholder="English"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addWord}>Add Word</button>
      </div>
      
      {/* Word list */}
      <div>
        {words.map(word => (
          <div 
            key={word.id}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              marginBottom: '10px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <strong>{word.tagalog}</strong> = {word.english}
              {word.learned && ' ✓'}
            </div>
            <div>
              <button onClick={() => toggleLearned(word.id)}>
                {word.learned ? 'Unmark' : 'Mark Learned'}
              </button>
              <button onClick={() => deleteWord(word.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
      <p>Total words: {words.length} | Learned: {words.filter(w => w.learned).length}</p>
    </div>
  );
}

export default App;
```

**Run both:**
```bash
# Terminal 1 - Backend
node vocabulary-api.js

# Terminal 2 - Frontend
npm run dev
```

**Completion Checklist:**
- [ ] Frontend fetches words from backend
- [ ] Can add new words
- [ ] Can delete words
- [ ] Can toggle learned status
- [ ] Data persists in backend
- [ ] Refresh page - data still there

**✅ YOU PASS IF:** Full CRUD operations work between frontend and backend.

---

## **MODULE 4: OpenAI Integration (Days 11-14)**

### **📖 READ - OpenAI API (3-4 hours)**

**Primary Resources:**
1. [OpenAI API Documentation](https://platform.openai.com/docs/introduction)
   - Read Introduction
   - Read Quickstart

2. [OpenAI API Reference - Chat](https://platform.openai.com/docs/api-reference/chat)
   - Read create chat completion
   - Understand all parameters

3. [OpenAI Cookbook - How to format inputs](https://cookbook.openai.com/)
   - Read prompting guide
   - Read example prompts

4. [OpenAI - Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)
   - Read prompt engineering guide

### **✍️ EXERCISES - OpenAI API (3 hours)**

**Setup:**
```bash
npm install openai dotenv
```

Create `.env`:
```
OPENAI_API_KEY=your-key-here
```

**Exercise Set 21 - Basic OpenAI:**
```javascript
// test-openai.js
require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 1. Simple completion
async function simpleChat() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: 'Say hello in Tagalog'
      }
    ]
  });
  
  console.log(completion.choices[0].message.content);
}

// 2. With system prompt
async function withSystemPrompt() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful Tagalog language tutor.'
      },
      {
        role: 'user',
        content: 'How do I say "good morning"?'
      }
    ]
  });
  
  console.log(completion.choices[0].message.content);
}

// 3. Conversation with history
async function conversation() {
  const messages = [
    { role: 'system', content: 'You are a Tagalog tutor.' },
    { role: 'user', content: 'Kumusta?' },
  ];
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages
  });
  
  const aiResponse = completion.choices[0].message.content;
  console.log('AI:', aiResponse);
  
  // Add to history
  messages.push({ role: 'assistant', content: aiResponse });
  messages.push({ role: 'user', content: 'Mabuti naman' });
  
  // Continue conversation
  const completion2 = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages
  });
  
  console.log('AI:', completion2.choices[0].message.content);
}

// Run tests
simpleChat();
```

**Exercise Set 22 - System Prompts:**
```javascript
// Create different teaching personalities

const tutorPrompts = {
  strict: `You are a strict Tagalog teacher. 
    Correct every mistake immediately.
    Be formal and precise.`,
  
  friendly: `You are a friendly Tagalog tutor.
    Be encouraging and patient.
    Correct mistakes gently.
    Use simple language.`,
  
  conversational: `You are a Filipino friend teaching Tagalog.
    Be casual and fun.
    Use Taglish (mix of Tagalog and English).
    Share cultural insights.`
};

async function testPersonality(personality) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: tutorPrompts[personality] },
      { role: 'user', content: 'I want learn Tagalog' } // Intentional error
    ]
  });
  
  console.log(`${personality}:`, completion.choices[0].message.content);
}

// Try each
testPersonality('strict');
testPersonality('friendly');
testPersonality('conversational');
```

### **🏗️ PROJECT 9: AI Chat Backend (4-5 hours)**

**Requirements:**
Build an Express API that uses OpenAI for Tagalog tutoring.

```javascript
// ai-chat-api.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const systemPrompt = `You are a patient and encouraging Tagalog language tutor.

Your goals:
- Help students learn conversational Tagalog
- Correct mistakes gently and explain why
- Provide cultural context when relevant
- Adapt to the student's level
- Use Taglish (mix of Tagalog and English) for beginners

When a student makes a mistake:
1. Acknowledge their attempt
2. Show the correct version
3. Briefly explain the grammar rule
4. Give an example

Be supportive and celebrate progress!`;

// Store conversations (in-memory for now)
const conversations = new Map();

app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationId } = req.body;
    
    // Get or create conversation history
    let messages = conversations.get(conversationId) || [
      { role: 'system', content: systemPrompt }
    ];
    
    // Add user message
    messages.push({ role: 'user', content: message });
    
    // Get AI response
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500
    });
    
    const aiMessage = completion.choices[0].message.content;
    
    // Add to history
    messages.push({ role: 'assistant', content: aiMessage });
    
    // Save conversation
    conversations.set(conversationId, messages);
    
    res.json({
      response: aiMessage,
      conversationId,
      tokensUsed: completion.usage.total_tokens
    });
    
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

// Get conversation history
app.get('/api/conversations/:id', (req, res) => {
  const messages = conversations.get(req.params.id);
  if (!messages) {
    return res.status(404).json({ error: 'Conversation not found' });
  }
  res.json({ messages });
});

// Delete conversation
app.delete('/api/conversations/:id', (req, res) => {
  conversations.delete(req.params.id);
  res.json({ message: 'Conversation deleted' });
});

app.listen(3000, () => {
  console.log('AI Chat API running on port 3000');
});
```

**Frontend Integration (src/App.tsx):**
```typescript
import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationId] = useState(() => Date.now().toString());
  
  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    
    const userMessage: Message = {
      role: 'user',
      content: input
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversationId
        })
      });
      
      const data = await response.json();
      
      const aiMessage: Message = {
        role: 'assistant',
        content: data.response
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get response from AI');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Tagalog AI Tutor</h1>
      
      <div style={{ 
        height: '500px', 
        overflow: 'auto', 
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px'
      }}>
        {messages.map((msg, i) => (
          <div 
            key={i}
            style={{
              textAlign: msg.role === 'user' ? 'right' : 'left',
              margin: '10px 0'
            }}
          >
            <div style={{
              display: 'inline-block',
              padding: '10px',
              borderRadius: '10px',
              backgroundColor: msg.role === 'user' ? '#007bff' : '#f1f1f1',
              color: msg.role === 'user' ? 'white' : 'black',
              maxWidth: '70%'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <div>AI is typing...</div>}
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type in English or Tagalog..."
          style={{ flex: 1, padding: '10px' }}
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
```

**Completion Checklist:**
- [ ] Can chat with AI
- [ ] AI responds in character (as tutor)
- [ ] Conversation history maintained
- [ ] AI corrects mistakes
- [ ] Loading state works
- [ ] Error handling works

**✅ YOU PASS IF:** Can have a 5-message conversation with AI that makes sense.

---

### **✅ KNOWLEDGE CHECK 3 - Backend & APIs**

**Test 1 - Build API Endpoint:**
```javascript
// Without looking, create an endpoint that:
// POST /api/translate
// Body: { "english": "hello" }
// Response: { "tagalog": "kumusta" }

// YOUR CODE:
```

**Test 2 - Fetch Request:**
```typescript
// Write a function that POSTs data and handles errors
async function submitData(data: any) {
  // YOUR CODE
}
```

**Test 3 - Explain:**
- What does `app.use(cors())` do?
- What's the difference between `app.get()` and `app.post()`?
- What does `res.status(404).json()` do?
- What is a system prompt in OpenAI?

**✅ YOU PASS IF:** 80%+ correct answers.

---

### **✅ WEEK 2 FINAL CHECKPOINT**

**Must complete before Week 3:**

**Challenge: Build a Quote API (3 hours)**

Requirements:
- Backend with Express
- GET /api/quotes - return random inspirational quote
- POST /api/quotes - add new quote
- Frontend that fetches and displays quote
- Button to get new random quote

**✅ YOU PASS WEEK 2 IF:** Complete working fullstack app with API.

---

# WEEK 3: DATABASE & AUTHENTICATION

## **MODULE 5: PostgreSQL & Prisma (Days 15-18)**

### **📖 READ - Database Fundamentals (4-5 hours)**

**Primary Resources:**
1. [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
   - Read Section 1: Querying Data
   - Read Section 2: Filtering Data
   - Read Section 9: Managing Tables

2. [Prisma Getting Started](https://www.prisma.io/docs/getting-started)
   - Read entire getting started
   - Type out all examples

3. [Prisma Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
   - Read data model section
   - Understand relations

4. [Prisma CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
   - Read all CRUD operations

**Optional if stuck:**
🎥 [Prisma Crash Course](https://www.youtube.com/watch?v=RebA5J-rlwg)

### **✍️ EXERCISES - SQL & Prisma (4 hours)**

**Setup:**
```bash
npm install prisma @prisma/client
npx prisma init
```

**Exercise Set 23 - Prisma Schema:**
```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// 1. Simple model
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  createdAt DateTime @default(now())
}

// 2. Model with relations
model User {
  id        String    @id @default(uuid())
  email     String    @unique
  name      String
  posts     Post[]    // One user has many posts
  createdAt DateTime  @default(now())
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
}

// Run migration
// npx prisma migrate dev --name init
```

**Exercise Set 24 - Prisma Client:**
```typescript
// test-prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Create
async function createUser() {
  const user = await prisma.user.create({
    data: {
      email: 'juan@example.com',
      name: 'Juan'
    }
  });
  console.log(user);
}

// 2. Find all
async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

// 3. Find one
async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: { email }
  });
  console.log(user);
}

// 4. Update
async function updateUser(id: string) {
  const user = await prisma.user.update({
    where: { id },
    data: { name: 'Juan Updated' }
  });
  console.log(user);
}

// 5. Delete
async function deleteUser(id: string) {
  await prisma.user.delete({
    where: { id }
  });
}

// 6. Relations
async function createPostWithUser() {
  const user = await prisma.user.create({
    data: {
      email: 'maria@example.com',
      name: 'Maria',
      posts: {
        create: [
          { title: 'First Post', content: 'Hello world' },
          { title: 'Second Post', content: 'Learning Prisma' }
        ]
      }
    }
  });
  console.log(user);
}

// 7. Query with relations
async function getUserWithPosts(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { posts: true }
  });
  console.log(user);
}
```

### **🏗️ PROJECT 10: Database for Chat App (5-6 hours)**

**Requirements:**
Add database persistence to your chat app.

**Prisma Schema:**
```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String         @id @default(uuid())
  email         String         @unique
  name          String?
  createdAt     DateTime       @default(now())
  conversations Conversation[]
  messages      Message[]
}

model Conversation {
  id        String    @id @default(uuid())
  userId    String
  user      User      @relation(fields: [userId], references: [id])
  title     String?
  messages  Message[]
  createdAt DateTime  @default(now())
}

model Message {
  id             String       @id @default(uuid())
  conversationId String
  conversation   Conversation @relation(fields: [conversationId], references: [id])
  userId         String
  user           User         @relation(fields: [userId], references: [id])
  role           String       // 'user' or 'assistant'
  content        String
  createdAt      DateTime     @default(now())
}

model Vocabulary {
  id        String   @id @default(uuid())
  userId    String
  tagalog   String
  english   String
  example   String?
  learned   Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

**Run migration:**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

**Backend with Prisma:**
```typescript
// server.ts
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Create conversation
app.post('/api/conversations', async (req, res) => {
  const conversation = await prisma.conversation.create({
    data: {
      userId: req.body.userId,
      title: 'New Conversation'
    }
  });
  res.json(conversation);
});

// Get user conversations
app.get('/api/conversations/:userId', async (req, res) => {
  const conversations = await prisma.conversation.findMany({
    where: { userId: req.params.userId },
    include: {
      messages: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });
  res.json(conversations);
});

// Save message
app.post('/api/messages', async (req, res) => {
  const message = await prisma.message.create({
    data: {
      conversationId: req.body.conversationId,
      userId: req.body.userId,
      role: req.body.role,
      content: req.body.content
    }
  });
  res.json(message);
});

// Get conversation messages
app.get('/api/conversations/:id/messages', async (req, res) => {
  const messages = await prisma.message.findMany({
    where: { conversationId: req.params.id },
    orderBy: { createdAt: 'asc' }
  });
  res.json(messages);
});

app.listen(3000);
```

**Completion Checklist:**
- [ ] Database schema created
- [ ] Can create conversations
- [ ] Messages save to database
- [ ] Can retrieve conversations
- [ ] Messages persist after server restart
- [ ] Relations work correctly

**✅ YOU PASS IF:** Data survives server restart.

---

## **MODULE 6: Authentication (Days 19-21)**

### **📖 READ - Authentication Concepts (4-5 hours)**

**Primary Resources:**
1. [MDN - HTTP Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
   - Read entire guide

2. [JWT.io - Introduction](https://jwt.io/introduction)
   - Read all sections
   - Understand structure

3. [Auth0 - Authentication vs Authorization](https://auth0.com/intro-to-iam/authentication-vs-authorization)

4. [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
   - Read usage examples

### **✍️ EXERCISES - Authentication (3-4 hours)**

**Setup:**
```bash
npm install bcrypt jsonwebtoken
```

**Exercise Set 25 - Password Hashing:**
```typescript
import bcrypt from 'bcrypt';

// 1. Hash password
async function hashPassword(password: string) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log('Hash:', hash);
  return hash;
}

// 2. Compare password
async function verifyPassword(password: string, hash: string) {
  const isValid = await bcrypt.compare(password, hash);
  console.log('Valid:', isValid);
  return isValid;
}

// Test
async function test() {
  const hash = await hashPassword('myPassword123');
  await verifyPassword('myPassword123', hash); // true
  await verifyPassword('wrongPassword', hash); // false
}

test();
```

**Exercise Set 26 - JWT Tokens:**
```typescript
import jwt from 'jsonwebtoken';

const SECRET = 'your-secret-key-change-this';

// 1. Create token
function createToken(userId: string) {
  const token = jwt.sign(
    { userId, email: 'juan@example.com' }, // Payload
    SECRET,
    { expiresIn: '7d' } // Options
  );
  console.log('Token:', token);
  return token;
}

// 2. Verify token
function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET);
    console.log('Decoded:', decoded);
    return decoded;
  } catch (error) {
    console.log('Invalid token');
    return null;
  }
}

// Test
const token = createToken('user-123');
verifyToken(token);
verifyToken('invalid-token');
```

### **🏗️ PROJECT 11: Complete Authentication System (6-8 hours)**

**Requirements:**
Add user registration, login, and protected routes.

**Update Prisma Schema:**
```prisma
model User {
  id            String         @id @default(uuid())
  email         String         @unique
  password      String         // Hashed password
  name          String?
  createdAt     DateTime       @default(now())
  conversations Conversation[]
}
```

**Backend - Auth Routes:**
```typescript
// auth.ts
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    
    // Check if user exists
    const existing = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });
    
    // Generate token
    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Verify password
    const valid = await bcrypt.compare(password, user.password);
    
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
```

**Authentication Middleware:**
```typescript
// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

export interface AuthRequest extends Request {
  userId?: string;
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1]; // "Bearer <token>"
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
```

**Protected Routes:**
```typescript
// server.ts
import authRoutes from './auth';
import { authenticate, AuthRequest } from './middleware/auth';

app.use('/api/auth', authRoutes);

// Protected route example
app.post('/api/messages', authenticate, async (req: AuthRequest, res) => {
  // req.userId is available here
  const message = await prisma.message.create({
    data: {
      userId: req.userId!,
      conversationId: req.body.conversationId,
      role: req.body.role,
      content: req.body.content
    }
  });
  res.json(message);
});

// Get user's conversations (protected)
app.get('/api/conversations', authenticate, async (req: AuthRequest, res) => {
  const conversations = await prisma.conversation.findMany({
    where: { userId: req.userId },
    include: { messages: true }
  });
  res.json(conversations);
});
```

**Frontend - Login/Register:**
```typescript
// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        const data = await response.json();
        setError(data.error);
        return;
      }
      
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/chat');
    } catch (error) {
      setError('Login failed');
    }
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button onClick={handleLogin} style={{ width: '100%', padding: '10px' }}>
          Login
        </button>
      </div>
    </div>
  );
}
```

**Protected API Calls:**
```typescript
// src/utils/api.ts

const API_URL = 'http://localhost:3000/api';

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
}

export async function fetchProtected(endpoint: string, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: getAuthHeaders()
  });
  
  if (response.status === 401) {
    // Token invalid, redirect to login
    localStorage.removeItem('token');
    window.location.href = '/login';
    throw new Error('Unauthorized');
  }
  
  return response.json();
}

// Usage
async function getMyConversations() {
  const data = await fetchProtected('/conversations');
  return data;
}

async function sendMessage(conversationId: string, content: string) {
  const data = await fetchProtected('/messages', {
    method: 'POST',
    body: JSON.stringify({
      conversationId,
      role: 'user',
      content
    })
  });
  return data;
}
```

**Completion Checklist:**
- [ ] Users can register
- [ ] Users can login
- [ ] Passwords are hashed
- [ ] JWT tokens generated
- [ ] Protected routes require token
- [ ] Token stored in localStorage
- [ ] Can access protected resources
- [ ] Invalid token redirects to login
- [ ] Each user sees only their data

**✅ YOU PASS IF:** Complete auth flow works - register, login, access protected data.

---

### **✅ WEEK 3 FINAL CHECKPOINT**

**Must pass before Week 4:**

**Challenge: Build Multi-User Todo App (4-6 hours)**

Requirements:
- Users can register/login
- Each user has their own todo list
- Todos stored in PostgreSQL with Prisma
- Protected routes - can only see own todos
- Logout functionality

**✅ YOU PASS WEEK 3 IF:** Multi-user app works with separate data per user.

---

# WEEK 4: VOICE, STYLING & DEPLOYMENT

## **MODULE 7: Voice Features (Days 22-24)**

### **📖 READ - Web Speech API (2-3 hours)**

**Primary Resources:**
1. [MDN - Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
   - Read entire overview
   
2. [MDN - SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
   - Read all properties and methods

3. [MDN - SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
   - Read TTS guide

### **✍️ EXERCISES - Voice (2-3 hours)**

**Exercise Set 27 - Speech Recognition:**
```typescript
// Test in browser console first

// 1. Basic recognition
const SpeechRecognition = (window as any).webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'tl-PH'; // Tagalog
recognition.continuous = false;
recognition.interimResults = false;

recognition.onresult = (event: any) => {
  const transcript = event.results[0][0].transcript;
  console.log('You said:', transcript);
};

recognition.onerror = (event: any) => {
  console.error('Error:', event.error);
};

recognition.start();
console.log('Speak now...');

// 2. Continuous recognition
recognition.continuous = true;
recognition.start();
// Keeps listening until you call recognition.stop()

// 3. Interim results (shows partial results while speaking)
recognition.interimResults = true;
recognition.onresult = (event: any) => {
  let interim = '';
  let final = '';
  
  for (let i = 0; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      final += event.results[i][0].transcript;
    } else {
      interim += event.results[i][0].transcript;
    }
  }
  
  console.log('Final:', final);
  console.log('Interim:', interim);
};
```

**Exercise Set 28 - Text-to-Speech:**
```typescript
// 1. Basic speech
const utterance = new SpeechSynthesisUtterance('Kumusta ka?');
utterance.lang = 'tl-PH';
speechSynthesis.speak(utterance);

// 2. Control speech rate and pitch
utterance.rate = 0.9; // Slower (0.1 to 10)
utterance.pitch = 1; // Normal (0 to 2)
utterance.volume = 1; // Full volume (0 to 1)

// 3. Events
utterance.onstart = () => console.log('Started speaking');
utterance.onend = () => console.log('Finished speaking');
utterance.onerror = (event) => console.error('Error:', event);

// 4. Stop speaking
speechSynthesis.cancel();

// 5. Pause/Resume
speechSynthesis.pause();
speechSynthesis.resume();

// 6. Get available voices
const voices = speechSynthesis.getVoices();
voices.forEach(voice => {
  console.log(voice.name, voice.lang);
});

// Use specific voice
const filipinoVoice = voices.find(v => v.lang.startsWith('fil'));
if (filipinoVoice) {
  utterance.voice = filipinoVoice;
}
```

### **🏗️ PROJECT 12: Voice-Enabled Chat (4-5 hours)**

**Requirements:**
Add voice input and output to your chat app.

```typescript
// src/hooks/useSpeechRecognition.ts
import { useState, useCallback } from 'react';

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState('');
  
  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setError('Speech recognition not supported');
      return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'tl-PH';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => {
      setIsListening(true);
      setError('');
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
    };
    
    recognition.onerror = (event: any) => {
      setError(`Error: ${event.error}`);
      setIsListening(false);
    };
    
    recognition.start();
  }, []);
  
  return { isListening, transcript, error, startListening };
}

// src/hooks/useTextToSpeech.ts
import { useState } from 'react';

export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const speak = (text: string) => {
    if (!text) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tl-PH';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    speechSynthesis.speak(utterance);
  };
  
  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };
  
  return { isSpeaking, speak, stop };
}

// src/App.tsx
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { useTextToSpeech } from './hooks/useTextToSpeech';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  
  const { isListening, transcript, startListening } = useSpeechRecognition();
  const { isSpeaking, speak, stop } = useTextToSpeech();
  
  // When transcript changes, update input
  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);
  
  const sendMessage = async () => {
    // ... your existing send logic
    
    // After getting AI response, speak it
    speak(aiResponse);
  };
  
  return (
    <div>
      {/* Existing chat UI */}
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or speak..."
        />
        
        <button 
          onClick={startListening}
          disabled={isListening}
          style={{
            backgroundColor: isListening ? 'red' : 'blue',
            color: 'white'
          }}
        >
          {isListening ? '🔴 Listening...' : '🎤 Speak'}
        </button>
        
        <button onClick={sendMessage}>
          Send
        </button>
      </div>
      
      {isSpeaking && (
        <div>
          🔊 Speaking...
          <button onClick={stop}>Stop</button>
        </div>
      )}
    </div>
  );
}
```

**Completion Checklist:**
- [ ] Can speak and input appears
- [ ] Microphone button shows listening state
- [ ] AI responses are spoken aloud
- [ ] Can stop speech
- [ ] Works in Tagalog
- [ ] Error handling for unsupported browsers

**✅ YOU PASS IF:** Can have a voice conversation with the app.

---

## **MODULE 8: Styling with Tailwind (Day 25)**

### **📖 READ - Tailwind CSS (3-4 hours)**

**Primary Resources:**
1. [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
   - Read installation guide
   - Read all of "Core Concepts"

2. [Tailwind CSS - Utility Classes](https://tailwindcss.com/docs/utility-first)
   - Understand utility-first approach

3. [Tailwind CSS - Responsive Design](https://tailwindcss.com/docs/responsive-design)

4. [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
   - Bookmark for reference

**Interactive:**
🔗 [Tailwind Play](https://play.tailwindcss.com/) - Try examples

### **✍️ EXERCISES - Tailwind (3-4 hours)**

**Setup:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configure (tailwind.config.js):**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Add to CSS (src/index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Exercise Set 29 - Basic Styling:**
```tsx
// Examples to type out and test

// 1. Layout
<div className="container mx-auto px-4">
  Content centered with padding
</div>

// 2. Flexbox
<div className="flex items-center justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

// 3. Grid
<div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

// 4. Colors and spacing
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Button
</button>

// 5. Responsive
<div className="text-sm md:text-base lg:text-lg">
  Small on mobile, larger on desktop
</div>

// 6. Card component
<div className="bg-white rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-bold mb-4">Card Title</h2>
  <p className="text-gray-600">Card content</p>
</div>
```

### **🏗️ PROJECT 13: Redesign Chat App (4-5 hours)**

**Requirements:**
Apply Tailwind to make your chat app look professional.

```tsx
// src/App.tsx - Tailwind styled version

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <header className="bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-indigo-600">
                Tagalog AI Tutor
              </h1>
              <p className="text-gray-600">
                Learn Tagalog through conversation
              </p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
              Logout
            </button>
          </div>
        </header>
        
        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-[600px] overflow-y-auto p-6 bg-gray-50">
            {messages.map((msg, i) => (
              <div 
                key={i}
                className={`flex mb-4 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className={`max-w-[70%] rounded-lg p-4 ${
                  msg.role === 'user'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white shadow-md text-gray-900'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  
                  {msg.role === 'assistant' && (
                    <button 
                      onClick={() => speak(msg.content)}
                      className="mt-2 text-sm opacity-75 hover:opacity-100"
                    >
                      🔊 Listen
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type or speak in Tagalog..."
                className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition"
              />
              
              <button 
                onClick={startListening}
                disabled={isListening}
                className={`px-4 py-3 rounded-lg transition ${
                  isListening
                    ? 'bg-red-500 animate-pulse'
                    : 'bg-gray-200 hover:bg-gray-300'
                } text-gray-700`}
              >
                {isListening ? '🔴' : '🎤'}
              </button>
              
              <button 
                onClick={sendMessage}
                disabled={loading}
                className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg transition font-medium"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Completion Checklist:**
- [ ] All components styled with Tailwind
- [ ] Responsive (works on mobile)
- [ ] Professional appearance
- [ ] Smooth transitions/hover effects
- [ ] Good color scheme
- [ ] Proper spacing and alignment

**✅ YOU PASS IF:** App looks polished and professional.

---

## **MODULE 9: Deployment (Days 26-28)**

### **📖 READ - Deployment Concepts (3-4 hours)**

**Primary Resources:**
1. [Vercel Documentation](https://vercel.com/docs)
   - Read Getting Started
   - Read Deployments overview

2. [Railway Documentation](https://docs.railway.app/)
   - Read Getting Started
   - Read Environment Variables

3. [Supabase Database Docs](https://supabase.com/docs/guides/database)
   - Read Database setup

### **🏗️ PROJECT 14: Deploy Complete App (6-8 hours)**

**Step 1: Prepare for Production**

**Environment Variables (.env):**
```bash
# Backend .env
DATABASE_URL=your-production-database-url
JWT_SECRET=your-strong-secret-key
OPENAI_API_KEY=your-openai-key
NODE_ENV=production
```

**Frontend - Create config:**
```typescript
// src/config.ts
export const API_URL = import.meta.env.PROD
  ? 'https://your-backend.railway.app'
  : 'http://localhost:3000';
```

**Update fetch calls:**
```typescript
import { API_URL } from './config';

fetch(`${API_URL}/api/chat`, {
  // ...
});
```

**Step 2: Deploy Database (Supabase or Railway)**

**Option A - Supabase:**
1. Go to supabase.com
2. Create new project
3. Get connection string
4. Update DATABASE_URL in backend
5. Run migrations: `npx prisma migrate deploy`

**Option B - Railway Database:**
1. Go to railway.app
2. New Project → Provision PostgreSQL
3. Copy DATABASE_URL
4. Add to environment variables

**Step 3: Deploy Backend (Railway)**

**Create railway.toml:**
```toml
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "npm start"
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10
```

**Update package.json:**
```json
{
  "scripts": {
    "start": "node dist/server.js",
    "build": "tsc",
    "dev": "ts-node src/server.ts"
  }
}
```

**Deploy:**
1. Push code to GitHub
2. Go to railway.app
3. New Project → Deploy from GitHub
4. Select your repo
5. Add environment variables
6. Deploy

**Step 4: Deploy Frontend (Vercel)**

**Install Vercel CLI:**
```bash
npm i -g vercel
```

**Deploy:**
```bash
vercel login
vercel

# For production:
vercel --prod
```

**Or via GitHub:**
1. Push to GitHub
2. Go to vercel.com
3. Import project
4. Configure settings
5. Deploy

**Step 5: Test Everything**

**Checklist:**
- [ ] Frontend loads at vercel URL
- [ ] Can register new user
- [ ] Can login
- [ ] Can send messages
- [ ] AI responds correctly
- [ ] Voice features work
- [ ] Data persists
- [ ] Works on mobile browser

**✅ YOU PASS IF:** Complete app works live on the internet.

---

### **✅ WEEK 4 & FINAL CHECKPOINT**

**Final Test: Build New Feature (4-6 hours)**

**Add vocabulary review feature:**
- Save new words from conversations
- Display vocabulary list
- Quiz mode
- Mark words as learned
- Track progress

**✅ YOU PASS FINAL IF:**
- Feature works locally
- Feature deployed to production
- All previous features still work
- No major bugs

---

# FINAL DELIVERABLES

## **You should have:**

1. **Working App:**
   - Live at yourapp.vercel.app
   - Full authentication
   - AI-powered chat
   - Voice features
   - Vocabulary tracking
   - Progress dashboard

2. **GitHub Repository:**
   - Clean code
   - Good commit history
   - README with:
     - Features
     - Tech stack
     - Setup instructions
     - Screenshots

3. **Portfolio Ready:**
   - Demo video (3-5 min)
   - Case study write-up
   - Updated resume
   - LinkedIn post draft

4. **Job Application Materials:**
   - Resume highlighting project
   - Cover letter template
   - List of companies to apply to
   - Interview prep notes

---

# HOW TO USE THIS ROADMAP

## **Daily Routine:**

**Morning/Commute (30-60 min):**
- Read assigned documentation sections
- Review previous day's code
- Plan today's work

**Main Session (3-4 hours):**
- Complete exercises from memory
- Build projects
- Test yourself
- Only look back if stuck >30 minutes

**End of Day (15 min):**
- Review what you built
- Note what you struggled with
- Plan tomorrow

## **Weekly Pattern:**

**Monday-Thursday:**
- Learn new concepts
- Do exercises
- Build projects

**Friday:**
- Review week
- Pass knowledge checks
- Catch up if behind

**Weekend:**
- Major projects
- Consolidate learning
- Get ahead if possible

## **When Stuck:**

**After 15 minutes stuck:**
- Re-read the relevant docs section
- Check the exercises examples

**After 30 minutes:**
- Google the specific error
- Check Stack Overflow

**After 1 hour:**
- Watch the optional video for that topic
- Ask in Discord/Reddit

**After 2 hours:**
- Move on, come back later
- Sometimes sleep helps

## **Tracking Progress:**

Create a checklist:
```
Week 1:
□ Day 1 - JavaScript basics
□ Day 2 - Async JavaScript  
□ Day 3 - React basics
□ Day 4 - useState
□ Day 5 - Lists & forms
□ Day 6 - useEffect
□ Day 7 - TypeScript
□ Project 1 ✓
□ Project 2 ✓
□ Knowledge Check 1 ✓
```

---

# SUCCESS METRICS

**End of 4 Weeks, you should:**

✅ **Build from scratch:**
- React app with useState, useEffect
- Express API with database
- Authentication system
- Full CRUD operations

✅ **Understand:**
- How React works (components, state, effects)
- How APIs work (requests, responses, endpoints)
- How databases work (tables, relations, queries)
- How authentication works (passwords, tokens)

✅ **Have deployed:**
- Live fullstack application
- Real users can access it
- Data persists
- Professional appearance

✅ **Ready to:**
- Start job applications
- Do technical interviews
- Learn new technologies quickly
- Build your own ideas

---

**This roadmap is designed so you CANNOT fake understanding. Every checkpoint requires you to BUILD something from memory. If you can build it, you learned it. If you can't, you go back and learn it properly.**

**Start Monday with Module 1. Good luck! 🚀**