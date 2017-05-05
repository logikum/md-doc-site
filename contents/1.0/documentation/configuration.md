<!-- ======================================================================
--- Search engine
title:          Configuration  options
keywords:       configuration, options
description:    The configuration options of a md-site-engine application.
--- Menu system
order:          60
text:           Configuration  options
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

# Configuration options

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

The configuration object has the following properties:

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

#### localeFile

Type: `string` Default value: `'default.json'`

The name of the default locale file.

#### submenuFile

Type: `string` Default value: `'__submenu.txt'`

The name of the definition files of menu nodes. The file describes the
properties of a subdirectory in a language directory.

#### layoutSegment

Type: `string` Default value: `'layout'`

The name of the layout segment in document files.

#### contentSegment

Type: `string` Default value: `'content'`

The name of the content segment in layout files.

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

#### redis.host

Type: `string` Default value: `'localhost'`

This is the hostname of the Redis server.

#### redis.port

Type: `number` Default value: `6379`

This is the port of the Redis server.

#### redis.db

Type: `number` Default value: `0`

This is the database index to use. Defaults to Redis's default.

#### redis.pass

Type: `string` Default value: `undefined`

This is the password for Redis authentication.

### Default names of languages

The `bootstrap-navbar` control displays a drop-down list of available languages.
If the control finds a `locale` object property on the configuration objects,
it tries to find properties named as the locale codes on it to display native
names of the languages; otherwise it uses the locale codes.

#### locale.&lt;code>

Type: `string` Default value: `undefined`

This is the native name of the language `code`. An example:

```json
{
    ...
    "locale": {
        "en": "English",
        "hu": "magyar",
        "ru": "русский"
    }
}
```

### Default route and resource paths

The module uses some predefined route paths to implement some function.
The development helper pages also require some predefined external resources.
The configuration objects provides a default path object to make possible to
overwrite these paths if it is necessary.

#### paths.notFound

Type: `string` Default value: `'/404'`

This is the path of the page that is displayed when a requested resource is
unavailable.

#### paths.setLanguage

Type: `string` Default value: `'/set-language'`

This is the path invoked when a language change is requested.

#### paths.reboot

Type: `string` Default value: `'/reboot'`

This is the path to be invoked to restart the engine.

#### paths.search

Type: `string` Default value: `'/search'`

This is the path invoked when a content search is initiated.

#### paths.RandD

Type: `string` Default value: `'/r&d'`

This is the path to be invoked to display the processed resources used by the
engine. Tha path is available in development environment only.

#### paths.cssBootstrap

Type: `string` Default value: `'//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'`

This is the path of the style of the development pages.

#### paths.cssHighlight

Type: `string` Default value: `'//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/ir-black.min.css'`

This is the path of the style of the code highlighter on the development pages.

#### paths.jsHighlight

Type: `string` Default value: `'//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js'`

This is the path of the script of the code highlighter on the development pages.
