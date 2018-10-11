class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put yout life in the hands of computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should i do</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </div>
        )
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                AddOptions here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))