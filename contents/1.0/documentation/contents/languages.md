<!-- ======================================================================
--- Search engine
title:          Using languages
keywords:       multi-language
description:    Using languages in md-site-engine.
--- Menu system
order:          30
text:           Using languages
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

# Using languages

The used languages in an application are determined by the direct subdirectories
of the `/contents` directory. The directory names usually are ISO 639-1 codes:

```text
/app
    /contents
        /en
        /hu
        /ru
```

To include language variants the directory names can follow the IETF BCP 47:

```text
/app
    /contents
        /en
        /en-GB
        /en-US
        /zh-Hant
        /zh-Hans
```

> The directory structure of the `/components` has to mirror the one of the `/contents`!

Different types of site can be built depending on the contents of the language
directories:

### Multiple language site

The language directories have the same contents even if with localized names:

```text
/app
    /contents
        /en
            home.md
            /products
                index.md
                ...
        /hu
            nyitólap.md (id: "/home" )
            /termékek
                lista.md (id: "/products/index" )
                ...
```

In that case when a user changes language, the same page is displayed in the new
language.

### Virtually multiple sites

The language directories have different contents. For example a company present
in more countries provides distinct information depending on the language:

```text
/app
    /contents
        /en
            /cars
            /truck
            ...
        /hu
            /szerviz
            /alkatrészek
            ...
```

The presented site (content) is determined by the languages accepted by the
browser of the user. The user when changes language is redirected to the home
page in the new language.

### Multiple contents in the same language

It is not mandatory that the directory names identify languages or language
directories contain files in different languages. For example this documentation
site has the following base structure:

```text
/app
    /contents
        /dev
            index.md
        /1.0
            /documentation
            /markdown
            404.md
            about.md
            index.md
            ...
```

On this site the user changes version number instead of language.