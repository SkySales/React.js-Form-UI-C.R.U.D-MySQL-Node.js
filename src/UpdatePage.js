import React, {useState} from 'react'
import Axios from 'axios'
import './App.css';

const UpdatePage = () => {
    const [name, setName] = useState('')
    const [uname, setUname] = useState('')
    const [gender, setGender] = useState('')
    const [Id, setId] = useState(0)

    const submitUpdate = () => {
        Axios.post('http://localhost:3001/api/update', {
            colData1: name,
            colData2: uname,
            colData3: gender,
            uID: Id,
        }).then(() => {
            alert("Success Update")
        })
    }

  return (
    <div className='pageUpdate'>
    <form class="form-style-9">
        <h1>Update Data</h1>
      <ul>
        <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder="Update Full Name" required onChange={(e) => {
                setName(e.target.value)
            }} />
            <p>: If None, same = same</p>
        </li>

        <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder="Update Username" required  onChange={(e) => {
                setUname(e.target.value)
            }} />
            <p>: If None, same = same</p>
        </li>

        <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder="Update Gender" required  onChange={(e) => {
                setGender(e.target.value)
            }} />
            <p>: If None, same = same</p>
        </li>

        <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder="Enter ID of User" required onChange={(e) => {
                setId(e.target.value)
            }} />   
        </li>
        <li>
          <input type="submit" value="Update Data" onClick={submitUpdate}/>
        </li>
      </ul>
      </form>
    </div>
  )
}

export default UpdatePage