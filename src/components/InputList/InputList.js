import React from "react";

import Card from "../UI/Card/Card";
import ListItem from "./ListItem";

import './InputList.css';

const InputList = props => {

    if (props.datas.length === 0) {
        return (<Card className='no-input'>No Username Added!</Card>);
    }

    else {
        return (
            <Card className="card-addons">
                <ul>
                    {
                        props.datas.map((data) => (
                            <ListItem key={data.id} un={data.username} ag={data.age} />
                        ))
                    }
                </ul>
            </Card>
        );
    }

    // return (
    //     <Card>
    //         <ul>
    //             {props.data.map(d => (
    //                 <li key={d['key']} className="listitem">{`${d.username} (${d.age} years old)`}</li>
    //             ))}
    //         </ul>
    //     </Card>
    // );
};

export default InputList;