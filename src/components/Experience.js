import React, { Component } from "react";
import Input from "./Input";

class Experience extends Component {
    render() {
        return (
            <div className="Experience">
                <h1 className="h1"> Experience </h1>

                <Input default="Company Name" tag="p" />
                <Input default="Position Title" tag="p" />
                <Input default="Tasks" tag="p" />
                <div className="flex">
                    <p className="p"> From: </p>
                    <Input default="Date Start" tag="date" />
                </div>
                <div className="flex">
                    <p className="p"> To: </p>
                    <Input default="Date End" tag="date" />
                </div>
            </div>
        );
    }
}

export default Experience;
