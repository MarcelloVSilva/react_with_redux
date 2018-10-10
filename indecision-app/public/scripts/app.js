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

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "There is the templateTwo"
    ),
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Ninguém'
    ),
    user.age && user.age >= 23 && React.createElement(
        "p",
        null,
        "My age is ",
        user.age
    ),
    getLocation(user.location),
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
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
