import React, { useState } from "react";
import { v4 as uuid } from "uuid"
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css"

const BoxList = () => {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
    };
    const removeBox = (id) => {
        setBoxes((boxes) => boxes.filter((box) => box.id !== id));
    };
    return (
        <>
            <div className="BoxList-form">
                <NewBoxForm addBox={ addBox } />
            </div>
            <div>
                { boxes.map(({ id, width, height, backgroundColor }) => (
                    <Box
                        id={ id }
                        key={ id }
                        width={ width }
                        height={ height }
                        backgroundColor={ backgroundColor }
                        removeBox={ removeBox }
                    />
                )) }
            </div>
        </>
    )
}

export default BoxList;