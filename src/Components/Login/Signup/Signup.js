import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { HashLoader } from 'react-spinners';
import useTitle from '../../../Hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';


const Signup = () => {
  const { createUser, providerLogin } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate();
  useTitle('Signup')
  const from = location.state?.from?.pathname || '/';


  const handleSignup = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value
    setLoading(true)
    console.log(name, email, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setLoading(false)
        navigate(from, { replace: true })
      })
      .catch(err => console.error(err))
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

    // Signup form


    <div className="min-h-screen w-full   bg-blue-400 flex justify-center ">
      <div className="md:w-4/5 lg:w-4/5 max-w-xl place-self-center">
        
        <div className="p-10  w-full   bg-base-100 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-900">Please Signup</h1>


          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">

              </label>
            </div>


            <div className="form-control mt-6">
              {
                loading ?
                  <>
                    <input className="btn btn-primary" type="submit" value="Signup"></input>

                    <div className='mt-5 mx-auto'>
                      <button onClick={handleGoogleSignIn} className="btn btn-wide ">Signup with google</button>
                    </div>
                  </>
                  :

                  // Conditinas
                  <>


                    <div>
                      <div className=' min-h-screen flex justify-center m-5'>
                        <HashLoader color="#36d7b7" />
                      </div>
                    </div>
                  </>
              }

            </div>
          </form>
          <p className='text-center pb-5'>Already have an account <Link className='font-semibold text-blue-800' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;