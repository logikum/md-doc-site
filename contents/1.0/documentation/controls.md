<!-- ======================================================================
--- Search engine
title:          Controls
keywords:       controls
description:    Controls in md-site-engine.
--- Menu system
order:          40
text:           Controls
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

# Controls

The controls are JavaScript functions, and they have __.js__ extensions.
The controls are put in a __/controls__ directory. The location of the directory
can be set in the [configuration]. The controls are language independent,
therefore control directory do not require `locale` subdirectories.

The controls can appear in content and component (document, layout and segment)
files. The control tokens are distinguished from segment tokens by a leading
hashmark (`#`):

```markdown
JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language
with first-class functions. While it is most well-known as the scripting language
for Web pages, many non-browser environments also use it, such as
{{ob}}{ #get-examples }}. JavaScript is a prototype-based, multi-paradigm,
dynamic language, supporting object-oriented, imperative, and declarative (e.g.
functional programming) styles.
```

The name of the token is always the filename without the extension. The control
must return a string that is inserted into the place of the token while the page
is rendered.

```javascript
/* /controls/get-examples.js */
'use strict';

function getExamples( ctx ) {
  return  'node.js and Apache CouchDB';
}
module.exports = getExamples;
```

The function gets one parameter all the time, a context object that provides
information about the requested content and its environment. See
[Context object] page.

The engine provides some predefined controls to ease the first steps in building
a new site. For more information see the [Predefined controls] page. If a user
defined control has the same name as of an engine control, then the predefined
control will be overwritten, i.e. the user defined control will be invoked. 