import React from "react";
import InputWrapper from "./InputWrapper";

const Header = (props) => {
    return (
        <header>
            <h1>لیست کارها</h1>
            <InputWrapper {...props} />
        </header>
    );
};

export default Header;
