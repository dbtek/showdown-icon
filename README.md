Showdown Icon Extension
=======================

Glyphicon and font-awesome support in Markdown for Showdown.js

## Install
```bower install showdown-icon```

## Usage
```
<script src="showdown.js" />
<script src="showdown-icon/showdown-icon.js" />
```

```
var converter = new Showdown.converter({ extensions: ['icon'] });
alert(converter.makeHtml('@glyphicon-envelope'));
alert(converter.makeHtml('@fa-home'));
```