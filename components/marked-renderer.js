'use strict';

var highlight = require( 'highlight.js' );

function markedRenderer( marked ) {

  // Synchronous highlighting with highlight.js
  marked.setOptions( {
    highlight: function ( code, lang ) {
      return highlight.highlightAuto( code, [ lang ] ).value;
    }
  } );

  return  new marked.Renderer();
}

module.exports = markedRenderer;
