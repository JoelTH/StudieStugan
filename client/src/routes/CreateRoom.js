import React from "react";
import { v1 as uuid } from "uuid";
import './../App.css';

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <button className="button" onClick={create}>Skapa ett rum</button>
    );
}

export default CreateRoom;