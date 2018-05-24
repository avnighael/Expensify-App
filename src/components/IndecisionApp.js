import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    /** Binding not needed anymore because added new babel plugin called
     ** 'transform-class-properties'. Thus now can create an arrow function
     ** to preserve this bind and also can pull class properties out of the constructor
     **/
    // constructor(props) {
    //     super(props);

        // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        // this.handlePick = this.handlePick.bind(this);
        // this.handleAddOption = this.handleAddOption.bind(this);
        // this.handleDeleteOption = this.handleDeleteOption.bind(this);
        // this.state = {
        //     options: []
        // }
    // }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    }
    //Shorthand for returning object
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }) );
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if(!option) {
            return "Please enter a valid option";
        } else if (this.state.options.indexOf(option) !== -1) {
            return "This option is already added in the list";
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };
    render () {
        const subtitle = 'When in mental-confusion come to Indecison';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        selectedOption = {this.state.selectedOption}
                        handleCloseModal = {this.handleCloseModal}
                    />
                </div>
            </div>
        );
    }
}

