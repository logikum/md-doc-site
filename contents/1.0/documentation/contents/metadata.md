<!-- ======================================================================
--- Search engine
title:          Content metadata
keywords:       content, metadata
description:    Content metadata in md-site-engine.
--- Menu system
order:          20
text:           Content metadata
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

# Content metadata

The metadata provide additional information for the content that are used to
compose a web page. These data help to create menus, determine the layout of the
web page or optimize the search engines of the Internet. The metadata have to be
at the beginning of the content file enclosed in a HTML comment.

For example the metadata of this page looks like this:

```text
<!-- ======================================================================
--- Search engine
title:          Content metadata
keywords:       content, metadata
description:    Content metadata in md-site-engine.
--- Menu system
order:          20
text:           Content metadata
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
rewrite:        
--- Side menu
side-menu-root:     /documentation
side-menu-header:   Documentation
side-menu-top:      Introduction
side-menu-depth:    2
======================================================================= -->
```

The lines containing the opening (`<!--`) and the closing (`-->`) of the HTML
comment are ignored, just like the lines starting with three dashes (`---`). All
other lines must be follow this format: `propertyName` `:` `value`. The engine
uses those properties displayed in the example, however, the metadata can
expanded by any user defined properties to use in custom controls and actions.

### Search engine properties

These properties are used to provide metadata for the HTML document, and are
typically used by search engines of the Internet.

#### title

Type: `string` Default value: `''`

The value of the `<title>` tag in the header of the HTML document, i.e. the
title of the web page.

#### keywords

Type: `string` Default value: `''`

The value of the `<meta>` tag named `keywords` in the header of the HTML
document. It is used to describe the content of the web page by enumerating the
most specific phrases.

#### description

Type: `string` Default value: `''`

The value of the `<meta>` tag named `description` in the header of the HTML
document. It is used to describe the content of the web page by a short sentence.

### Menu system properties

The engine builds an object tree based on the content files and the structure of
the contents directory. The particular objects can be extended by these
properties. The engine uses this object tree to generate menus when renders
pages. There is two predefined controls for that purpose: `bootstrap-navbar` and
`side-menu`. For mpre information see [Menu system].

#### order

Type: `number` Default value: `0`

The order of the menu item in a menu.

#### text

Type: `string` Default value: `''`

The text of the menu item in a menu. Use cases:

| Value | Result |
| --- | --- |
| (empty) | the page (content) is skipped - no menu item is generated |
| --- | a menu separation item is generated |
| any other string | menu item is generated for the page (content) |


#### hidden

Type: `Boolean` Default value: `false`

When the value is `true`, no menu item is generated - even if the `text`
property has value.

#### umbel

Type: `Boolean` Default value: `false`

When the value is `true`, the menu item is counted active if the beginning of
the path of the current page equals to the path of the menu item. In other words
this menu item is an umbrella for those sub-pages that are not shown in the menu.

### Page properties

The page properties help to customize the layout and/or the content fragments of
the web page.

#### id

Type: `string` Default value: `'<path>'`

The identifier of the content, it defaults to the path. In the `language`
directories the same content files can have different names, so they will have
different paths. If we want to bind the the same files we have to set the
identifiers of the matching contents to the same value. A practical solution is
to use the path of the content of the default language. In that case when the
user changes language he or she lands on the same web page localized in the
selected language.

#### document

Type: `string` Default value: `''`

The name of document segment that the engine uses to render the web page. When
it is not set, the engine uses the default document set in the [configuration].

#### layout

Type: `string` Default value: `''`

The name of layout segment that the engine uses to render the web page. When
it is not set, the engine uses the default layout set in the [configuration].

#### segment-&lt;name> _--or--_ $-&lt;name>

Type: `string` Default value: `''`

The segment with the indicated name should be replaced by the segment set in the
value. This can be useful for example to alternate the contents of segments
defined by the layout files.

#### searchable

Type: `Boolean` Default value: `true`

When the value is `false`, the content search skips the given content.

#### rewrite

Type: `string` Default value: `''`

When the rewrite property is defined, the engine makes an inner URL rewrite
using the value of the property. The value has to be the path of o content file,
and the web page will displaz that content.

### Side menu properties

These properties are used by the `side-menu` control. For details see [Menu system].

#### side-menu-root

Type: `string` Default value: `''` Required.

The path of the object in the menu tree which child items will be in the menu.
For that reason the object has to be a menu node.

#### side-menu-header

Type: `string` Default value: `''`

The locale key of an optional title for the side menu. If the locale is not
found, the value will be the title.

#### side-menu-top

Type: `string` Default value: `''`

If defined the root menu will be added as the first item to the side menu. The
value is the locale key of the text of the menu item. If the locale is not
found, the value will be the menu text.

#### side-menu-depth

Type: `number` Default value: `1`

The number of the levels in the menu tree used to generate the side menu.
