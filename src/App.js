import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import './App.css';

function App() {
  const [fullname, setFullname] = useState('');
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [gender, setGender] = useState('');
  const [num, setNum] = useState(0);

  const allfunctions = {
    submitInsert: function () {
      try {
        Axios.post('http://localhost:3001/api/insert', {
          Fname: fullname,
          Uname: uname,
          Mail: email,
          Pnum: num,
          Pass: pass,
          Gender: gender,
        })
        .then(() => {
           console.log("1 Record Added")
        });
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="App">
      <div class="container">
        <div class="title">Insert Data</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required onChange={(e) => {
                  setFullname(e.target.value)
                }}></input>
              </div>
              <div class="input-box">
                <span class="details">Username</span>
                <input type="text" placeholder="Enter your username" required onChange={(e) => {
                  setUname(e.target.value)
                }}></input>
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="text" placeholder="Enter your email" required onChange={(e) => {
                  setEmail(e.target.value)
                }}></input>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required onChange={(e) => {
                  setNum(e.target.value)
                }}></input>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required onChange={(e) => {
                  setPass(e.target.value)
                }}></input>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required></input>
              </div>
            </div>
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1" onClick={() => {
                setGender("Male")
              }}></input>
              <input type="radio" name="gender" id="dot-2" onClick={() => {
                setGender("Female")
              }}></input>
              <input type="radio" name="gender" id="dot-3" onClick={() => {
                setGender("Others")
              }}></input>
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Others</span>
                </label>
              </div>
            </div>
            <div class="button">
              <input type="submit" value="Insert Data" onClick={allfunctions.submitInsert}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
