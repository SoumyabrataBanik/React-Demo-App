import React, {useState} from "react";

import UserInputForm from "./UserInputForm";

const UserInput = props => {

    const saveInputDataHandler = (enteredInputData) => {
        const enteredData = {
            ...enteredInputData,
            id: Math.random().toString(),
        };

        props.onClickSubmit(enteredData);
    }

    return (
        <div>
            <UserInputForm onSaveInputData={saveInputDataHandler} />
        </div>
    )
}

export default UserInput;