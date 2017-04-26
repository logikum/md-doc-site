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

#### config

Type: `Configuration`

Gets the [configuration] object.

#### languages

Type: `Array.<string>`

Gets the list of the languages available in the site.

#### language

Type: `string`

Gets the current language.

#### baseUrl

Type: `string`

Gets the URL path on which a router instance was mounted, i.e. the path of the
content.

#### metadata

Type: `Metadata`

Gets the metadata of the current content. The metadata object holds the eventual
user data as well. See the [Content metadata] page.

#### menus

Type: `MenuStock`

Gets the menu tree of the current language. See the [Menu system] page.

#### translate( key ) _--or--_ t( key )

key: `string`  
Returns: `string`

Gets the localized text of the key in the current language. See [Locale files].

### Supporting content search

#### text2search

Type: `string` Default value: `''`

Gets the text to search. It is used by the `search-phrase` engine control and is
filled only when the search function is activated. For more information see
[Content search].

#### searchPath

Type: `string` Default value: `'/search'`

Gets the path of the search command. It can be language dependent and is used by
the [Content search] function.

#### getSearchResults()

Returns: `Array.<SearchResult>`

Gets the list of search results matching to the search phrase. It is used by the
`search-results` engine control and is called only when the search function is
activated. For more information see [Content search].

