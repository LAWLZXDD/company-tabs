import React from "react";
import { useEffect, useState } from "react";

function Available() {

    const [availUsers, setAvailUsers] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3001/available")
        .then(response => response.json())
        .then(data => setAvailUsers(data))
      }, [])

      console.log(availUsers)

    const renderAvailUsers = (name, index) => {
        return (
            <div key={index}>{name.firstname} {name.lastname}</div>
        )
    }


    return (
        <>
            <h1>PERSONNEL INFORMATION</h1>
            {
                availUsers ? availUsers.map(renderAvailUsers) : null
            }

        </>
    )
}

export default Available;