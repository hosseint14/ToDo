import React from "react";
import enhance from "../hoc/wrapInputBox";

const InputBox = (props) => {
    const { value, handleChange, handleKeyUp } = props;

    return (
        <input
            autoFocus
            type="text"
            className="form-control add-todo right-to-left-text"
            value={value}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            placeholder="کار جدید را وارد نمایید"
        />
    );
};

export default enhance(InputBox);
