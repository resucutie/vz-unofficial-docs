# Updatable

Updatable class used for handling Vizality updates and addon updates



## Importing

```js
import { Updatable } from "@vizality/entities"
```



## Functions

#### `isUpdatable()`

Checks if addon is updatable

Returns a boolean

```js
this.isUpdatable()
```

#### `async getGitRepo()`

Returns the Git repo

```js
await this.getGitRepo()
this.getGitRepo().then(repo => console.log(repo))
```

#### `getBranch()`

Get addon's git branch

```js
this.getBranch()
```



## Deprecated/Non-functional features

For now, there isn't any deprecated functions



## Removed features

For now, there isn't any function that got removed



*`Edited at 15/03/2021`*