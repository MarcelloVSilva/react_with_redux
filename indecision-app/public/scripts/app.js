"use strict";

console.log('teste');

// JSX - JavaScript XML

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Marcello"
    ),
    React.createElement(
        "p",
        null,
        "This is some info here"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            " Item one "
        ),
        React.createElement(
            "li",
            null,
            " Item two "
        )
    )
);

var user = {
    name: "Marcello",
    age: 23,
    location: "Goiânia - Goiás - Brazil"
};

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "My location is ",
        location
    );
}

var count = 0;
var menosUm = function menosUm() {
    count--;
    renderCountApp();
    console.log("menos um");
};

var maisUm = function maisUm() {
    count++;
    renderCountApp();
    console.log("mais um");
};

var reset = function reset() {
    count = 0;
    renderCountApp();
    console.log("reset");
};

var renderCountApp = function renderCountApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: maisUm },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: menosUm },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
var appRoot = document.getElementById("app");

renderCountApp();
