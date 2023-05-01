import React, {useState} from 'react'
import Axios from 'axios'
import './App.css';

const DelPage = () => {

    const [Id, setId] = useState(0);
    const [Mess, setmess] = useState()

    const submitDel = () => {
        Axios.post('http://localhost:3001/api/delete', {
            cID: Id
        }).then(() => {
            alert("1 Record Deleted. Reason: " + Mess)
        })
    }

  return (
    <div className='pageDel'>
    <form class="form-style-9">
        <h1>Delete Data</h1>
      <ul>
        <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder="Enter ID" required onChange={(e) => {
            setId(e.target.value)
          }} />
        </li>
        <li>
          <textarea name="field5" class="field-style" placeholder="Your Message" onChange={(e) => {
            setmess(e.target.value)
          }}></textarea>
        </li>
        <li>
          <input type="submit" value="Delete Data" onClick={submitDel}/>
        </li>
      </ul>
      </form>
    </div>
  )
}

export default DelPage;