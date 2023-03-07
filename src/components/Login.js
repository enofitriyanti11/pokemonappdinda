import React, {useState} from 'react'
import "./LoginStyle.css";

function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  return (
    <div class="py-10 mx-60">
        <div class="bg-white/25 p-5 rounded-lg">
          <div class="py-20">
            <h4 class="uppercase text-[#424372] text-4xl font-bold py-3 text-center"> Log In</h4>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">email</label>
                <input class=" items-center" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlfor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <div class="my-3">
                  <button type="button" class="inline-block px-20 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Login</button>
                </div>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>  
            </form> 
          </div>
        </div>
    </div>

  )
}

export default Login