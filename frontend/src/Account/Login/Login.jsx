import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h2>Log in</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>

                <input value={email} onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="enter your username here" 
                    id="email" 
                    name="email">
                </input>

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="enter your password here" 
                    id="password" 
                    name="password">
                </input>

                <button id="login-button">log in</button>
            </form>

            <Link to="/Register" className="link-button" onClick={() =>props.onFormSwitch('register')}>
                don't have an account? register here.
            </Link>

        </div>
    )
}