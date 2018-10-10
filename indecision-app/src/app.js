console.log('teste')

// JSX - JavaScript XML

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
    renderCountApp()
    console.log("menos um")
}

const maisUm = () => {
    count++
    renderCountApp()
    console.log("mais um")
}

const reset = () => {
    count = 0
    renderCountApp()
    console.log("reset")
}


const renderCountApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={maisUm}>+1</button>
            <button onClick={menosUm}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot)
}
const appRoot = document.getElementById("app");

renderCountApp()