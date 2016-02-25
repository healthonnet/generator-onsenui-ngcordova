# generator-onsenui-ngcordova 

> A Yeoman Generator to Scaffold an [OnsenUI](http://onsenui.io/) [ngCordova](http://ngcordova.com) app
> Based on a Fork of [arvindr21](https://github.com/arvindr21)'s project [generator-onsenui-phonegap](https://github.com/arvindr21/generator-onsenui-phonegap) and adapted to add ngCordova.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-onsenui-ngcordova from npm, run:

```bash
$ npm install -g generator-onsenui-ngcordova
```

Finally, initiate the generator:

```bash
$ yo onsenui-ngcordova
```

You can select and install all [cordova plugins supported by ngCordova](http://ngcordova.com/docs/plugins/) !

You can pick from one of the 5 available [templates](http://onsenui.io/guide/getting_started.html#template)

* Minimum
* Sliding Menu
* Tab bar
* Master-Detail
* Split View

Once you select a template, Yeoman will scaffold an `onsenui-ngcordova` app for you.

### Run the App

To run the Onsenui ngCordova app in your browser, execute

```bash
$ grunt
```

This will start a server at port `1881`. Navigate to `http://localhost:1881` to see the app running.

_Note: When you open the browser, you will find `cordova.js` as a 404 resource. This will be resolved, when you issue a PhoneGap build._

### TODO
* [ ] Grunt task - lint js/css
* [ ] Grunt task - build generation
* [ ] Generate updated cordova (6+) project 

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
