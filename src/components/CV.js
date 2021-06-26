import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class CV extends Component {
    render() {
        return (
            <div className="CV">
                <General />
                <Education />
                <Experience />
            </div>
        );
    }
}

export default CV;
