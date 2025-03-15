/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from "react"
import Home from "./Home";


function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:6000/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({ email, password }),

            });

            const data = await response.json();

            if (response.ok){
                alert(data.message);
            }
            else{
                alert("Login failed: " + data.error);
            }


            
        }

        catch(error){
            alert("An error occurred: " + error.message);
        }
    };

   


    return(
        <div id="log_block">
            

            <form action="submit">
                <input 
                type="email" 
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>

                <br />
                <br />

                <input 
                type="password"
                id="password"
                placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>

                <br />
                <br />

                <button type="submit" >Login</button>

            </form>
        </div>
    );

};

export default Login