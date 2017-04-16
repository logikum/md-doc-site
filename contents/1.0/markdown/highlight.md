<!-- ======================================================================
--- Search engine
title:          Markdown code and syntax highlighting
keywords:       markdown, code, syntax, highlight
description:    Markdown code and syntax highlighting in md-site-engine.
--- Menu system
order:          60
text:           Code and syntax highlighting
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

# Code and syntax highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't.
However, many renderers -- like Github's and [marked] -- support syntax
highlighting. Which languages are supported and how those language names
should be written will vary from renderer to renderer. [marked] supports
highlighting for dozens of languages (and not-really-languages, like diffs
and HTTP headers); to see the complete list, and how to write the language
names, see the [highlight.js] demo page.

```
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks ```, or
are indented with four spaces. I recommend only using the fenced code
blocks -- they're easier and only they support syntax highlighting.

    ```javascript
    var isNumber = typeof NaN === "number";
    alert(isNumber);
    ```
     
    ```python
    s = "Python syntax highlighting"
    print s
    ```
     
    ```
    <p>When <b>no language</b> is indicated, it tries to detect
    the language <i>automatically</i>.</p> 
    ```
    
    ```no-highlight
    Omitting highlight is requested, so no syntax highlighting. 
    Even if a <b>tag</b> is found.
    ```

```javascript
var isNumber = typeof NaN === "number";
alert(isNumber);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
<p>When <b>no language</b> is indicated, it tries to detect
the language <i>automatically</i>.</p> 
```

```no-highlight
Omitting highlight is requested, so no syntax highlighting. 
Even if a <b>tag</b> is found.
```
