# meteor-lispy

TOY PROJECT FOR NOW

Add to [Meteor](http://meteor.com) support for the [Lispyscript language](http://lispyscript.com).

## Install

`mrt add meteor-lispy`

For now, Lipyscript needs to be hacked a little do work. In the file 
`path-to-the-app/packages/.npm/node_modules/lispyscript/lib/ls.js`

you need to comment out the fisrt line of code:
`define(['require', 'exports', 'module', 'underscore'], function(require, exports, module, _) {`

and the last line:
`})`

This is because meteor can't find a definition for the 'define' function.
This use of define being suppressed in the next version of lispyscript,
I'll update the package and I'll be able to remove the 'TOY PROJECT' mention...

## Why ?

Javascript has its flaws, Coffescript syntax confuses me (sorry I am one of thoses...) and I am a big fan
of [Clojure](http://clojure.org) and [ClojureScript](https://github.com/clojure/clojurescript). 
Since [ClojureScript](https://github.com/clojure/clojurescript) is stil a bit cumbersome to use 
with [Meteor](http://meteor.com), here comes [Lispyscript](http://lispyscript.com) !