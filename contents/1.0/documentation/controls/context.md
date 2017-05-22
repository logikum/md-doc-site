<!-- ======================================================================
--- Search engine
title:          Context object
keywords:       control, context, object
description:    The properties and methods of context object parameters in a control function.
--- Menu system
order:          10
text:           Context object
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

# Context object

A control function has one parameter, a context object. It has the following
properties and methods:

### Properties

#### config

Type: `Configuration`

Gets the [configuration] object.

#### languages

Type: `Array.<string>`

Gets the list of the languages available in the site.

#### language

Type: `string`

Gets the current language.

#### url

Type: `string`

Gets the request URL string, i.e. the path of the content.

#### metadata

Type: `Metadata`

Gets the metadata of the current content. The metadata object holds the eventual
user data as well. See the [Content metadata] page.

#### menus

Type: `MenuStock`

Gets the menu tree of the current language. See the [Menu system] page.

#### data

Type: `object` Default value: `{ }`

Gets or sets the data that are the results of an action. See the [Actions] page.

#### searchPath

Type: `string` Default value: `'/search'`

Gets the path of the search command. It can be language dependent and is used by
the [Content search] function.

### Methods

#### translate( key, defaultValue ) _--or--_ t( key, defaultValue )

key: `string`  
defaultValue: `undefined|string`  
Returns: `string`

Gets the localized text of the key in the current language. See [Locale files].

#### getPathById( id )

id: `string`  
Returns: `string`

Gets the localized path of the context having the passed identifier.
