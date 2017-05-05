<!-- ======================================================================
--- Search engine
title:          Application structure
keywords:       application, structure
description:    Default application structure in md-site-engine.
--- Menu system
order:          70
text:           Application structure
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

# Application structure

A typical `md-site-engine` application - that uses the default configuration -
has the following directory structure:

```text
/app-dir
    /components
        /language-1
        /language-2
    /config
    /contents
        /language-1
        /language-2
    /controls
    /node_modules
    /public
        /fonts
        /images
        /scripts
        /styles
```

The directories contain (at least) the following files:

#### /app-dir

This is the root directory of the application.It is the place the start up
script, e.g. `server.js`, and the `package.json` file that holds Node.js and
npm metadata relevant ot the project.

#### /components

The place of the language independent components: document, layout, segment and
reference files.

#### /components/language-i

The place of the language specific components: document, layout, segment and
reference files, furthermore the locale files.

#### /config

This directory contains the configuration(s), and optionally the custom renderer,
however, the latter one can be anywhere.

#### /contents

This directory contains no files.

#### /contents/language-i

The place of the content files (markdown and HTML as well), and the eventual
`__submenu.txt` files.

#### /controls

The place of the control files, i.e. JavaScript files.

#### /node_modules

The Node.js modules used by the application can be found here. The directory is
managed by the npm package manager.

#### /public

A practical place for the client side files that are public to the world. It is
configured in the `server.js`, and it can be anywhere, but should be separated
from the rest of the application. For example this is the place of the
`favicon.ico` and other icons. The script and style sheet files, the images and
fonts are usually stored in separate subdirectories, however, that is totally
optional.

### The allowed file extensions by areas

The components directory:

Area | reference | document | layout | segment | locale
---- | --------- | -------- | ------ | ------- | ------
/component | .txt | .html | .html | .md, .html | 
/component/language | .txt | .html | .html | .md, .html | .json
/component/language/sub |  | .html | .html | .md, .html | .json
<div>&nbsp;</div>

The other directories:

Area | content | control | config | renderer
---- | ------- | ------- | ------ | --------
/contents |  |  |  | 
/contents/language | .md, .html, .txt |  |  | 
/contents/language/sub | .md, .html, txt |  |  | 
/controls |  | .js |  | 
/config |  |  | .json | .js

<p>&nbsp;</p>
