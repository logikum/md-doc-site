<!-- ======================================================================
--- Search engine
title:          Markdown tables
keywords:       markdown, tables
description:    Markdown tables in md-site-engine.
--- Menu system
order:          70
text:           Tables
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
--- Side menu
side-menu-root:     /markdown
side-menu-header:   Markdown help
side-menu-top:      
side-menu-depth:    1
======================================================================= -->

# Tables

Tables aren't part of the core markdown specification, but they are part
of GFM and [marked] supports them. They are an easy way of adding tables
to your email -- a task that would otherwise require copy-pasting from
another application.

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<p> </p>

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<p> </p>
