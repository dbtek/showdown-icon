Showdown Icon Extension
=======================

Glyphicon and font-awesome support in Markdown for Showdown.js

Generates ```<span class="glyphicon glyphicon-home"></span>``` with ```@glyphicon-home```,   
and ```<i class="fa fa-home"></i>``` with ```@fa-home```.


## Install
```bower install showdown-icon```

## Usage
```html
<script src="showdown.js" />
<script src="showdown-icon/showdown-icon.js" />
```

```js
var converter = new Showdown.converter({ extensions: ['icon'] });
alert(converter.makeHtml('@glyphicon-envelope'));
alert(converter.makeHtml('@fa-home'));
```
