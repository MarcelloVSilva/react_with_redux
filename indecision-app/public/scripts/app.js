"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = {
            count: 0
        };
        _this.maisUm = _this.maisUm.bind(_this);
        _this.menosUm = _this.menosUm.bind(_this);
        _this.reset = _this.reset.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: "maisUm",
        value: function maisUm() {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
        }
    }, {
        key: "menosUm",
        value: function menosUm() {
            this.setState({ count: this.state.count - 1 });
            console.log(this.state.count);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.setState({ count: 0 });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.maisUm },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.menosUm },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.reset },
                    "reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var appRoot = document.getElementById("app");
ReactDOM.render(React.createElement(Counter, null), appRoot);

// console.log('teste')

// // JSX - JavaScript XML

// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of a computer',
//     options: []
//   };

// const template = (
//     <div>
//         <h1>Marcello</h1>
//         <p>This is some info here</p>
//         <ol>
//             <li> Item one </li>
//             <li> Item two </li>
//         </ol>
//     </div>
// );

// const user = {
//     name: "Marcello",
//     age: 23,
//     location: "Goiânia - Goiás - Brazil"
// }

// function getLocation(location) {
//     if (location) return <p>My location is {location}</p>
// }

// let count = 0 
// const menosUm = () => {
//     count--
//     render()
// }

// const maisUm = () => {
//     count++
//     render()
// }

// const reset = () => {
//     count = 0
//     render()
// }

// const onFormSubmit = (e) => {
//     e.preventDefault()
//     const option = e.target.elements.option.value;

//     if (option) {
//       app.options.push(option);
//       e.target.elements.option.value = '';
//       render();
//     }
// }

// const onRemoveAll = () => {
//     app.options = []
//     render()
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7]
// const render = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={maisUm}>+1</button>
//             <button onClick={menosUm}>-1</button>
//             <button onClick={reset}>reset</button>
//             <button onClick={onRemoveAll}>Remove All</button>
//             {
//                 app.options.map((opt, idx) => <p key={idx}>Option: {opt}</p>)
//             }
//             <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//             <p>{app.options.length}</p>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"></input>
//                 <button>Add option</button>
//             </form>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot)
// }
// const appRoot = document.getElementById("app");

// render()
