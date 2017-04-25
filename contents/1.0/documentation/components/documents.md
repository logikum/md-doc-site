<!-- ======================================================================
--- Search engine
title:          Document files
keywords:       document file
description:    Document files in md-site-engine.
--- Menu system
order:          20
text:           Document files
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

# Document files

A document file is a special segment file that creates the mandatory parts of an
HTML document. A document file has __.html__ extension, and the default name is
`document.html`. The name of the default document file can be set in the
[configuration]. The document files belong to the components. A site must have a
default document file, that is achievable in two ways:

1. There is a document file in the root of the components directory.
2. There is a document file in each language directories of the components
   directory.

If there is a document file in the root directory and in the language directory,
then the language specific one is used. A document file differs from the segment
files in one thing only:

> The document file has a layout segment (`{{ob}}{ layout }}`).

The document file used rendering a page can be overwritten in the metadata of
the content. A simple document file can look like this:

```html
<!DOCTYPE html>
<html>
<head lang="{{ob}}{ #language }}">
  <meta charset="UTF-8" />
  <title>{{ob}}{ #title }}</title>
  <meta name="description" content="{{ob}}{ #description }}" />
  <meta name="keywords" content="{{ob}}{ #keywords }}" />
  <link rel="stylesheet" href="..." />
</head>
<body>

{{ob}}{ layout }}

<script src="...>

</body>
</html>
```

The example shows some controls, too.