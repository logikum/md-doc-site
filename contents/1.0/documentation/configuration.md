<!-- ======================================================================
--- Search engine
title:          Application configuration
keywords:       application, configuration
description:    Default application configuration in md-site-engine.
--- Menu system
order:          60
text:           Application configuration
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
--- Side menu
side-menu-root:     /documentation
side-menu-header:   Documentation
side-menu-top:      Introduction
side-menu-depth:    2
======================================================================= -->

# Application configuration

At start up md-site-engine requires a JSON object that holds options. A
typical start up can look like that:

```
var engine = require( 'md-site-engine' );

// Determine run mode.
var mode = process.env.PORT || 'development';

// Get configuration.
var configPath = 'config/' + mode + '.json';
var config = engine.getConfiguration( configPath );

// Set up content manager.
var contents = engine.getContents( config );
```

The configuration object can have the following properties:

> The default values are only set when the `getConfiguration` method of
> the engine is used.

#### defaultLocale

Type: `string` Default value: `'en'`

The first request of the user uses the default locale.

#### contents

Type: `string` Default value: `'contents'`

The default path of the contents related to the application root.

#### components

Type: `string` Default value: `'components'`

The default path of the components related to the application root.

#### controls

Type: `string` Default value: `'controls'`

The default path of the controls related to the application root.

#### public

Type: `string` Default value: `'public'`

The default path of the public assets related to the application root.
Typically client scripts, style sheets, images, fonts and other downloadable
files are here.

#### documentFile

Type: `string` Default value: `'document.html'`

The name of the default document file.

#### layoutFile

Type: `string` Default value: `'layout.html'`

The name of the default layout file.

#### referenceFile

Type: `string` Default value: `'reference.txt'`

The name of the reference files.

#### submenuFile

Type: `string` Default value: `'__submenu.txt'`

The name of the definition files of menu nodes. The file describes the
properties of a subdirectory in a language directory.

#### layoutSegment

Type: `string` Default value: `'layout'`

The name of the layout segment in document files.

#### contentSegment

Type: `string` Default value: `'content'`

The name of the content segment in layout/document files.

#### getRenderer

Type: `string` Default value: `''`

The path of a JavaScript file that exports a custom markdown renderer.

### Session default values

The language handling requires sessions. The configuration objects provides
a default session object to speed up the development of the application
when [express-session] module is used for session handling. For more
options see the module description.

#### session.secret

Type: `string` Default value: `'md-site-engine'`

This is the secret used to sign the session ID cookie.

#### session.resave

Type: `Boolean` Default value: `false`

Forces the session to be saved back to the session store, even if the
session was never modified during the request. 

#### session.saveUninitialized

Type: `Boolean` Default value: `true`

Forces a session that is uninitialized to be saved to the store.
A session is uninitialized when it is new but not modified.

### Redis default values

The configuration objects provides a default redis object to speed up
the development of the application when [connect-redis] module is used
for session store. For more options see the module description.