import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profileimage from "./image/5518603.jpg";
import App from './App';
import reportWebVitals from './reportWebVitals';
let name = "Amos";
let mark1 = 100;
let marks2 = 89;  
let total = mark1+marks2;
let width=800;
let heigth =500;
const studentDetails={
  theme:{
    backgroundColor:"#0394fc",
    color:"#0c293d",
    borderRadius:"10px solid #02101a",
    width:"25%",
  },address:"Chennai",Marks:300,
  courses:{
    course1:"python",
    course2:"java",
    course3:"react",
  },
}
const Profile=()=>{return(
  <>
  <center><div style={{backgroundColor:'green',color:'white',border:'4px',borderRadius:'3px'}}>
    <h1>Profile Name</h1>
  <img src={profileimage} alt='profile upload failed' width={width} height={heigth}/>
  <h3>sub title of profile</h3>
  <u><li>points 1 of profile</li><li>points 2 of profile</li><li>points 3 of profile</li></u>
  </div></center>
  </>)
}
const Student=()=>{
  return(
    
    <><h1>Student list</h1>
    <ul><li>{name}</li><li>{mark1}</li><li>{marks2}</li><li>{total}</li></ul>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <> <studentDetails.address/><Profile/> <Student></Student>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <center>
  <div><h1>This is my app</h1><p>I am a full stack developer....</p></div>
  <div><h1>This is my app</h1><p>I am a full stack developer....</p></div> </center></>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
