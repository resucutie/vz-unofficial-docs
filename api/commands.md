# Commands

API for managing commands



## `VizalityCommand`

The `VizalityCommand` object is how Vizality actually reads commands. This is an example of an command object:

```js
{
    command: "vaporwave",
    description: "Makes text in the ｖａｐｏｒｗａｖｅ form",
    icon: "vz-plugin://icon.png",
    executor: args => { return {
        send: false,
        result: "jk no ｖａｐｏｒｗａｖｅ text"
    }}
}
```

#### Values

* `command ` String - Command's name
* `executor` Function(args) - Function that executes when the command is executed. It should return the [Executor's return value](#executors-return-value)
* `aliases` Array\<String> (optional) - Aliases that the developer can add for the command
* `icon` String (optional) - Command Icon. Can be an URL
* `description` String (optional) - Command's description
* `autocomplete` Function() (optional) - Function that returns all possible commands. It should return an object
* `subcommands` Array<[VizalitySubcommand](#VizalitySubcommand)> (optional) - [Subcommands](#VizalitySubcommand) for the command
* `options` Array<Object>
  * `name` String - Option's name
  * `required` Boolean (optional) - If it is required or not. Default is `false`
* `source` String (optional) - Source text to the right in the autocomplete
* `showTyping` Boolean (optional) - If it should show you when typing. Default is `false`
* `caller` String (optional) - Origin of where the command came from. Defailt is the addon's name



#### `VizalitySubcommand`

According to the revision that this documentation was written ([49f50da](https://github.com/vizality/vizality/commit/49f50dae19c6193e03f2f7d8e29c31e58059c6b6)), this feature wasn't added. But according to Vizality's JSDoc comments, it should be a thing for helping configuring plugin developers subcommands for their commands.

It should be used in that way:

```js
{
    command: "vaporwave"
    description: "Makes text in the ｖａｐｏｒｗａｖｅ form",
    icon: "vz-plugin://icon.png",
    executor: args => {return {send: false, result: "jk no ｖａｐｏｒｗａｖｅ text"}}},
    subcommand: [
        {
            command: "bruh"
            description: 'Says "bruh"',
            executor: args => {return {send: true, result: "bruh"}}}
        },
        {
            command: "yesnt"
            description: "Yesn't",
            executor: args => {return {send: false, result: "Yesn't"}}}
        }
    ]
}
```

##### Values

* `command` String - Subcommand's name
* `executor` Function() - Function that executes when the subcommand is executed
* `aliases` Array<String> (optional) - Aliases that the developer can add for the subcommand
* `icon` String (optional) - Subcommand icon. Can be an URL
* `description` String (optional) - Command's description
* `subcommand` Array<[Subcommand](#Subcommands)> (optional) - Subcommands for the subcommand
* `options` Array<Object> - Options for the subcommand
  * `name` String - Option's name
  * `required` Boolean (optional) - If it is required or not. Default is `false`

#### Executor's return value

You've probably noticed that there is a return value. Vizality will use that received value to send a message, either as a Bot Message or as real user message. Here it is a list of all values:

* `send` Boolean (optional) - If it should send as a Bot Message or as an user message. Default is `false`
* `result` String \| [Embed](#Embed) - The message content

###### Embed

Some plugins uses embeds for sending useful information in an organized way. Vizality also enhances embeds for allowing insertion of React components. Here it is one example of Vizality using that enhancement for displaying an table:

![](https://auser-have-some.yiff.services/d2FCca3.png)

The documentation according to [Discord's official API website](https://discord.com/developers/docs/resources/channel#embed-object) embed structure (modified, adding react components)

|     Name     |                         Description                          |                        Expected value                        |
| :----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|    title?    |                        title of embed                        |                  String \| React component                   |
|    type?     | [type of embed](https://discord.com/developers/docs/resources/channel#embed-object-embed-types) (always "rich" for webhook embeds) |                            String                            |
| description? |                     description of embed                     |                            String                            |
|     url?     |                         url of embed                         |                            String                            |
|  timestamp?  |                  timestamp of embed content                  |                      ISO8601 timestamp                       |
|    color?    |                   color code of the embed                    |                             Int                              |
|   footer?    |                      footer information                      | [embed footer](https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure) object |
|    image?    |                      image information                       | [embed image](https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure) object |
|  thumbnail?  |                    thumbnail information                     | [embed thumbnail](https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure) object |
|    video?    |                      video information                       | [embed video](https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure) object |
|  provider?   |                     provider information                     | [embed provider](https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure) object |
|   author?    |                      author information                      | [embed author](https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure) object |
|   fields?    |                      fields information                      | Array<[embed field](https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure) object> |

Embed footer structure: 

|      Name       |                        Description                         |      Expected value       |
| :-------------: | :--------------------------------------------------------: | :-----------------------: |
|      text       |                        footer text                         | String \| React Component |
|    icon_url?    | url of footer icon (only supports http(s) and attachments) |          String           |
| proxy_icon_url? |                a proxied url of footer icon                |          String           |

Embed image structure:

|    Name    |                         Description                         | Expected value |
| :--------: | :---------------------------------------------------------: | :------------: |
|    url?    | source url of image (only supports http(s) and attachments) |     String     |
| proxy_url? |                 a proxied url of the image                  |     String     |
|  height?   |                       height of image                       |      Int       |
|   width?   |                       width of image                        |      Int       |

Embed video structure: 

|    Name    |        Description         | Expected value |
| :--------: | :------------------------: | :------------: |
|    url?    |    source url of video     |     String     |
| proxy_url? | a proxied url of the video |     String     |
|  height?   |      height of video       |      Int       |
|   width?   |       width of video       |      Int       |

Embed video structure: 

| Name |   Description    |      Expected value       |
| :--: | :--------------: | :-----------------------: |
| name | name of provider | String \| React component |
| url? | url of provider  |          String           |

Embed footer structure: 

|  Name   |                   Description                   | Expected value |
| :-----: | :---------------------------------------------: | :------------: |
|  name   |                name of the field                |     String     |
|  value  |               value of the field                |     String     |
| inline? | whether or not this field should display inline |     String     |



## Functions

#### `getAllCommands()`

Returns an array with all commands

###### Usage

```js
vizality.api.commands.getAllCommands()
```

#### `getCommand(filter)`

Get an command by an filter

`filter` is a function that filters the command list

###### Usage

```js
vizality.api.commands.getCommand(filter)
```

###### Example

```js
vizality.api.commands.getCommand(m => m.command === "plugin") // command
```

#### `getCommandByName(commandName)`

Get an command by its name

`commandName` is the name of the module

###### Usage

```js
vizality.api.commands.getCommandByName(commandName)
```

###### Example

```js
vizality.api.commands.getCommandByName("theme") // command
```

#### `getCommands(filter)`

Searches commands by an filter

`filter` is a function that filters the command list

###### Usage

```js
vizality.api.commands.getCommands(filter)
```

###### Example

```js
vizality.api.commands.getCommands(x => x.command.includes("p")) // Array<command>
```

#### `getCommandsByCaller(addonId)`

Searches commands by an addon's ID

`addonId` is the addon's ID (a.k.a. its name)

###### Usage

```js
vizality.api.commands.getCommandsByCaller(addonId)
```

###### Example

```js
vizality.api.commands.getCommandsByCaller("addon-manager") // Array<command>
```

#### `hasSubcommands(commandName)`

Checks if command has [subcommands](#VizalitySubcommand)

`commandName` is command's name

###### Usage

```js
vizality.api.commands.hasSubcommands(commandName)
```

###### Example

```js
vizality.api.commands.hasSubcommands("plugin") // true
```

#### (async) `invokeCommand(commandName)`

Executes a command

`commandName` is command's name

###### Usage

```js
vizality.api.commands.invokeCommand(commandName)
```

###### Example

```js
vizality.api.commands.invokeCommand("relaunch")
```

#### `isCommand(commandName)`

Checks if a command actually exist

`commandName` is command's name

###### Usage

```js
vizality.api.commands.isCommand(commandName)
```

###### Examples

```js
vizality.api.commands.isCommand("bibality") // false
vizality.api.commands.isCommand("theme") // true
```

#### `prefix`

Logs Vizality's command prefix

###### Usage

```js
vizality.api.commands.prefix
```

###### Example

```js
vizality.api.commands.prefix // "."
```

#### `registerCommand(command)`

Register a command

`command` is [VizalityCommand](#VizalitySubcommand)

###### Usage

```js
vizality.api.commands.registerCommand(command)
```

###### Example

```js
vizality.api.commands.registerCommand({
    command: "cute",
    description: "makes stuff cutter uwu",
    icon: "vz-plugin://icon.png",
    executor: args => { return {
        send: true,
        result: ">w<"
    }}
})
```

###### `stop()`

Shuts down command API

###### Usage

```js
vizality.api.commands.stop()
```

#### `unregisterAllCommands()`

Unregisters all commands

###### Usage

```js
vizality.api.commands.unregisterAllCommands()
```

#### `unregisterCommand(commandName)`

Unregister a command

`commandName` is command's name

###### Usage

```js
vizality.api.commands.unregisterCommand(command)
```

###### Example

```js
vizality.api.commands.unregisterCommand("panic")
```

#### `unregisterCommandsByCaller(addonId)`

Unregister commands by an addon ID

`addonId` is the addon's ID (a.k.a. its name)

###### Usage

```js
vizality.api.commands.unregisterCommandsByCaller(addonId)
```

###### Example

```js
vizality.api.commands.unregisterCommandsByCaller("addon-manager")
```



## Deprecated/Non-functional functions

For now, there isn't any deprecated functions



## Removed functions

For now, there isn't any function that got removed



*`Edited at 07/05/2021`*