import React from "react";

import './InputList.css';

const ListItem = props => {
    return (
        <li className="listitem">
            {`${props.un} (${props.ag} years old)`}
        </li>
    )
};

export default ListItem;