import React, { useState } from "react";

import "./UserInput.css";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const UserInputForm = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => setEnteredUserName(event.target.value);
    const ageChangeHandler = (event) => setEnteredAge(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Inputs!",
                message: "Please Enter valid inputs (non-empty values)"
            })
            return;
        }

        if (+enteredAge <= 0) {
            setError({
                title: "Invalid Age!",
                message: "Please Enter a proper age (> 0)!"
            })
            return;
        }

        const enteredData = {
            username: enteredUserName,
            age: enteredAge
        };

        props.onSaveInputData(enteredUserName, enteredAge);

        setEnteredAge('');
        setEnteredUserName('');
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className="card-addons">
                <form onSubmit={submitHandler}>
                    <div className="username">
                        <label className="username-label">Username:</label>
                        <input
                            className="username-input"
                            type="text"
                            value={enteredUserName}
                            // placeholder="Enter Username:"
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className="age">
                        <label className="age-label">Age (Years):</label>
                        <input
                            className="age-input"
                            type="number"
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                    </div>
                    <button type="submit" className="btn">
                        Add User
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default UserInputForm;
