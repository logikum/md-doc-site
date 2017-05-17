<!-- ======================================================================
--- Search engine
title:          Content search
keywords:       content, search
description:    Content search in md-site-engine.
--- Menu system
order:          60
text:           Content search
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

# Content search

The engine provides a built-in search action to find a string in the contents.
The search is activated creating a content with `/search` path. The search path
can be set in the [configuration]. The search path can be localized using the
`/search` identifier in content metadata. The content search is activated only
in those languages where the engine finds a search content file. That content
has to contain a form similar like the following:

```html
<form class="form-inline search-phrase" action="/search" method="post">
  <div class="form-group">
    <label>Text to search:</label>
    <input type="text" class="form-control" name="text2search"
           maxlength="20" value="{{ .text2search }}">
  </div>
  <button type="submit" class="btn btn-primary">Find</button>
</form>

{{ob}}{ .results }}
```
The results of the search can be listed by the `results` context data object.
The form and the control use the following style sheet classes:

```css
/* Search page */
.search-phrase { ... }
.search-result { ... }
.search-result h4 { ... }
mark { ... }
```

The `mark` tag is used to highlight the string found on the result pages.

### Navigation bar

When content search is activated the navigation bar also displays a search field.
The search field can be disabled in the [configuration]. This field requires
the following classes to be included in the style sheet of the application:

```css
/* Input group in navigation bar */
.navbar-input-group {
    font-size: 0; /* removes whitespace between button and input */
}
.navbar-input-group input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 130px !important;
}
.navbar-input-group .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
}
```

The search field requires a JavaScript event handler that is provided by the
`control-search-button` control. It should be placed at the end of the document
files:

```html
    ...
<!-- Place here the application scripts -->
<script src="..."></script>
{{ #code-csb }}

</body>
</html>
```
