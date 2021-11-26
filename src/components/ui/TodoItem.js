import React from "react";
import CheckBox from "./CheckBox";

const TodoItem = (props) => {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className =
        "todo-item ui-state-default " +
        (data.completed === true ? "completed" : "pending");

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox
                        checked={data.completed}
                        onChange={handleChange}
                    />{" "}
                    {data.text}
                </label>
            </div>
        </li>
    );
};

export default TodoItem