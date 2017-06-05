<!-- ======================================================================
--- Search engine
title:          Segment files
keywords:       segment file
description:    Segment files in md-site-engine.
--- Menu system
order:          10
text:           Segment files
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

# Segment files

More content files can contain the same piece of information. These text blocks
can be placed in special content files called segments. The segment files help
to avoid repeating texts and make easier the maintenance. The segment files can
also be used to separate some kind of contents by some principle definition to
facilitate understanding and maintenance.

The segment files can have __.md__ and __.html__ extensions. They belong to the
`/components`. The segment files can appear in the root directory of `/components`
and in the language directories as well. If there is a segment file in the root
directory and another one with the same name in a language directory, the latter
will be used.

The segments theirself may contain other segments and controls, respectively.

An example footer segment:

```markdown
***

Help Required       | About Us           | Legal Stuff
--------------------|--------------------|---------------------
[Documentation](/)  | [About Company](/) | [Terms of USe](/)
[Support](/)        | [Jobs](/)          | [Code of Conduct](/)
[Contact Us](/)     | [Blogs](/)         | [Privacy Policy](/)
[Website Issues](/) | [Twitter](/)       | [Reporting Abuse](/)
[Security](/)       | [Github](/)        | [Other Policies](/)

{{ob}}{ copyright }}
```