<!-- ======================================================================
--- Search engine
title:          Using the engine
keywords:       usage, seed, demonstration, documentation
description:    Using md-site-engine to create sites.
--- Menu system
order:          80
text:           Using the engine
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

# Using the engine

The fastest way to start a new site using `md-site-engine` is downloading the
seed application. It is worth to see the sources of the demonstration and the
documentation sites.

### Seed application

To get you started you can simply clone the `md-site-seed` repository and
install the dependencies:

#### Prerequisites

You need git to clone the `md-site-seed` repository. You can get git from
[here](https://git-scm.com/ "|").

You must have Node.js and its package manager (npm) installed. You can get them
from [here](https://nodejs.org/ "|").

#### Clone md-site-seed

Clone the `md-site-seed` repository and set the origin alias to your repository:

```
git clone https://github.com/logikum/md-site-seed.git <your-project-name>
cd <your-project-name>
git remote rm origin
git remote add origin <url-of-your-repository>
git push -u origin master
```

#### Install Dependencies

The project has some kinds of dependencies and you can simply install it:

```
npm install
```

#### Run the Application

The simplest way to start the server is:

```
node server.js
```

Now browse to the application at [localhost:3000](http://localhost:3000).

<p>&nbsp;</p>

### Demonstration site

The demo application for `md-site-engine` shows the life and works of William
Shakespeare in English and Hungarian. The site is online at
[md-web.logikum.hu](http://md-web.logikum.hu "|").
Its source is available at
[github.com/logikum/md-web-site](https://github.com/logikum/md-web-site "|").

### Documentation site

This site is also driven by the `md-site-engine`. The source of this site is at
[github.com/logikum/md-doc-site](https://github.com/logikum/md-doc-site "|").

<p>&nbsp;</p>
