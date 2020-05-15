<!-- ======================================================================
--- Search engine
title:          Custom renderer
keywords:       custom, markdown, renderer
description:    Custom markdown renderer in md-site-engine.
--- Menu system
order:          50
text:           Custom renderer
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

# Custom markdown renderer

The options of `marked` module has a renderer property of object type. The
object contains functions to render markdown tokens to HTML. The renderer
option allows to render the tokens in a custom manner. Here is an example
of overriding the default link token to render by adding a target attribute
to the anchor tag:

```javascript
// marked-renderer.js
'use strict';

function markedRenderer( marked ) {

  // Get the original renderer.
  var renderer = new marked.Renderer();

  /**
   * Overwrite link rendering to provide target attribute.
   * The title argument can contain the target value separated by a vertical bar.
   * Examples:
   *    * "title" - title contains the title only
   *    * "title | _blank" - title contains both title and target
   *    * "|_blank" - title contains the target only
   *    * "|" - default target is "_blank"
   */
  renderer.link = function (href, title, text) {
    var target = null;

    var pos = (title || '').indexOf( '|' );
    if (pos >= 0) {
      target = title.substring( pos + 1).trim() || '_blank';
      title = title.substring( 0, pos).trim();
    }

    return  '<a href="' + href + '"' +
      (target ? '" target="' + target + '"' : '') +
      (title ? '" title="' + title + '"' : '') +
      '>' + text + '</a>';
  };

  // Returns the customized marked renderer.
  return renderer;
}

module.exports = markedRenderer;
```

The path of the custom renderer can be set in the [configuration].

The renderer object has the following functions:

<p><table width="100%">
  <tr>
    <th> Block level renderer methods </th><th> Inline level renderer methods </th>
  </tr>
  <tr>
    <td>
      ● code( <i>string</i> code, <i>string</i> language )</br>
      ● blockquote( <i>string</i> quote )</br>
      ● html( <i>string</i> html )</br>
      ● heading( <i>string</i> text, <i>number</i> level )</br>
      ● hr()</br>
      ● list( <i>string</i> body, <i>boolean</i> ordered )</br>
      ● listitem( <i>string</i> text )</br>
      ● paragraph( <i>string</i> text )</br>
      ● table( <i>string</i> header, <i>string</i> body )</br>
      ● tablerow( <i>string</i> content )</br>
      ● tablecell( <i>string</i> content, <i>object</i> flags )
    </td>
    <td valign="top">
      ● strong( <i>string</i> text )</br>
      ● em( <i>string</i> text )</br>
      ● codespan( <i>string</i> code )</br>
      ● br()</br>
      ● del( <i>string</i> text )</br>
      ● link( <i>string</i> href, <i>string</i> title, <i>string</i> text )</br>
      ● image( <i>string</i> href, <i>string</i> title, <i>string</i> text )
    </td>
  </tr>
</table></p>

For more information see the description of the [marked] module.
