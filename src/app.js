// NOTE: this.props give one way communication

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if(!option) {
            return "Please enter a valid option";
        } else if (this.state.options.indexOf(option) !== -1) {
            return "This option is already added in the list";
        }

        this.setState((prevState) => {
            return {
              options: prevState.options.concat(option)
            };
        })
    }
    render () {
        const subtitle = 'When in mental-confusion come to Indecison';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component{
//
//     // react component requires this method to be defined
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions}
                    onClick={props.handlePick}>
                What should i do?
            </button>
        </div>
    );
};

/** This is class based componenet **/
// class Action extends React.Component {
//     render() {
//         return (
//           <div>
//               <button disabled={!this.props.hasOptions}
//                       onClick={this.props.handlePick}>
//                   What should i do?
//               </button>
//           </div>
//         );
//     };
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            <Option />
        </div>
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//                 <Option />
//             </div>
//         );
//     };
// }


const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
};

// class Option extends React.Component {
//     render () {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     };
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
          error: undefined
        };
    }
    handleAddOption(e) {
        // prevents default behavior i.e. refreshing the whole page
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {error}
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    };
}

// Stateless functional component
// NOTE: Stateless functional component do not have access to 'this'. Instead props is passed into params
// Advantages: faster than class based component because there is no overhead
// and also cz it does not extend React.Component. Also much easier to test
// const User = (props) => {
//    return (
//        <div>
//            <p>Name: {props.name}</p>
//            <p>Age: </p>
//        </div>
//    );
// };
// ReactDOM.render(<User name="Avni" />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
