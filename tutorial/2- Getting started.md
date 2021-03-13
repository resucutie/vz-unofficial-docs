# Getting started

Before starting, we need to know some requirements to make a plugin:

1- A nice editor (We recommend using [Visual Studio Code](https://code.visualstudio.com/), since this is the best and most powerful text editor focused on programming)

2- Basic undestanding about JavaScript (You can learn the basics of JS [here][https://www.javascript.com/learn/strings] if you're already a developer but not familiar with the language)

3- Vizality installed (duh)

4- Git

If you already have all of those things installed in your computer, so you're ready to go!



### Vizality Snippets

Just kidding, we need to do one simple thing before really start with it. This one is optional, but we'll use it during the tutorial. There is a developer tool called vizality-snippets, that gives to you some samples of code to just type and get templates. To get it, we need to open Visual Studio Code and go to the Extensions tab:

![img](http://auser-dont-get-out-of-his-home-so-hell-never-get.c0ronavir.us/95A0Cdc.png)

Then we search for vizality-snippets and hit "Install"

![img](http://auser.already-masturbated-3-times.today/3fb1FC0.png)

Okay, now we're really done to start our adventure



### Creating our first plugin

To start our *magical* adventure, open you prefered file manager and open your vizality folder, then open the `addons` folder, then `plugins`, and make a new folder in there. You can put to the folder whatever name you want. I'll put mine as `my-nice-plugin`

![img](https://auser-have-some.yiff.services/74B23af.png)

The next part will be explaining on how to setup `git`. If you wanna use Github Desktop for it, you can do that without problems.

#### Setuping git

Open the folder in your terminal. This will be for setuping `git`, a tool for developers that helps with versioning multiple files. Pretty used for projects with more than one people, and for updating programs itself. Yes, vizality actually uses `git`, specifically for its updater. Well, lets stop talking and type some commands.

The first command that you should type is `git init`, to start a repository

![img](https://auser.already-masturbated-3-times.today/dBC25Ec.png)

Then, meanwhile you make edits to the project, it'll be recommended that you make a commit. And how you do that? By this:

```bash
git add .
git commit -m "My Nice commit"
```

For example, if you fix a typo on your plugin and you wanna make a commit, that would be the result

```bash
git add .
git commit -m "Fix typo"
```

And to share for public, you type

```bash
git push
```

But for now you can't do that, because you didn't setuped git for where to push it, if it will be on GitHub on a repo, if it will be on GitLab, *etc.* Well, don't worry about that for now, as this will be setuped later



#### Making the basics

Well, to really start setup things, you must need to add a manifest, so Vizality will know that it is really a plugin, and not a bunch of useless stuff. First, we open the folder in Code

![img](https://auser-have-some.yiff.services/FE1c4da.png)

Then right click on the explorer tab, and then create a file called `manifest.json`

![img](https://auser.ipgrabber.link/CD2AbB5.png)

In there, we'll add some basic information, like the name of the plugin, version, etc. Resume: paste this and edit as you like

```json
{
  "name": "My nice plugin",
  "version": "1.0.0",
  "description": "Epic description",
  "author": "Incredible author name",
  "license": "Wow license"
}
```

Then we'll create a file called `index.js`. This will be where our magical programming would will start.

![img](https://auser-have-some.yiff.services/0ADEfcb.png)

Well, it is an empty file, so there isn't any code in there. Lets add the basic of everything by typing `vz-plugin` and hitting enter. Or just paste this:

```js
import { Plugin } from '@vizality/entities';

export default class MyNicePlugin extends Plugin {
    start () {
        
    }

    stop () {
         
    }
}
```

Don't forget to hit `CTRL` + `S` to save your progress

Also hit `Ctrl` + `R` on discord's window

![gif](https://imagine-having.homo.services/b04210F.gif)

Speaking of reloading discord, lets enable some settings in Vizality. Go to the Vizality Dashboard, then go to Settings, then open Advanced Settings, and enable the first two options

![img](https://auser-dont-get-out-of-his-home-so-hell-never-get.c0ronavir.us/E87CD97.png)

The first one will enable an essential development tool for making plugins: the React Developer Tools, useful for patching components, where we'll learn how to do in future. The other reloads plugins if an edit to its code is made, useful since we'll not need to hit `Ctrl` + `R` every time that we make a change on our plugin.

By now you can go to the plugins section and see your plugin in there

![img](https://auser.already-masturbated-3-times.today/1C4C7Dc.png)

Hooray! We have our first plugin.

Well, you'll see that there is a lot of plugins that have an icon. This is a key that can be added to the `manifest.json` that adds an icon:

```json
"icon": "path/to/icon",
```

