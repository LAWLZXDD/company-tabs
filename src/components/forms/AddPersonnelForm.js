import React from "react";
import { useState } from "react";

function AddPersonnelForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [section, setSection] = useState('');
    const [rank, setRank] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        alert(`Form content: \n rank: ${rank} \n first name: ${firstName} \n last name: ${lastName}  \n section: ${section}`);
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Rank:
                <select onChange={e => setRank(e.target.value)} value={rank} required
                    className='formentry'>
                    <option hidden></option>
                    <option value='private'>Private</option>
                    <option value='sergeant'>Sergeant</option>
                    <option value='captain'>Captain</option>
                </select>
            </label>
            <br></br>
            <label>First Name:
                <input
                    required
                    className='formentry'
                    placeholder='Blank'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label>
            <br></br>
            <label>Last Name:
                <input
                    required
                    className='formentry'
                    placeholder='Blank'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </label>
            <br></br>
            <label>Assigned section:
                <select onChange={e => setSection(e.target.value)} value={section}
                    className='formentry' required>
                    <option hidden></option>
                    <option value='section-1'>section1</option>
                    <option value='section-2'>section2</option>
                    <option value='section-3'>section3</option>
                </select>
            </label>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddPersonnelForm;