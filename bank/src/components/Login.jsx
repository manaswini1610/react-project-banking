import React from 'react';


function Login() {
  return (
    <section id="login" className='loginpage border-color:bg-blue-gradient' >
           <h1 className='login text-gradient'>Login page</h1> 
          
		
			<label className='username'>Username:</label>
			<input type="text" id="username" class="login-input" required/>

			<label for="password">Password:</label>
			<input type="password" id="password" class="login-input" required/>

			<button type="submit" class="login-button" onclick="window.location.href='userpage.html'">Login</button>
			<button type="button" class="register-button" onclick="window.location.href='register.html'">Register</button>
		
    </section>

     
    
     
    
  )
}

export default Login
