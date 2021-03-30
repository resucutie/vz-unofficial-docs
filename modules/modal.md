# Modal

Module to create and close modals



## Functions

#### `open(Component)`

Opens an modal

`Component` is a function that returns a React component

###### Importing

```js
import { open } from "@vizality/modal"
```

###### Example

```jsx
modal.open(() => <div>yes</div>)
```

![](https://auser-got-your.censored.pictures/Bd03dA4.png)

#### `close()`

Close current opened modal

###### Importing

```js
import { close } from "@vizality/modal"
```

###### Example

```jsx
modal.open(() => <div>yes</div>) //opens a modal
await time.sleep(5000) // wait for 5 seconds
modal.close() // closes it
```

#### `closeAll()`

Close all opened modals

###### Importing

```js
import { closeAll } from "@vizality/modal"
```

###### Example

```jsx
modal.open(() => <div>yes</div>)
await time.sleep(2000)
modal.open(() => <div>no</div>)
await time.sleep(3000)
modal.closeAll()
```



## Deprecated/Non-functional functions

For now, there isn't any function that got deprecated



## Removed functions

For now, there isn't any function that got removed



*`Edited at 30/03/2021`*