console.log('teste')

// JSX - JavaScript XML

var template = (
    <div>
        <h1>Marcello</h1>
        <p>This is some info here</p>
        <ol>
            <li> Item one </li>
            <li> Item two </li>
        </ol>
    </div>
);

var user = {
    name: "Marcello",
    age: 23,
    location: "Brazil"
}

var templateTwo = (
    <div>

        <h1>There is the templateTwo</h1>
        <h1>{user.name}</h1>
        <p>My age is {user.age}</p>
        <p>My location is {user.location}</p>
        <ol>
            <li> Item one </li>
            <li> Item two </li>
        </ol>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot)