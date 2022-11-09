import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {login }= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';



    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        login (email, password)
        .then(result =>{
            const currentUser = result.user;
         console.log(currentUser) 

        
         navigate(from, {replace: true})  
        })
        .catch(err =>console.log(err))


    } 
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="login"></input>
               
              </div>
            </form>
            <p className='text-center pb-5'>New user <Link to='/signup'>Signup</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;