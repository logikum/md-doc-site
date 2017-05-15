<!-- ======================================================================
--- Search engine
title:          Special files
keywords:       special, content
description:    Special content files in md-site-engine.
--- Menu system
order:          60
text:           Special files
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

# Special files

There some special files in the `contents` directory.

### Menu node file

A subdirectory in the `contents` directory can represent a menu node in the
menu tree. The properties of the menu node can be set by a special file named
`__submenu.txt` placed in the mentioned subdirectory. The metadata contains the
menu system properties only:

```text
<!-- ======================================================================
--- Menu system
order:          123
text:           Menu item
hidden:         false
umbel:          false
======================================================================= -->
```

### Menu separator file

A menu separator is defined by a very similar file with the exception that this
is a markdown or HTML file.

```text
<!-- ======================================================================
--- Menu system
order:          99
text:           ---
hidden:         false
umbel:          false
======================================================================= -->
```

### URL rewrite file

URL rewrite can be set in a similar markdown or HTML file. Next to the menu
properties you need the `rewrite` property:

```text
<!-- ======================================================================
--- Menu system
order:          1
text:           Replaced content
hidden:         false
umbel:          false
--- Page properties
rewrite:        /new-path
======================================================================= -->
```
