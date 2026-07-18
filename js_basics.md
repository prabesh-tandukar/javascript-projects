# Javascript fundamentals:

### Using JS

Script tag to link html and js code.
Internal js by writing the code between script tag. External js by linking a js file with src attribute on script tag.

```javascript
<script> const name = "john" </script>
<script src="index.js" > </script>

```

---

### use strict

"use strict" is a directive we use on top of the file or on top of a function to make them use the modern javascript. It should be on top otherwise it wont work.

---

### Variables

There are three ways to assign variables in javascript.

1. let : variable that you will change the value later.
2. const : variable whose value will remain constant
3. var : old way of declaring a variable , dont use any more.

```
let name; // this is called declaring a variable

name = "john"; // this is assigning a value to the variable

let age = 24; // we usually have both declaration and assignment in the same line
```

---

### Data types:

There are 8 basic data types in Javascript:

- Seven primitive data types:
  - number : for numbers of any kind: integer or floating point integers are limited by +-(2\*\*53 -1).
  - bigint : for integer numbers of arbitary length
  - string : for strings. A string may have zero or more characters, there's no separate single-character type.
  - boolean : for true/false
  - null : for unknown values , a standalone type that has a single value null
  - undefined : for unassigned value , a standalone type that has a single value undefined
  - symbol : for unique identifiers
- And one non-primitive data type:
  - object : for more complex data structure

The "typeof" operator allows us to see which type is stored in a variable.

- Usually used as typeof x, but typeof(x) is also possible
- Returns a string with the name of the type, like "string".
- For null returns "object" , this is an error in the language, it's not actually an object

---

### Type Conversion:

The three most widely used type conversions are to string, to number, and to boolean.

1. String Conversion : Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

2. Numeric Conversion : Occurs in math operations. Can be performed with Number(value). The conversion follows the rules:

- undefined => NaN
- null => 0
- true / false => 1 / 0
- string => The string is read "as is", whitespaces (includes spaces, tabs \t, newlines \n etc) from both sides are ignored. An empty string becomes 0. An error gives NaN.

3. Boolean Conversion : Occurs in logical operations. Can be performed with Boolean(value). Follows the rules:

- 0, null, undefined, NaN, "" => false
- any other value => true

Notable exceptions are:

- undefined is NaN as a number, not 0.
- "0" and space-only strings like " " are true as boolean.
