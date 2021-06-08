

# Theme

Entity for themes. Yes, this is actually a thing



## Importing

```js
import { Theme } from "@vizality/entities"
```



## Functions

#### `registerSettings(render)`

Setup settings for themes.

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