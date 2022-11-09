import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const {createUser}=useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    } 
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold">Signup now!</h1>
          <div className="card  w-full  ">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Signup"></input>
               
              </div>
            </form>
            <p className='text-center pb-5'>Already have an account <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;