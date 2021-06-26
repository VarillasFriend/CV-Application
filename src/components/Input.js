import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.default,
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (e) => {
        this.setState({
            content: e.target.value,
        });
    };

    handleClick = (e) => {
        e.target.classList.remove(this.props.tag);
    };

    handleEnter = (e) => {
        if (e.keyCode === 13) {
            if (e.target.value !== "") {
                this.setState({
                    content: e.target.value,
                });
            } else {
                this.setState({
                    content: this.props.default,
                });
            }

            e.target.classList.add(this.props.tag);
        }
    };

    render() {
        return (
            <div className="Input">
                <input
                    className={this.props.tag}
                    onClick={this.handleClick}
                    onInput={this.handleInput}
                    onKeyDown={this.handleEnter}
                    value={this.state.content}
                />
            </div>
        );
    }
}

export default Input;
