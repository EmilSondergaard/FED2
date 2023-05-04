import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginFormStyle.css';
import './GeneralStyle.css'



export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Navigate= useNavigate();

    const handleLoginUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleLoginPassword = (e) => {
        setPassword(e.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let url = "https://localhost:7181/api/account/login";
        try {
            let response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    Email:username,
                    Password:password
                }), // Assumes data is in an object called form
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            });
            if (response.ok) {
                let token = await response.json();
                localStorage.setItem("token", token.jwt);
                // Change view to some other component
                // …
                Navigate("/yeah");
            } else {
                alert("Server returned: " + response.statusText);
            }
        } catch (err) {
            alert("Error: " + err);
        }
        return;
    
    }

    return (
        <form className='loginform' onSubmit={handleSubmit}>
            <label>Username:
                <input type="text" value={username} onChange={handleLoginUsername}></input>
            </label>

            <label>Password:
                <input type="text" value={password} onChange={handleLoginPassword}></input>
            </label>
            <button className='button' type='submit'>Log in</button>
            
        </form>
    )
}

