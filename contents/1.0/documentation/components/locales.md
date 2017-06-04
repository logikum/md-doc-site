<!-- ======================================================================
--- Search engine
title:          Locale files
keywords:       locale file
description:    Locale files in md-site-engine.
--- Menu system
order:          50
text:           Locale files
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /documentation
side-menu-header:   Documentation
side-menu-top:      Introduction
side-menu-depth:    2
======================================================================= -->

# Locale files

The locale files can contain the localizable resources of controls. A locale
file is a standard JSON file and has __.json__ extension. The default name is
`default.json`, but it can have any name. The name of the default locale file
can be set in the [configuration]. The locale files belong to the `/components`.
By nature the locale files are located in the language directories.

The following example shows an English locale file with the resources required
by the engine (in case of using predefined controls and search functionality):

```json
{
  "title": "[md-site-engine]",
  "keywords": "markdown, md-site-engine",
  "searchHint": "Search for...",
  "noSearchPhrase": "There is nothing to search.",
  "noSearchResult": "Search has not found matching content."
}
```

The locale values are available by the `translate( key, defaultValue )` or
`t( key, defaultValue )` functions of the controls' context using the keys
of the locales:
 
 ```javascript
function control( ctx ) {
  // ...
  var title = ctx.translate( 'title', 'The Beauty of the World' );
  var msg = ctx.t( 'noSearchResult' );
  // ...
}
```

If the name of the locale file is `tiger.json`, i.e. not the default name,
the locale values can be accessed by adding the filename without the extension
to the key:

 ```javascript
function control( ctx ) {
  // ...
  var title = ctx.translate( 'tiger.title' );
  var msg = ctx.t( 'tiger.noSearchResult' );
  // ...
}
```

The locale files can be placed in subdirectories as well. In that case the
values of the 'rivers/default.json' files can be gotten using the directory
name:

 ```javascript
function control( ctx ) {
  // ...
  var title = ctx.translate( 'rivers.title' );
  var msg = ctx.t( 'rivers.noSearchResult' );
  // ...
}
```

Finally using the 'rivers/nile.json' locale file the values can be taken
with both the directory name and the filename:

 ```javascript
function control( ctx ) {
  // ...
  var title = ctx.translate( 'rivers.nile.title' );
  var msg = ctx.t( 'rivers.nile.noSearchResult' );
  // ...
}
```

> **Caution!** Using both `tiger.json` and `tiger/default.json` locale files,
the values are overwritten by each other if the files has matching keys!
