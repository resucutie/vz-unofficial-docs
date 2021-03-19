# Commands

API for managing commands



## `Command` Object

The `Command` object is how Vizality actually reads commands. This is an example of an command object:

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

This is an table with all possible values in the `Command` object:

|     Name      |                         Description                          |          Expected value           |  Default value   |
| :-----------: | :----------------------------------------------------------: | :-------------------------------: | :--------------: |
|    command    |                        Command's name                        |              String               |                  |
|   executor    |     Function that executes when the command is executed      |             Function              |                  |
|   aliases?    |      Aliases that the developer can add for the command      |          Array\<String>           |                  |
|     icon?     |                 Command Icon. Can be an URL                  |              String               |                  |
| description?  |                    Command's description                     |              String               |                  |
| autocomplete? |         Function that returns all possible commands          |    Function (returning object)    |                  |
| subcommands?  |         [Subcommands](#Subcommands) for the command          | Array<[Subcommand](#Subcommands)> |                  |
|   options?    |                   Options for the command                    |    Array<[Options](#Options)>     |                  |
|    source?    | According to command's JSDoc, it will be the source text to the right in the autocomplete. |              String               |                  |
|  showTyping?  |              If it should show you when typing               |              Boolean              |      false       |
|    caller?    |            Origin of where the command came from             |              String               | *(addon's name)* |

#### Options

All options for the command. Here it is what actually means:

![](https://auser-got-your.censored.pictures/AE5a39f.png)

###### Expected values

It should return an object. This is an example of what should return:

```js
{
    name: "hi",
    required: true
}
```

And a table with all available values:

|   Name    |       Description        | Expected value | Default value |
| :-------: | :----------------------: | :------------: | :-----------: |
|   name    |      Option's name       |     String     |               |
| required? | If it is required or not |    Boolean     |     false     |

#### Subcommands

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

And a table of how all listed possible values

|     Name     |                      Description                       |          Expected value           | Default value |
| :----------: | :----------------------------------------------------: | :-------------------------------: | :-----------: |
|   command    |                   Subcommand's name                    |              String               |               |
|   executor   | Function that executes when the subcommand is executed |             Function              |               |
|   aliases?   | Aliases that the developer can add for the subcommand  |          Array\<String>           |               |
|    icon?     |             Subcommand icon. Can be an URL             |              String               |               |
| description? |                 Command's description                  |              String               |               |
| subcommand?  |     [Subcommands](#Subcommands) for the subcommand     | Array<[Subcommand](#Subcommands)> |               |
|   options?   |               Options for the subcommand               |    Array<[Options](#Options)>     |               |

#### Executor's return value

You've probably noticed that there is a return value. Vizality will use that received value to send a message, either as a Bot Message or as real user message. Here it is a table of all possible values:

|  Name  |                       Description                        |      Expected value       | Default value |
| :----: | :------------------------------------------------------: | :-----------------------: | :-----------: |
| send?  | If it should send as a Bot Message or as an user message |          Boolean          |     false     |
| result |                   The message content                    | String \| [Embed](#Embed) |               |

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

Checks if command has [subcommands](#Subcommands)

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

`command` is [Command's object](#command-object)

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



*`Edited at 19/03/2021`*