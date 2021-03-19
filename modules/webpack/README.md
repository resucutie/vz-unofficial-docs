# Webpack

Utilities relationed to the global variable `webpackJsonp`



## `webpackJsonp`?? What that means?

`webpackJsonp` is an array full with modules that discord exports to use in different parts of itself. You can acess it by typing `webpackJsonp` on console, but it is kinda unorganized and hard to find them, since they're separated in a bunch of arrays.

![webpackJsonp in its true form](https://auser.ipgrabber.link/BfA778B.png)

This code will unorganize it and make easier for computers to find modules

```js
webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},[['']]]).cache
```

And if you wanna in an array form to use array-related functions like `Array.prototype.find` you can use this code

```js
Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},[['']]]).cache)
```

But this is used if you wanna put that in clients without a mod client. Instead, you can use those functions to find it:



## Functions

#### `findComponent(keyword [, exact = false])`

Searches for React components in Webpack

This function was made to be used for component-searching. Shouldn't be used for getting components in general. Instead, try using `getModuleByDisplayName` to get them

If `exact = true` it'll only list if the component name is exactly the described. If `exact = false`, it'll only find simmilar functions to it

![](https://auser-have-some.viruses-to.download/7b3f399.png)

This shows when you try to find a module, and not a component

![](https://auser-have-some.yiff.services/540E004.png)

#### `getModule(...filter)`

Gets the module in Webpack. Returns the module found

`filter` can be either a string or a function

###### Importing

```js
// ES6
import { getModule } from '@vizality/webpack'

// CJS
const { getModule } = require('@vizality/webpack')
```

###### Usage

```js
getModule("module name")
getModule(function())
```

###### Examples

```js
const { getGuildId } = getModule("getGuildId")
console.log(getGuildId())
```

###### `getModule` and patching

According to patching, it requires patching a module, and not a function. Thats a commom mistake made by a lot of developers. Check this example:

```js
// wrong
const { ListSectionItem } = getModule(m => m.default?.displayName === 'ListSectionItem')
console.log(typeof ListSectionItem) // function
patch("getModule-and-patch", ListSectionItem, "default", (args, res) => {
	console.log(args, res)
});

// correct
const ListSectionItem = getModule(m => m.default?.displayName === 'ListSectionItem')
console.log(typeof ListSectionItem) // object (this can be considered as an module)
patch("getModule-and-patch", ListSectionItem, "default", (args, res) => {
	console.log(args, res)
});
```

#### `getModuleByDisplayName(displayName [, retry = false, forever = false])`

Gets the module in Webpack, most of time a React component, by its display name. Returns the function of the module, instead of the module itself

If `retry = true` it will retry fetching if the module is not found. Each try will be delayed by 100ms and max retries is 20.

If `forever = true` it will try to fetch the module forever. Should be used only if you're in early stages of startup.

###### Importing

```js
// ES6
import { getModuleByDisplayName } from '@vizality/webpack'

// CJS
const { getModuleByDisplayName } = require('@vizality/webpack')
```

###### Usage

```js
getModuleByDisplayName("module name")
```

###### Example

```js
const Popout = getModuleByDisplayName("Popout")
console.log(Popout)
```

###### `getModuleByDisplayName` and patching

According to patching, it requires patching a module, and not a function. Since `getModuleByDisplayName` returns an function, and not an module, patching using `getModuleByDisplayName` isn't possible. Alternatively, you can try using `getModule` with a filter to its module's displayName. Like what it is shown in that example:

```js
const ListSectionItem = getModule(m => m.default?.displayName === 'ListSectionItem')
patch("getModule-and-patch", ListSectionItem, "default", (args, res) => {
    console.log(args, res)
});
```

#### `getModuleById(id [, retry = false, forever = false])`

Gets the module in Webpack by its ID. Returns the module found

`id` can be either an string or a number

If `retry = true` it will retry fetching if the module is not found. Each try will be delayed by 100ms and max retries is 20.

If `forever = true` it will try to fetch the module forever. Should be used only if you're in early stages of startup.

###### Importing

```js
// ES6
import { getModuleById } from '@vizality/webpack'

// CJS
const { getModuleById } = require('@vizality/webpack')
```

###### Finding module IDs

Most of modules have an `_dispatchToken` key, that contains the module's ID. For example: the module popularly known as `getGuildId` or `getLastSelectedGuildId` has an `_dispatchToken` key with the value as `"ID_50"`. And so, the module ID is `50`

![](https://auser-dont-get-out-of-his-home-so-hell-never-get.c0ronavir.us/8a8f1E0.png)

###### Usage

```js
getModuleById("id")
```

###### Example

```js
const { getGuildId } = getModuleById(50)
console.log(getGuildId())
```

#### `getAllModules()`

Returns all modules in Webpack

###### Importing

```js
// ES6
import { getAllModules } from '@vizality/webpack'

// CJS
const { getAllModules } = require('@vizality/webpack')
```

###### Usage

```js
getAllModules()
```

#### `getModulesByKeyword(keyword [, exact = false])`

Searches all modules with an keyword

If `exact = true` it will find every single module in webpack with the same name

###### Importing

```js
// ES6
import { getModulesByKeyword } from '@vizality/webpack'

// CJS
const { getModulesByKeyword } = require('@vizality/webpack')
```

###### Usage

```js
getModulesByKeyword("keyword", exact) // where exact can be true or not. Default is false
```

###### Example

![](https://auser-have-some.yiff.services/fF55af0.png)

###### What is the difference behind `getModulesByKeyword(keyword, true)` and `getModule` by itself?

Strangely, Discord sometimes exports the same function in different modules. For example: the function `getGuildId` is exported in 5 different modules, as you can check in this photo:

![](https://auser.ipgrabber.link/E8AB7f9.png)

`getModule` returns the first result. Using `getModulesByKeyword` will return every single module with that function.

#### `getModuleByPrototypes(filter [, retry = false, forever = false])`

Searches for every module that has in its prototype `filter`

`filter` is an array with strings containing the name of the prototypes that you're trying to find

If `retry = true` it will retry fetching if the module is not found. Each try will be delayed by 100ms and max retries is 20.

If `forever = true` it will try to fetch the module forever. Should be used only if you're in early stages of startup.

###### Importing

```js
// ES6
import { getModuleByPrototypes } from '@vizality/webpack'

// CJS
const { getModuleByPrototypes } = require('@vizality/webpack')
```

###### Usage

```js
getModuleByPrototypes(function(), retry, forever)
/* where:
* retry can be true or not. Default is false
* forever can be true or not. Default is false
*/
```

###### Examples

```js
getModuleByPrototypes(["getGuildId"]) // function
getModuleByPrototypes(["getGuildId", "getLastSelectedGuildId"]) // function
```

#### `getModules(filter)`

Returns an array with all results from `filter`

`filter` is the function that finds modules

###### Importing

```js
// ES6
import { getModules } from '@vizality/webpack'

// CJS
const { getModules } = require('@vizality/webpack')
```

###### Usage

```js
getModules(function())
```

###### Examples

```js
getModules(m => m.default?.displayName?.includes("React")) // will find every module that has the displayName "React"
getModules(m => m.default?.displayName) // will find every module that has an displayName
getModules(m => m.default?.prototype?.render) // will find every module that has an render
```



## Exported modules

Those modules were exported to get an quick acess to them. Also there is pages for them

#### Flux

Module that updates an React component when a variable updates

#### React

Discord's framework library

#### messages

Message utils from discord

*more will be written*



## Deprecated/Non-functional functions

For now, there isn't any deprecated functions



## Removed functions

For now, there isn't any function that got removed



*`Edited at 15/03/2021`*