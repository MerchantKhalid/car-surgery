import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Shared/context/AuthProvider/AuthProvider';

const Login = () => {
  const {login}  =useContext(AuthContext)
  const handleLogin = event=>{
      event.preventDefault()
      const form = event.target
      const email = form.email.value
      const password = form.password.value
      login(email,password)
      .then(result=>{
        const user= result.user
        console.log(user)
      })
      .catch(err=>console.error(err))
      
  }
    return (
        <div className="hero my-20 w-full">
  <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={loginImg} alt=''></img>

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className='btn bg-orange-600 text-white border-none' type='submit' value='Login'></input>
        </div>
     </form>
     <p className='font-bold text-center mb-5'>New to Car-Surgery ? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;