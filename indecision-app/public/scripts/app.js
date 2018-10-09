"use strict";

console.log('teste');

// JSX - JavaScript XML

var template = React.createElement(
  "h1",
  null,
  "This is jsx Marcello"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
