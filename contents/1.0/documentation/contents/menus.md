<!-- ======================================================================
--- Search engine
title:          Menu system
keywords:       menu
description:    Menu system in md-site-engine.
--- Menu system
order:          40
text:           Menu system
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

# Menu system

The engine builds an object tree based on the structure of the content files and
the metada of the contents. The nodes in the tree represent the subdirectories.
The properties of a subdirectory can be set in a special file named
`__submenu.txt` placed in the subdirectory. The properties of the tree elements
hold the following information:

Property&nbsp;name | Data type | Description
--------------|-----------|-------------
id | number | unique identifier
text | string | The text of the menu element (from metadata).
order | number | The order of the menu item (from metadata).
hidden | Boolean | Indicates whether the menu element is shown (from metadata).
paths (I) | <span style="white-space: nowrap">Array.&lt;string></span> | The the paths of the menu item.
umbel (I) | Boolean | Indicates whether the menu item is umbrella for more items (from metadata).
path (N) | string | The the path of the menu node.
children (N) | MenuStock | The child items of the menu node.

_I = on menu items only, N = on menu nodes only_

Both menu elements have a method:

#### isActive( url )

Takes the current path string, and returns `true` when `url` equals to the path
of the node or any path of the item, or the `umbel` property of the item is
`true` and the shortest path of the item matches to the beginning of the current
path; otherwise returns `false`.

The menu tree is available on the context, and it can be used to build menus in
controls. The `md-site-engine`  module comes with two built-in menu:
`bootstrap-navbar` and `side-menu`.

### bootstrap-navbar

This control provides a Bootstrap style navigation bar like on this page, except
of the brand. The requirements of the control are the same as of []Bootstrap]:
`bootstrap.css`, `bootstrap.js` and `jquery.js`. The language selector appears
when the application supports more languages. The search field is also optional,
for details see the [Content search page.] Complete examples can be found in the
source of the seed and demo applications, and in the source of this documentation
site, respectively.

### side-menu

This control generates a multi-level link list, as it can be seen on this page
as well. The control is configured in the metadata of all pages included:

```text
<!-- ======================================================================
    ...
--- Side menu
side-menu-root:     /documentation
side-menu-header:   Documentation
side-menu-top:      Introduction
side-menu-depth:    2
    ...
======================================================================= -->
```

`side-menu-root` defines the element of the menu tree which child items will
make up the menu of - so it has to be node. `side-menu-header` is the locale key
of an optional title for the side menu. If the locale is not found, the value
will be the title. `side-menu-top` indicates that the root menu will be added as
the first item to the side menu. The value is the locale key of the text of the
menu item. If the locale is not found, the value will be the menu text.
`side-menu-depth` gives the number of the levels in the menu tree used to
generate the side menu.

By definition the menu nodes are defined by subdirectories, meanwhile the side
menu apparently has nodes that are items the same time. To achieve this, the
site uses the trick, that it has a content file and a directory with the same
name (the latter obviously without the the extension), and the directory is
marked hidden in the metadata. This trick hides the subdirectory in the
navigation bar as well.

For an example see the source of this documentation site.