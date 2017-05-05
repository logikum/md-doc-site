<!-- ======================================================================
--- Search engine
title:          Components
keywords:       components
description:    Components in md-site-engine.
--- Menu system
order:          30
text:           Components
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

# Components

The components are additional files that help to compose web pages. They
include segments, documents, layouts, references and locales. The components are
placed in a __/components__ directory. The location of the directory can be set
in the [configuration]. 

The segment files are small building blocks that can be inserted into contents
or other segments. They can be used to hold repeating information, or separate
concerns. For details see the [Segment files] page.

The document file is a special segment file. Its primary role to create the
outer mandatory parts of an HTML document. A site usually has one document file,
however, it can have more if necessary. See [Document files] page for more
information.

The layout file are another sort of segment file. It can be found inside the
body pat of the HTML document, and it creates the shape of pages. A site can
have one more layout files depending on the design. For more information see the
[Layout files] page.

> When the engine builds a page, it takes a document file first. Then gets the
appropriate layout file and places into the document. Finally finds the
requested content and inserts into the layout. If the document, the layout and
content have segments, they are inserted as well.

The places of the segments in other components are marked with the name of the
segment surrounded by double braces and optional spaces (`{{ob}}{ name }}`).
A segment name can contains alphanumeric and minus characters only. Static
segments are inserted into their places at the start of the site. A segment is
marked as static by a leading equal sign (`=`) before its name. Normal segments
are counted as dynamic ones, and their contents are inserted at rendering the
page. An example for marking segment places:

```markdown
This line contains an {{ob}}{ inline }} segment. The next section comes from
another segment.

{{ob}}{ list-of-options }}

The information is always closed by a static segment:

{{ob}}{ =copyright }}
```

Markdown has a feature called reference-style links. These reference links can
be gathered at the end of the document. If some reference links are used
frequently on the pages, it is practical to place them into a reference file,
and automatically stick to the end of the content and segment files. For details
see the [Reference files] page.

Controls can add some dynamic functionality to the static site. Controls are
language independent, however, sometimes they require localized resources,
usually texts. These resources can be stored in locale files. For more information
see the [Locale files] page.
