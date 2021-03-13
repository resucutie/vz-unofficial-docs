# Array

Utilities for objects, making easy to manipulate them

## Importing

```js
// ES6
import { object } from "@vizality/util"

// Commom JS
const { object } = require("@vizality/util")
```



## Functions

#### `assertObject(input)`

Asserts that the input is an array. If not, it throws an error, otherwise, nothing

```js
object.assertObject("This will output an error") // Uncaught TypeError: Expected an object but received number.
object.assertObject({}) // undefined
```

#### `excludeProperties(obj, ...keys)`

Removes from the object keys specified by the developer

```js
object.excludeProperties({bruh: "memes", bruh2: true, bruh3: ["no"], bruh4: 1}, "bruh3") // {bruh: "memes", bruh2: true, bruh4: 1}
object.excludeProperties({bruh: "memes", bruh2: true, bruh3: ["no"], bruh4: 1}, "bruh3", "bruh") // {bruh2: true, bruh4: 1}
object.excludeProperties({bruh: "memes", bruh2: true, bruh3: ["no"], bruh4: 1}, ...["bruh3", "bruh"]) // {bruh2: true, bruh4: 1}. way to use with arrays
```

#### `isEmptyObject(input)`

Checks if object is empty

```js
object.isEmptyObject({bruh: "memes"}) // false
object.isEmptyObject({}) // true
```

#### `keysToLowerCase(obj [, nested = false])`

Makes the keys name lowercase

If `nested = true` it also lowercase the keys inside objects that are inside the keys

```js
object.keysToLowerCase({Bruh: "memes", Bruh2: "true", Bruh3: "no", Bruh4: {Bruh5: "you caught me"}}) // {bruh: "memes", bruh2: "true", bruh3: "no", bruh4: { Bruh5: "you caught me" }}
object.keysToLowerCase({Bruh: "memes", Bruh2: "true", Bruh3: "no", Bruh4: {Bruh5: "you caught me"}}, true) // {bruh: "memes", bruh2: "true", bruh3: "no", bruh4: { bruh5: "you caught me" }}
```

#### `removeUndefinedProperties(obj)`

Removes all properties that has `undefined` as the value

```js
object.removeUndefinedProperties({bruh: undefined, bruh2: undefined, bruh3: undefined, bruh4: 1}) // {bruh4: 1}
object.removeUndefinedProperties({bruh: null, bruh2: null, bruh3: null, bruh4: 1}) // {bruh: null, bruh2: null, bruh3: null, bruh4: 1}. In that case it doesn't delete if the variable is null, only undefined
```



## Deprecated/Non-functional functions

#### `findEntriesByKey(obj, key [, exact = false])`

Searches on an object with an specific key

If `exact = true` then it returns the key found. If `exact = false` then it returns a table with the keys that have an simmilar name to the found key

```js
object.findEntriesByKey({bruh: "memes", bruh2: "true", bruh22: "no", bruh4: "13/03/2021"}, "bruh2") /*
bruh2  | true
bruh22 | no
*/
object.findEntriesByKey({bruh: "memes", bruh2: "true", bruh22: "no", bruh4: "13/03/2021"}, "bruh2", true) // "bruh2"
```

#### `findEntriesByKeyword(obj, keyword [, exact = false])`

Searches on an object both key's name and value of the key

If `exact = true` then it searches for specifically that key or value. If `exact = false` then it returns a table with all keys with the found value

```js
object.findEntriesByKeyword({"sotrue": "memes", bruh2: "true", bruh3: "no", bruh4: "13/03/2021"}, "true", true)/*
"sotrue"  | memes
bruh2    | true
*/
object.findEntriesByKeyword({bruh: "memes", bruh2: "true", bruh3: "no", bruh4: "13/03/2021"}, "bruh", true) // "bruh3"
```

#### `findEntriesByValue(obj, value [, exact = false])`

Searches on an object with an specific value

If `exact = true` then it returns the value found. If `exact = false` then it returns a table with the key names of the found value

```js
object.findEntriesByValue({bruh: "no", bruh2: "true", bruh3: "no", bruh4: "13/03/2021"}, "no") /*
bruh  | no
bruh3 | no
*/
object.findEntriesByValue({bruh: "memes", bruh2: "true", bruh3: "no", bruh4: "13/03/2021"}, "13/03/2021", true) // "bruh4"
```



Note: `findEntriesByKey `, `findEntriesByKeyword` and`findEntriesByValue` got depracted due to the function that it is used to search (a.k.a. `_find`)  is in development stages, so those functions are buggy. Those functions can be used for searching long and big objects, like the entire i18n

## Removed functions

For now, there isn't any function that got removed



*`Edited at 13/03/2021`*