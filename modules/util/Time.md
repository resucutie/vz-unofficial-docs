# Time

Utilities for Date manipulation

## Importing

```js
// ES6
import { time } from "@vizality/util"

// Commom JS
const { time } = require("@vizality/util")
```

## Functions

#### `assertDate(input)`

Asserts that the input is an Date. If not, it throws an error, otherwise, does nothing

```js
time.assertDate("h") // Uncaught TypeError: Expected an array but received string.
time.assertDate(new Date()) // undefined
```

#### `isDate(input)`

Checks if the input is an Date. It returns `true` if input is an Date and returns `false` if not

```js
time.isDate("h") // false
time.isDate(new Date()) // true
```

#### `millisecondsToTime(ms)`

Converts milliseconds into human readable time

```js
time.millisecondsToTime(80000) // "1:20"
time.millisecondsToTime(49000000000000) // "15:6:40"
```

#### (async) `sleep(time)`

Wait some specific time to do something

```js
time.sleep(2000).then(resolve => console.log("poggers")) // logs "poggers" after 2000ms (2 seconds)

await time.sleep(2000) // more like C way
console.log("bruh") // logs "bruh" after 2000ms (2 seconds)
```



## Deprecated/Non-functional functions

For now, there isn't any deprecated functions



## Removed functions

For now, there isn't any function that got removed