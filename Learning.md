## JavaScript Fundamentals

**Variables and scope**

- `let` vs `const` and when to use each
- Why variables declared outside functions persist between calls
- Why variables declared inside functions reset each call

**Data types**

- Strings, numbers, booleans
- Why `input.value` is always a string and how to convert with `Number()`
- Truthy and falsy values — using `!bill_amount` instead of `=== 0`

**Functions**

- Declaring and calling functions
- Returning early with `return` as a guard clause
- Extracting repeated logic into a single reusable function

**Arrays and objects**

- Storing structured data in arrays of objects
- Accessing object properties with dot notation
- Looping through arrays with `forEach`
- Using the index parameter in `forEach`

**Conditionals**

- `if / else if / else`
- Guard clauses to stop execution early
- Multiple conditions with `&&` and `||`

---

## DOM Manipulation

- Selecting elements with `getElementById`, `querySelector`, `querySelectorAll`
- Creating elements dynamically with `createElement`
- Adding elements to the page with `append`
- Updating content with `textContent` and `innerHTML`
- Clearing elements with `innerHTML = ""`
- Showing and hiding elements with `style.display`

---

## Events

- `addEventListener` for click and keydown events
- Attaching events to dynamically created elements
- Keyboard events — detecting Enter key with `event.key`
- Why you query elements inside a click handler vs outside

---

## CSS Classes via JavaScript

- `classList.add`, `classList.remove`, `classList.toggle`
- Using CSS classes for state instead of inline styles
- The `active` pattern for selected UI elements

---

## Data Attributes

- Storing values in HTML with `data-tip="10"`
- Reading them in JavaScript with `element.dataset.tip`
