import React, { useState } from "react";





import "./form.css";

const Register= () => {
  return(
    <div>
    <div className="alert-box">
        <p className="alert"> </p>
    </div>
    <div className="form">
        <h1 className="heading">Register</h1>
        <input type="text" placeholder="name" autocomplete="off" class="name" required/>
        <input type="email" placeholder="email" autocomplete="off" class="name" required/>
        <input type="password" placeholder="password" autocomplete="off" class="password" required/>
        <button className="submit-btn">register</button>
        <a href="/login" classNamse="link">Already have an account? Log in Here!</a>
        <script scr="./form.js"></script>
        
    </div>
    </div>
  );
};

export default Register