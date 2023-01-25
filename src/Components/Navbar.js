import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from './Context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch()
  }


 

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="
      menu bg-base-100 w-56 menu-compact
      menu hover-bordered  dropdown-content mt-3 p-2 shadow   
      
      ">
        <li><Link to='/'>Home</Link></li>
        
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
        user?.email ?
        <>
        
        <li><Link to='/myreviews'>My Reviews</Link></li>
        <li className='font-semibold'>
              <button onClick={handleLogOut } className='btn-ghost'>Sign out</button>
            </li>

        </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        </>
      }
        
  
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl md:text-2xl lg:text-3xl text-blue-900 font-bold">Dr Care</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-blue-900 font-bold">
      <li><Link to='/'>Home</Link></li>
      
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/services'>Services</Link></li>
      {
        user?.email ?
        <>
        
        <li><Link to='/myreviews'>My Reviews</Link></li>
        <li className='font-semibold'>
              <button onClick={handleLogOut } className='btn-ghost'>Sign out</button>
            </li>

        </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        </>
      }
      
    </ul>
  </div>
  {
    user?.email?
    <>
    
    <div className="navbar-end">
  <div className='flex justify-end m-5'>

{/* The button to open modal */}
<Link to='/addservices' htmlFor="my-modal-6" className="btn btn-outline  btn-success btn-wide font-bold">+ Add service</Link>






</div>
  </div>

    </>
    :

    <>
    
    </>
  }
</div>
    );
};

export default Navbar;