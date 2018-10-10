console.log('teste')

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };

const template = (
    <div>
        <h1>Marcello</h1>
        <p>This is some info here</p>
        <ol>
            <li> Item one </li>
            <li> Item two </li>
        </ol>
    </div>
);

const user = {
    name: "Marcello",
    age: 23,
    location: "Goiânia - Goiás - Brazil"
}

function getLocation(location) {
    if (location) return <p>My location is {location}</p>
}

let count = 0 
const menosUm = () => {
    count--
    render()
}

const maisUm = () => {
    count++
    render()
}

const reset = () => {
    count = 0
    render()
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value;

    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const numbers = [1, 2, 3, 4, 5, 6, 7]
const render = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={maisUm}>+1</button>
            <button onClick={menosUm}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                app.options.map((opt, idx) => <p key={idx}>Option: {opt}</p>)
            }
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot)
}
const appRoot = document.getElementById("app");

render()