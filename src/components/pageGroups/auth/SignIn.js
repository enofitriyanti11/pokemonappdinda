import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./SigninStyle.css";

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div class="py-28 mx-60">
      <div class="bg-white/25 p-5 rounded-lg">
        <div className="auth-for-container">
          <h4 class="uppercase text-[#424372] text-4xl font-bold py-3 text-center"> Sign In</h4>
          <form className="signin-form" onSubmit={handleSubmit}>
            <label htmlfor="email">email</label>
            <input class=" items-center" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlfor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <div class="my-3">
              <button type="button" class="inline-block px-20 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Login</button>
            </div>
            <Link to="/SignUp">
              <button className="link-btn">Don't have an account? Sign Up</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn