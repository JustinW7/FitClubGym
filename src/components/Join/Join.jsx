import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'
const Join = () => {
  const form=useRef ()
  const sendEmail=(e) => {
    e.preventDefault();

emailjs.sendForm('service_h8k01ue','template_55jd2bb',form.current,'7ZI6CsE-BLLixLyqo')
.then((result)=>{
  console.log(result.text);
  },(error) =>{
    console.log(error.text);
  });
};




  
  return (
    <div className="Join" id="join-us">
    <div className="left-j"> 
    <hr/>
      <div>
      <span className="stroke-text"> Ready To </span> 
      <span>Level Up </span>
      </div>  
      <div>
        <span>Your Body</span>
        <span className="stroke-text">With Us?</span>
      </div>
      </div>
    <div className="right-j">
    <form ref={form} className="email-container" onSubmit={sendEmail}> 
    <input type="email" name="user_email" placeholder="Enter your email"/>
    <button className="btn btn-j">Join Now</button> 
    </form>
   
    </div>
    </div>
  )
}

export default Join