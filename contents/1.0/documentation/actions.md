<!-- ======================================================================
--- Search engine
title:          Actions
keywords:       actions
description:    Actions in md-site-engine.
--- Menu system
order:          50
text:           Actions
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

# Actions

Actions...

```html
<form class="form-inline search-phrase" action="/actions/task" method="post">
  <div class="form-group">
    <label for="text2search">Task name:</label>
    <input type="text" class="form-control" name="task"
           maxlength="20" value="{{ .task }}">
  </div>
  <button type="submit" class="btn btn-primary">Check it!</button>
  <span class="error">{{ .error }}</span>
</form>
```

```javascript
// Set engine routes.
var actions = {
  '/actions/task': '/actions/task.js'
};
engine.setRoutes( app, actions, mode );
```

```javascript
/* /actions/task.js */
'use strict';

// Task action.
function action( req, ctx ) {

  // Read form data.
  var task = req.body.task;
  // Save input data.
  ctx.data.task = task;

  // Process data.
  if (task.length > 5) {
    // Pass result data.
    ctx.data.result = task.length;
    // Display result.
    return '/tasks/task-result';
  }
  else {
    // Show error message.
    req.ctx.data.error = 'Input text is too short!';
    // Stay on form page.
    return '/tasks/task-form';
  }
}

module.exports = action;
```

### Built-in actions

The engine has the following built-in actions:

URL | Description | See
--- | ----------- | ---
/404 | It is called when a content is not found. |
/set-language | It is called at changing language. |
/reboot | It can be called to reinitialize the content manager. |
/search | It is called at content search. | [Content search]
/r&d | It can be called in development mode. | [Development support]
<br/>

The URLs of all built-in actions can be set in the paths section of the
[configuration].
