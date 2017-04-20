<!-- ======================================================================
--- Search engine
title:          Home page
keywords:       home page
description:    Home page of md-site-engine documentation site.
--- Menu system
order:          
text:           
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         
---$-left:         
searchable:     true
======================================================================= -->

<div class="pull-right"><img src="/images/mdse-w200.png"></div>

# md-site-engine

Description [link](/) description 

```$javascript
function getTitle( ctx ) {
  return  merge( ctx.translate( 'title' ), ctx.metadata.title, ' ♦ ' );
}

function merge( first, second, separator ) {
  var merged = first || '';
  merged += second ? separator + second : '';
  return merged;
}
```