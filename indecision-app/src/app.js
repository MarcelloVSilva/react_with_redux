class IndecisionApp extends React.Component {

    render() {
        const title = "Indecision app"
        const subtitle = "Put yout life in the hands of computer"
        const options = ['opt1', 'opt2', 'opt3']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                <ul>
                    {this.props.options.map((option, idx) => <Option key={idx} option={option} />)}
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.option}</li>
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