'use strict';

console.log('teste');

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Marcello'
    ),
    React.createElement(
        'p',
        null,
        'This is some info here'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item one '
        ),
        React.createElement(
            'li',
            null,
            ' Item two '
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
        'p',
        null,
        'My location is ',
        location
    );
}

var count = 0;
var menosUm = function menosUm() {
    count--;
    render();
};

var maisUm = function maisUm() {
    count++;
    render();
};

var reset = function reset() {
    count = 0;
    render();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var numbers = [1, 2, 3, 4, 5, 6, 7];
var render = function render() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: maisUm },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: menosUm },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        app.options.map(function (opt, idx) {
            return React.createElement(
                'p',
                { key: idx },
                'Option: ',
                opt
            );
        }),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
var appRoot = document.getElementById("app");

render();
