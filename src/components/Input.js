import React, { useState } from "react";

function Input(props) {
    const [content, setContent] = useState(props.default);

    const handleInput = (e) => {
        setContent(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            if (e.target.value !== "") {
                setContent(e.target.value);
            } else {
                setContent(props.default);
            }

            e.target.classList.add("de-outline");
            e.target.blur();
        }
    };

    const handleFocus = (e) => {
        e.target.classList.remove("de-outline");
    };

    const handleBlur = (e) => {
        if (e.target.value !== "") {
            setContent(e.target.value);
        } else {
            setContent(props.default);
        }

        e.target.classList.add("de-outline");
        e.target.blur();
    };

    return (
        <div className="Input">
            <input
                type={props.tag === "date" ? "date" : ""}
                className={`${props.tag} de-outline`}
                onInput={handleInput}
                onKeyDown={handleEnter}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={content}
            />
        </div>
    );
}

export default Input;
