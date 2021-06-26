import React, { Component } from "react";
import Input from "./Input"

class General extends Component {
    render() {
        return (
            <div className="General">
                <Input default="Name" tag="h1" />
                <Input default="Email" tag="p" />
                <Input default="Phone" tag="p" />
            </div>
        );
    }
}

export default General;
