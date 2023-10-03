import React from "react";

import Card from "../Card/Card";
import './ErrorModal.css';

const ErrorModal = props => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm} />
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="message">
                    <p>{props.message}</p>
                </div>
                <footer className="footer">
                    <button className="btn" onClick={props.onConfirm} >Okay</button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;