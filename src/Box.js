import React from "react";
import "./Box.css"

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
    const styles = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
    };

    const handleRemoveBox = () => {
        removeBox(id);
    };
    return (
        <>
            <div className="Box" data-testid="box-element" id={ id } key={ id } style={ styles }>
                <button onClick={ handleRemoveBox }>X</button>
            </div>
        </>
    );
};

export default Box;