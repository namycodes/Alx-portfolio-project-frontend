import React, { useState } from 'react';

function SimpleForm({ onFormSubmit }) {
    const [formData, setFormData] = useState({ name: '', email: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
         ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                       type="text"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                       type="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>

    );


    
}

export default SimpleForm;