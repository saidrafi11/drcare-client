import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { HashLoader } from 'react-spinners';
import useTitle from '../../Hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const { login, providerLogin } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate();
  useTitle('Login')
  const from = location.state?.from?.pathname || '/';

  const [loading, setLoading] = useState(true)

  const handleLogin = event => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value
    setLoading(true)
    console.log(email, password)

    login(email, password)
      .then(result => {
        const currentUser = result.user;
        console.log(currentUser)

        setLoading(false)
        navigate(from, { replace: true })
      })
      .catch(err => console.log(err))


  }


  const googleProvider = new GoogleAuthProvider();
  
  const handleGoogleSignIn = ()=>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user
        navigate(from, {replace: true})
        console.log(user)
    }).catch(error =>console.error(error))
}
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col ">

        {/* login header */}

        <h1 className="text-5xl font-bold">Login now!</h1>


        {/* Login form */}


        <div className="card  w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>

              

            {
              loading ?
                <>

                  <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="login"></input>

                  </div>

                  <div className='mt-5'>
                      <button onClick={handleGoogleSignIn} className="btn btn-wide">Login with google</button>
                    </div>

                  

                </>
                :
                <>

                {/* This is loader  */}

                
                  <div>
                    <div className=' min-h-screen flex justify-center m-5'>
                      <HashLoader color="#36d7b7" />
                    </div>
                  </div>
                </>
            }
          </form>


          <p className='text-center pb-5'>New user <Link to='/signup'>Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;