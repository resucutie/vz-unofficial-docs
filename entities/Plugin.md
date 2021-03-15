# Plugin

Entity for Plugins.



## Importing

```js
// ES6
import { Plugin } from "@vizality/entities"

// CJS
const { Plugin } = require("@vizality/entities")
```



## Functions

#### `settings`

Utilities for managing settings

```js
this.settings.get("awesome-setting", true) 
this.settings.set("awesome-setting", false)
```



###### `connectStore(component)`

Makes a [Flux](../modules/webpack/Flux.md) component with `component` for using settings and maintaining an updating frequency

###### `delete(setting)`

Deletes a setting

###### `get(setting [, defaultValue])`

Returns the respective setting, and if that doesn't exist, `defaultValue` returns the value

###### `getKeys()`

List all settings in an array

###### `set(setting, newValue)`

Create/modify a new setting according to `newValue`

#### `injectStyles(path [, suppress = false])`

Adds an (S)CSS style. Should be a file.

If `suppress = true` it shouldn't log compiling errors

```js
this.injectStyles("style.scss")
```

#### `registerSettings(render)`

Setup settings for plugins.

Render should be an react memo or component

```js
import EpicSettings from "./Settings" //react memo/component

this.registerSettings(EpicSettings)
```

#### `log(...message)`

Alias to [logger](../modules/util/Logger.md).log

#### `warn(...message)`

Alias to [logger](../modules/util/Logger.md).warn

#### `error(...message)`

Alias to [logger](../modules/util/Logger.md).error



## Deprecated/Non-functional features

For now, there isn't any deprecated functions



## Removed features

For now, there isn't any function that got removed



*`Edited at 15/03/2021`*

