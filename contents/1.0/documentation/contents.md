<!-- ======================================================================
--- Search engine
title:          Content files
keywords:       content file
description:    Content files in md-site-engine.
--- Menu system
order:          20
text:           Content files
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

# Content files

The content files contain the information to be displayed on the web pages.
A content file corresponds to a web page, however, the creation of the page
requires some other components, at least a document and a layout file.

The content files can be markdown or HTML files. The markdown files are simple
text files that use easy to remember markups to generate HTML formatted content
from the text file. For details see [Markdown syntax]. According to that the
content files can have __.md__ and __.html__ extensions. The content files take
place in a `/contents` directory. The location of the directory can be set in
the [configuration].

> The root directory of the contents do not contain content files!

The subdirectories of the root content directory define the languages the engine
support. If there are more `language` directories, the navigation bar displays a
dropdown menu to select the current language. The default language can be set in
the [configuration]. The `language` directories can also have subdirectories,
that can appear as dropdown menus in the navigation bar.

```text
/contents
    /language-A
        content-1.md
        content-2.md
        /subdir-a
            content-3.md
        ...
    /language-B
        content-4.md
        content-5.md
        /subdir-b
            content-6.md
        ...
```

Usually some additional information is also required to compose a web page.
These information called metadata have to be placed at the beginning of the
content files. The format and the properties of metadata are detailed on the
[Content metadata] page.

### Tokens

The content files can contain other components. For details see the [Components]
page. The places of the components are marked with the name of the component
surrounded by double braces and optional spaces (`{{ob}}{ name }}`) - these are
called tokens. The following table lists the types of the tokens:

| Markup | Token type | For more information click |
| ------ | ---------- | -------------------------- |
| {{ob}}{ name }} | segment, document or layout | [Segment files], [Document files], [Layout files] |
| {{ob}}{ =name }} | static segment | [Segment files] |
| {{ob}}{ #name }} | control | [Controls] |
| {{ob}}{ .name }} | context data | [Actions] |

<div>&nbsp;</div>
