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

            e.target.classList.add("de-outline");
            e.target.blur();
        }
    };

    handleBlur = (e) => {
        if (e.target.value !== "") {
            this.setState({
                content: e.target.value,
            });
        } else {
            this.setState({
                content: this.props.default,
            });
        }

        e.target.classList.add("de-outline");
        e.target.blur();
    };

    handleFocus = (e) => {
        e.target.classList.remove("de-outline");
    };

    render() {
        return (
            <div className="Input">
                <input
                    type={this.props.tag === "date" ? "date" : ""}
                    className={`${this.props.tag} de-outline`}
                    onInput={this.handleInput}
                    onKeyDown={this.handleEnter}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    value={this.state.content}
                />
            </div>
        );
    }
}

export default Input;
