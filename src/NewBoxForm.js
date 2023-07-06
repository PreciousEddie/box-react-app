import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                type="number"
                name="width"
                min="100"
                max="500"
                placeholder="Width"
                value={ formData.width }
                onChange={ handleChange }
            />

            <label htmlFor="height">Height:</label>
            <input
                id="height"
                type="number"
                name="height"
                min="100"
                max="500"
                placeholder="Height"
                value={ formData.height }
                onChange={ handleChange }
            />

            <label htmlFor="backgroundColor">Color:</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Choose a color"
                value={ formData.backgroundColor }
                onChange={ handleChange }
            />

            <button>Create Box!</button>
        </form>
    )
}

export default NewBoxForm;