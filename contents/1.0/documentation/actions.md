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

Sometimes there is a need to display some content based on data provided by the
user. Such a simple process usually consists of three steps:

1. A form collecting user input (content).
2. Processing the data sent by the user (action).
3. Showing a content depending on the result of the previous step (content).

The first and last steps can provided on content pages, however, the processing
the input data requires a JavaScript function called action. The next excerpt
shows a very simple form that has a single text input field and a submit button.
Note the action and method properties of the form!

```html
<form class="form-inline search-phrase" action="/actions/task" method="post">
  <div class="form-group">
    <label>Task name:</label>
    <input type="text" class="form-control" name="task"
           maxlength="20" value="{{ .task }}">
  </div>
  <button type="submit" class="btn btn-primary">Check it!</button>
  <span class="error">{{ .error }}</span>
</form>
```

Let suppose the data of the form will be processed by an action in the
'/actions/task.js' file. We have to associate the action to the form. This is
done in the server start up program (`server.js`) using an actions object:

```javascript
/* /server.js */
...
// Set engine routes.
var actions = {
  'POST:/actions/task': '/actions/task.js'
};
engine.setRoutes( app, actions, mode );
...
```

The property names of the actions object have to match to the __method:action__
pairs of the input forms. The method and the colon can be omitted, the default
method is `POST`. The values of the properties define the JavaScript modules that
contain the individual action functions:

#### action( req, ctx )

__req__: The [request](https://expressjs.com/en/4x/api.html#req) object of the [express] framework.  
__ctx__: The engine context of the current request, see [Context object].  
__Returns__ a string that has to be a valid identifier (path) of the result content.

Let see a very simple example for the action function that receives the input
text of the preceding form:

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

There is nothing special on the result content, it is an ordinary one.

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
