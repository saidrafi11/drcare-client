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
    <div className=" min-h-screen w-full   bg-blue-400 flex justify-center ">
      <div className="md:w-4/5 lg:w-4/5  max-w-xl place-self-center ">

        {/* login header */}

        


        {/* Login form */}


        <div className="p-10  w-full  shadow-2xl bg-base-100 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-900">Please login</h1>
          <form onSubmit={handleLogin} className="w-full">
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

              
            <div className="form-control mt-6">
            {
              loading ?
                <>

                  
                    <input className="btn btn-primary" type="submit" value="login"></input>

                  

                  <div className='mt-5 mx-auto'>
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
            </div>
          </form>


          <p className='text-center pb-5'>New user <Link className='font-semibold text-blue-800' to='/signup'>Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;