import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

function CV() {
    return (
        <div className="CV">
            <General />
            <Education />
            <Experience />
        </div>
    );
}

export default CV;
