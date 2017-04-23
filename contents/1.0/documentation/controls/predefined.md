<!-- ======================================================================
--- Search engine
title:          Predefined controls
keywords:       predefined, control
description:    Predefined controls in md-site-engine.
--- Menu system
order:          20
text:           Predefined controls
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

# Predefined controls in the engine

The markdown site engine comes with the following built-in controls:

* language
* title
* description
* keywords
* bootstrap-navbar
* side-menu
* control-search-button
* search-phrase
* search-results

### language

Returns the current language. Its typical usage in a document file:

```html
<!DOCTYPE html>
<html>
  <head lang="{{ob}}{ #language }}">
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### title

Returns the title metadata of the current content. Its typical usage in a
document file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{{ob}}{ #title }}</title>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### description

Returns the description metadata of the current content. Its typical usage in a
document file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="description" content="{{ob}}{ #description }}" />
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### keywords

Returns the keywords metadata of the current content. Its typical usage in a
document file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="keywords" content="{{ob}}{ #keywords }}" />
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### bootstrap-navbar

Returns a Bootstrap version 3 style navigation bar. An example cab be seen on
this site. For more information see the [Menu system] page and the [Bootstrap]
site. Its typical usage in a layout file:

```html
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  ...
    <div class="collapse navbar-collapse" id="navbar-collapse-menu">
      {{ob}}{ #bootstrap-navbar }}
    </div><!-- /.navbar-collapse -->
  ...
</nav>
```

### side-menu

Returns a vertical list like a table of contents. An example cab be seen on this
site. For more information see the [Menu system] page. Its typical usage in a
layout file:

```html
<div class="content">
  ...
  <div class="col-lg-3 col-md-3 col-sm-3">
    {{ob}}{ #side-menu }}
  </div>
  <div class="col-lg-9 col-md-9 col-sm-9">
    {{ob}}{ content }}
  </div>
  ...
</div>
```

### control-search-button

Returns a client side JavaScript routine that supports content search. For more
information see [Content search].Its typical usage in a document file:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    {{ #code-csb }}
  </body>
</html>
```

### search-phrase, search-results

The search-`phrase control` returns the text to search and the `search-results`
control returns a list of the contents that contain the search phrase. For more
information see [Content search]. Its typical usage in a special content file
(`/search`):

```html
<div class="search-phrase">Text to search: {{ob}}{ #search-phrase }}</div>

{{ob}}{ #search-results }}
```

