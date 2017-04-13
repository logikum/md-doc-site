<!-- ======================================================================
--- Search engine
title:          Markdown code and syntax highlighting
keywords:       markdown, code, syntax, highlight
description:    Markdown code and syntax highlighting in md-site-engine.
--- Menu system
order:          
text:           
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         md-help
======================================================================= -->

# Code and syntax highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't.
However, many renderers -- like Github's and Markdown Here -- support syntax
highlighting. Which languages are supported and how those language names should
be written will vary from renderer to renderer. Markdown Here supports
highlighting for dozens of languages (and not-really-languages, like diffs
and HTTP headers); to see the complete list, and how to write the language names,
see the highlight.js demo page.

```
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks ```, or
are indented with four spaces. I recommend only using the fenced code blocks --
they're easier and only they support syntax highlighting.

    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```
    
    ```python
    s = "Python syntax highlighting"
    print s
    ```
    
    ```
    No language indicated, so no syntax highlighting.
    But let's throw in a <b>tag</b>.
    ```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```no-highlight
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

