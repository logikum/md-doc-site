<!-- ======================================================================
--- Search engine
title:          Layout files
keywords:       layout file
description:    Layout files in md-site-engine.
--- Menu system
order:          30
text:           Layout files
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

# Layout files

A layout file is a special segment file that composes the shape of a web page.
A layout file has __.html__ extension, and the default name is `layout.html`.
The name of the default layout file can be set in the [configuration]. The layout
files belong to the `/components`. A site must have a default layout file, that
is achievable in two ways:

1. There is a layout file in the root of the components directory.
2. There is a layout file in each language directories of the components
   directory.

If there is a layout file in the root directory and another with same name in
a language directory, then the language specific one is used. A layout file
differs from the segment files in one thing only:

> The layout file has a content segment (`{{ob}}{ content }}`).

The layout file used rendering a page can be overwritten in the metadata of the
content. A simple layout file can look like this:

```html
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">{{ob}}{ =brand }}</a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse-menu">
          {{ob}}{ #bootstrap-navbar }}
        </div>
      </div>
    </div>
  </div>
</nav>

<div class="container-fluid">
  <div class="col-lg-12 col-md-12 col-sm-12">
    {{ob}}{ content }}
  </div>
</div>
```

The example displays a simplified [Bootstrap] navigation bar also.