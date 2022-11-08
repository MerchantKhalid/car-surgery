import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Shared/context/AuthProvider/AuthProvider';


const SignUp = () => {
    const {createUser}= useContext(AuthContext)
    const handleSignup = event=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        createUser(email,password)
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
    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
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
          
        </div>
        <div className="form-control mt-6">
          <input className='btn bg-orange-600 text-white border-none' type='submit' value='Sign Up'></input>
        </div>
     </form>
     <p className='font-bold text-center mb-5'>Already have an account ? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;