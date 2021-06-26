import React, { Component } from "react";
import Input from "./Input";

class Education extends Component {
    render() {
        return (
            <div className="Education">
                <h1 className="h1"> Education </h1>
                <Input default="School Name" tag="p" />
                <Input default="Title" tag="p" />
                <div className="flex">
                    <p className="p"> Date: </p>
                    <Input default="Date" tag="date" />
                </div>
            </div>
        );
    }
}

export default Education;
