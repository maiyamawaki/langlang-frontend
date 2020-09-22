import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h3 class="homeText">Are you looking for someone <br />to practice the language you learn?
      <br />
      <h2>Just sign up!</h2>
      Use langlang to find someone suitable for you !</h3>
      <Link className="signup btn" to="/signup">Signup</Link>  
      <Link className="login btn" to="/login">Login</Link>
    </div>
  );
}

export default Home;