import './App.css';
import React from 'react';

function App() {

    //const [firstName, setFirstName] = React.useState("")
    //const [lastName, setLastName] = React.useState("")
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                name="comments"
                placeholder="Comments"
                onChange={handleChange}
                value={formData.comments}
            />
            <input
                name="isFriendly"
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
        </form>
    )
}

export default App;
