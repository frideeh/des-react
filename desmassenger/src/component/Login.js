import '../style/Login.css';
import * as API from '../API/ApiFunctions'
import React, { useEffect, useState } from 'react';


function SignInUpForm() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [UserName , setUserName] = useState('')
  const [Password , setPassword] = useState('')
  const [Email , setEmail] = useState('')

  const handleSignIn = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUp = () => {
    API.createRoom(UserName)
    setIsRightPanelActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
      {/* Sign Up */}
      <div className="container__form container--signup">
        <form action="#" className="form" id="form1" onSubmit={handleSubmit}>
          <h2 className="form__title">Sign Up</h2>
          <input 
          type="text" 
          placeholder="User Name" 
          className="input" 
          onChange={(e) => setUserName(e.target.value)}
          maxLength={22}
          />
          <input 
          type="email" 
          placeholder="Email" 
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          maxLength={22}
          />
          <input 
          type="password" 
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          maxLength={22}
          />
          <button className="btn">Sign Up</button>
        </form>
      </div>

      {/* Sign In */}
      <div className="container__form container--signin">
        <form action="#" className="form" id="form2" onSubmit={handleSubmit}>
          <h2 className="form__title">Sign In</h2>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <a href="#" className="link">Forgot your password?</a>
          <button className="btn">Sign In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className="container__overlay">
        <div className="overlay">
          <div className="overlay__panel overlay--left">
            <button className="btn" id="signIn" onClick={handleSignIn}>Sign In</button>
          </div>
          <div className="overlay__panel overlay--right">
            <button className="btn" id="signUp" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInUpForm;

