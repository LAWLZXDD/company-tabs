import React from 'react';
import { useState } from 'react';


function AddSoldier(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [section, setSection] = useState('');
    const [rank, setRank] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        alert(`${rank} ${firstName} ${lastName} to ${section}`);
        console.log(firstName);
        console.log(lastName);
        console.log(section);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <label>Rank:
                    <select onChange={e => setRank(e.target.value)} value={rank} required
                    className='formentry'>
                        <option hidden></option>
                        <option value='private'>Private</option>
                        <option value='sergeant'>Sergeant</option>
                        <option value='captaion'>Captain</option>
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddSoldier;