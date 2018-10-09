console.log('teste')

// JSX - JavaScript XML

// var template = <p>This is jsx</p>;

var template = React.createElement(
    "h1",
    {id: "someid"},
    "Something new"
)
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot)