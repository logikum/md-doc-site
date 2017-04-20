<!-- ======================================================================
--- Search engine
title:          Reference files
keywords:       reference file
description:    Reference files in md-site-engine.
--- Menu system
order:          40
text:           Reference files
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

# Reference files

Reference files can contain reference-style links. A reference file has
.txt extension, and the default name is `references.txt`. The name of the
reference file can be set in the [configuration]. The reference files
belong to the components. One reference file can be in the root of the
components, this is the default one; and another reference file can be in
the root of all language directories. Before rendering a page, the default
reference file and the language specific one are attached to the content
file. The reference files are the appropriate places for site wide links.

```markdown
[~]: https://github.com
[marked]: ~/chjj/marked
[highlight.js]: ~/isagalaev/highlight.js
```

Tilde character can be used for common link roots to shorten repeating
long URLs. If more common link root is required, the tilde and a number
can be applied:

```markdown
[~]: https://github.com/logikum/md-doc-site
[md-doc-site]: ~
[let us know]: ~/issues

[~7]: https://twitter.com
[npmbot]: ~7/npmjs
[JavaScript Daily]: ~7/JavaScriptDaily
```
