import './App.css';
import React from 'react';

function App() {

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")

  console.log("First Name: " + firstName + "/n Last Name: " + lastName)

  function handleFirstName(event) {
    //console.log(event.target.value)
    setFirstName(event.target.value)
  }

  function handleLastName(event) {
      setLastName(event.target.value)
  }

  return (
      <form>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleFirstName}
        /> 
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleLastName}
        />
      </form>
  )
}

export default App;
