# Modules

The modules part of Vizality have all basic functions that an developer needs to make a plugin for the mod client.

All of them can be found on the `@vizality` module

```js
// ES6
import { color, string, array } from "@vizality/util"
import { getModule, getModuleByDisplayName } from '@vizality/webpack'
import { patch, unpatch } from '@vizality/patcher'

// Commom JS
const { color, string, array } = require("@vizality/util")
const { getModule, getModuleByDisplayName } = require('@vizality/webpack')
const { patch, unpatch } = require('@vizality/patcher')
```

Also, for debugging purposes, it can be found on the global variable `$vz`

```js
$vz.webpack.getModule("getGuild")
$vz.util.string.chunkText("nope", 2)
$vz.discord.user.getUserIds()
```



*`Edited at 13/03/2021`*