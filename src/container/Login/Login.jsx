import React from 'react'
import './Components.css'


const Login = () => {
  const [signIn, toggle] = React.useState(true);

  return (
    <div class='Container'>
      <div class='SignUpContainer' signinIn={signIn}>
        <form>
          <title>Create Account</title>
          <input required type='text' placeholder='Name' />
          <input required type='email' placeholder='Email' />
          <input required type='password' placeholder='Password' />
          <button>Sign Up</button>
        </form>
      </div>
   
      <div class='SignInContainer' signinIn={signIn}>
        <form>
          <title>Sign in</title>
          <input required type='email' placeholder='Email' />
          <input required type='password' placeholder='Password' />
          <a href='#'>Forgot your password?</a>
          <button>Sigin In</button>
        </form>
      </div>
   
      <div class='OverlayContainer' signinIn={signIn}>
        <div class='Overlay' signinIn={signIn}>
   
          <div class='LeftOverlayPanel' signinIn={signIn}>
            <title>Welcome Back!</title>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <div class='GhostButton' onClick={() => toggle(true)}>
              Sign In
            </div>
          </div>
   
          <div class='RightOverlayPanel' signinIn={signIn}>
            <title>Hello, Friend!</title>
            <p>
              Enter Your personal details and start journey with us
            </p>
            <button class='GhostButton' onClick={() => toggle(false)}>
              Sigin Up
            </button> 
          </div>
     
        </div>
      </div> 
   
    </div>
  )
}

export default Login