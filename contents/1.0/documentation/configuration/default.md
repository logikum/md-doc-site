<!-- ======================================================================
--- Search engine
title:          Default configuration
keywords:       configuration, options
description:    Default application configuration in md-site-engine.
--- Menu system
order:          10
text:           Default configuration
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

# Default configuration

The default configuration object has the following properties:

```json
{
  "defaultLocale": "en",
  "contents": "contents",
  "components": "components",
  "controls": "controls",
  "documentFile": "document.html",
  "layoutFile": "layout.html",
  "referenceFile": "references.txt",
  "localeFile": "default.json",
  "submenuFile": "__submenu.txt",
  "layoutSegment": "layout",
  "contentSegment": "content",
  "getRenderer": "",

  "session": {
    "secret": "md-site-engine",
    "resave": false,
    "saveUninitialized": true
  },
  "redis": {
    "host": "localhost",
    "port": 6379,
    "db": 0
  },

  "paths": {
    "notFound": "/404",
    "setLanguage": "/set-language",
    "reboot": "/reboot",
    "search": "/search",
    "RandD": "/r&d",
    "cssBootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
    "cssHighlight": "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/ir-black.min.css",
    "jsHighlight": "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js"
  }
}
```

In an application the most of the properties are unchanged.
A typical configuration lookd like this (of course with the appropriate values):

```json
{
  "defaultLocale": "en",
  "getRenderer": "/config/marked-renderer.js",

  "session": {
    "secret": "##-###-####",
    "resave": false,
    "saveUninitialized": true
  },
  "redis": {
    "host": "localhost",
    "port": 6379,
    "db": 0,
    "pass": "**-***-****"
  },
  "locale": {
    "en": "English",
    "hu": "magyar",
    "ru": "русский"
  }
}
```