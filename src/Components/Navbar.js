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


  const handleAddService= event =>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value
    const imgURL = form.imgURL.value
    
    const price = form.price.value;
    const description = form.description.value
console.log(title)
    const newService = {

      title: title,
      img: imgURL,
      price: price,
      description: description,
      reviews:[{}]

    }
    console.log(newService)
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
          'content-type' : 'application/json'
      },
      body: JSON.stringify(newService)
  }).then(res =>res.json())
  .then(data => {
      // console.log(data)
  if(data.acknowledged){
      alert('Services added success')
      swal("Good job!", "You clicked the button!", "success");
      console.log('Services added success')
      form.reset();
  }
  })
  .catch(er => console.error(er))



  }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
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
<label htmlFor="my-modal-6" className="btn btn-outline  btn-success btn-wide font-bold">+ Add service</label>


<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
<div className="modal-box relative">
<label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> 
<h2 className='text-4xl font-bold text-center p-5'>Add new services</h2>

<form onSubmit={handleAddService} >
<div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
<input name='title' type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
<input name='imgURL' type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
<input name='price' type="text" placeholder="Price" className="input input-bordered w-full max-w-xs mb-3" />


</div>
<textarea name='description' className="textarea textarea-bordered h-24 w-full" maxlength = "100" placeholder="Description (MAX 100 Character)"></textarea>


<div className="modal-action">
<input htmlFor="my-modal-6" className='btn' type="submit" value="Add"></input>
<label htmlFor="my-modal-6" className="btn">Done</label>
</div>
</form>




</div>
</div>



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