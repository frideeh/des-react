import '../style/Login.css';

import React, { useState } from 'react';

function SignInUpForm() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignIn = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUp = () => {
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
          <input type="text" placeholder="User" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
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

// function App() {
//   return (
//     <div className="App">
//       {/* <h1 style={{color: a === 1 ? 'red' : 'black'}}>hello farideh</h1>
//       <div className="test">test</div> */}
//       {/* <div class="form-style">
//         <div class="login-box">
//           <h2>Log In</h2>
//           <form>
//             <label for="uname"><b>Username : </b></label>
//             <input type="text" placeholder="Enter Username" name="uname" required></input>
//             <label for="psw"><b>Password : </b></label>
//             <input type="password" placeholder="Enter Password" name="psw" required></input>
//             <button type="submit">Login</button>
//             <label> <input type="checkbox" checked="checked" name="remember"></input> Remember me </label>
//           </form>
//         </div>
//         <div class="signup-box">
//           <form>
//             <h2>Sign Up</h2>
//             <p>Please fill in this form to create an account.</p>
//             <label for="email"><b>Email : </b></label>
//             <input type="text" placeholder="Enter Email" name="email" required></input>

//             <label for="psw"><b>Password : </b></label>
//             <input type="password" placeholder="Enter Password" name="psw" required></input>
//             <label for="psw-repeat"><b>Repeat Password : </b></label>
//             <input type="password" placeholder="Enter Repeat Password" name="psw" required></input>
//             <button type="submit">Sign Up</button>
//             <label> <input type="checkbox" checked="checked" name="remember"></input> Remember me </label>
                    
//           </form>
//         </div>
        
//       </div> */}

//       <div class="container right-panel-active">
//         {/* Sign Up */}
//         <div class="container__form container--signup">
//           <form action="#" class="form" id="form1">
//             <h2 class="form__title">Sign Up</h2>
//             <input type="text" placeholder="User" class="input" />
//             <input type="email" placeholder="Email" class="input" />
//             <input type="password" placeholder="Password" class="input" />
//             <button class="btn">Sign Up</button>
//           </form>
//         </div>

//         {/* Sign In */}
//         <div class="container__form container--signin">
//           <form action="#" class="form" id="form2">
//             <h2 class="form__title">Sign In</h2>
//             <input type="email" placeholder="Email" class="input" />
//             <input type="password" placeholder="Password" class="input" />
//             <a href="#" class="link">Forgot your password?</a>
//             <button class="btn">Sign In</button>
//           </form>
//         </div>

//         {/* Overlay */}
//         <div class="container__overlay">
//           <div class="overlay">
//             <div class="overlay__panel overlay--left">
//               <button class="btn" id="signIn">Sign In</button>
//             </div>
//             <div class="overlay__panel overlay--right">
//               <button class="btn" id="signUp">Sign Up</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
export default SignInUpForm;