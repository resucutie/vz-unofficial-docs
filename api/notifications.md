# Notifications

API for managing notifications



## `VizalityToast`

![](https://guys.i-have.fans/C4ED340.png)

The `VizalityToast` object is how Vizality actually interprets toasts. This is the code used in the example above:

```js
{
  header: 'Epic notification',
  content: 'I do some epic bowling',
  icon: {
    name: 'Bowling',
    size: 60
  },
  buttons: [
    {
      text: 'Whatever',
      color: 'red',
    },
    {
      text: 'Cool',
      color: 'green'
    }
  ]
}
```

And here is a table with all values:

|       Name       |                         Description                          |                  Expected value                  | Default value |
| :--------------: | :----------------------------------------------------------: | :----------------------------------------------: | :-----------: |
|       id?        |                           Toast ID                           |                      String                      |               |
| showCloseButton? |                  Shows toast's close button                  |                     Boolean                      |     true      |
|      icon?       |                     Toast icon / image.                      | String (Discord Icon) \| [ToastIcon](#ToastIcon) |               |
|    autoClose?    | Either the duration in milliseconds until the toast auto-closes, or a boolean of whether it should auto-close.<br />This overrides the default user setting on a per-toast basis. |                Number \| Boolean                 |     false     |
|      header      |                         Toast header                         |              String \| ReactElement              |               |
|     content?     |                        Toast content                         |              String \| ReactElement              |               |
|     buttons?     |                        Toast buttons                         |        Array<[ToastButton](#ToastButton)>        |               |
|     timeout?     |                                                              |                      Number                      |               |
|      delay?      |           Delay toast appearing (in milliseconds)            |                      Number                      |               |
|    callback?     |           Function triggered when the toast closes           |                    Function()                    |               |
|     caller?      | Addon ID of toast sender. This property is set automatically. |                      String                      |               |



#### `ToastIcon`

This is another object where it says to Vizality how it will render the icon of the toast. Here it is all vallues:

|  Name  |     Description     |    Expected value     | Default value  |
| :----: | :-----------------: | :-------------------: | :------------: |
| name?  |      Icon name      | String (Discord Icon) |  'InfoFilled'  |
| size?  | Icon size in pixels |        Number         |       40       |
|  url?  |  Icon external URL  |          URL          |                |
| color? |     Icon color      |        string         | 'currentColor' |



#### `ToastButton`

This is another object where it says to Vizality how it will render the button inside the toast. Here it is all vallues:

|   Name   |        Description         | Expected value |        Default value         |
| :------: | :------------------------: | :------------: | :--------------------------: |
|  size?   |        Button size         |     String     |           'small'            |
|  look?   |     Button appearance      |     String     |           'filled'           |
| 'color?' |        Button color        |     String     |           'brand'            |
| onClick? | Function executed on click |   Function()   | Closes the toast by default. |
|   text   |        Button text         |     String     |                              |



## `VizalityNotice`

![](https://auser-have-some.viruses-to.download/Fa549d5.png)

The `VizalityNotice` object is how Vizality actually interprets notices. This is the code used in the example above:

```js
{
  message: "pie",
  color: "BLURPLE_GRADIENT_2",
  buttons: [
      {
        text: "cool",
        onClick: ()=> vizality.api.notifications.closeAllActiveToasts()
      }
  ]
}
```

And here is a table with all values:

|   Name    |                         Description                          |            Expected value            | Default value |
| :-------: | :----------------------------------------------------------: | :----------------------------------: | :-----------: |
|    id?    |                          Notice ID                           |                String                |               |
|  message  |                       Notice's message                       |                String                |               |
|  color?   | Notice's color. Available colors: `"BLURPLE"`, `"RED"`, `"ORANGE"`, `"BLUE"`, `"GREY"`, `"DARK_GREY"`, `"GREEN"`, `"BLURPLE_GRADIENT_1"`, `"BLURPLE_GRADIENT_2"`, `"SPOTIFY"`, `"PURPLE"` |                String                |   "BLURPLE"   |
| callback? |          Function triggered when the notices closes          |              Function()              |               |
|  buttons  |                        Notice buttons                        | Array<[NoticeButton](#NoticeButton)> |               |
|  caller?  | Addon ID of notice sender. This property is set automatically. |                String                |               |



#### `NoticeButton`

This is another object where it says to Vizality how it will render the button inside the notice. Here it is all vallues:

|   Name   |        Description         | Expected value |        Default value         |
| :------: | :------------------------: | :------------: | :--------------------------: |
|   text   |        Button text         |     String     |                              |
| onClick? | Function executed on click |   Function()   | Closes the toast by default. |

