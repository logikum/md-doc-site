<!-- ======================================================================
--- Search engine
title:          Development support
keywords:       development, support
description:    Development support in md-site-engine.
--- Menu system
order:          100
text:           Development support
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

# Development support

After the application has been started the engine reads and processes all
resources in the site and stores them in a content manager object. The contents
of this object can be examined at the following URL (which can be set in the
[configuration]):

#### http://localhost:port/r&d

> The resource view is available only when the value of the Node.js environment
  is **'development'**.

The following menu is shown:

**Resources**

* Languages
* Documents
    * Document details
* Layouts
    * Layout details
* Segments
    * Segment details
* Contents
    * Content details
* Menus
    * Menu details
* Locales
* References
    * Reference details
* Controls
    * Control details
