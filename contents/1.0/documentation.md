<!-- ======================================================================
--- Search engine
title:          Introduction
keywords:       introduction
description:    Introduction to the documentation of md-site-engine.
--- Menu system
order:          20
text:           Documentation
hidden:         false
umbel:          true
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

# Introduction

The `md-site-engine` is a tool to quickly build Node.js based websites from
markdown files. The engine is not appropriate for any web site, however, it is
very usable for text dominated static web sites. Web site building consists of
two main steps: first we have to create a skeleton, then we can produce the
contents.

The web site skeleton is an HTML wrapper for the contents. It ensures that the
engine generate valid HTML documents from the content markdown files. The
skeleton is usually built from an HTML document wrapper called document file,
one or more layout files that ensure the appearance of the web pages, some
components to fill in the plaxes on the web pages, and the usual web stuff -
style sheets, scripts, images and other media files. In summary, the skeleton is
covered by standard web site files. Details can found in the [Components]
section.

The contents consist of markdown files, or optionally HTML files. They are
grouped by languages. The directory structure of the content files, and the
metadata placed in the beginning of the files are used to generate menus
automatically. The engine provides a simple way to search texts in the content
files. For more information see the [Content files] section.

Some dynamic functionality can be added to the site using JavaScript files
called controls, and simple data flows called actions can be executed,
respectively. However, `md-site-engine` is not programming framework. On the
other hand, a `md-site-engine` application is based on Node.js, therefore it can
be extended arbitrarily to include any required function.
