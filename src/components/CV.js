import React, { Component } from "react";
import Input from "./Input";

class CV extends Component {
    render() {
        return (
            <div className="CV">
                <Input default="Name" tag="h1" />
                <Input default="Email" tag="p" />
                <Input default="Phone" tag="p" />
            </div>
        );
    }
}

export default CV;
