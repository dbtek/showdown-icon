Showdown Icon Extension
=======================

Glyphicon and font-awesome support in Markdown for Showdown.js

Generates ```<span class="glyphicon glyphicon-home"></span>``` with ```@glyphicon-home```,
and ```<i class="fa fa-home"></i>``` with ```@fa-home```.


## Install
With NPM:  
```
 $ npm install --save showdown-icon
```

With Bower:  
```
 $ bower install showdown-icon
```

## Usage
```js
var converter = new Showdown.converter({ extensions: ['icon'] });
alert(converter.makeHtml('@glyphicon-envelope'));
alert(converter.makeHtml('@fa-home'));
```
