import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tbody from './Tbody';

const ServicesPage = () => {

    const [allServices, setService] = useState([])
console.log(allServices)
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
        console.log(data)
    if(data.acknowledged){
        alert('Order placed successfully')
        form.reset();
    }
    })
    .catch(er => console.error(er))



    }





    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])



    





    return (
        <div className="overflow-x-auto w-full">
          
          <div className='flex justify-end m-5'>

            {/* The button to open modal */}
<label htmlFor="my-modal-6" className="btn btn-outline  btn-success btn-wide font-bold">+ Add service</label>

{/* Put this part before </body> tag */}
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
    <input htmlFor="my-modal-6" className='btn' type="submit" value="Place order"></input>
      <label htmlFor="my-modal-6" className="btn">Done</label>
    </div>
            </form>
    

    
    
  </div>
</div>



          </div>

  <table className="table w-full">
  
    <thead>
      <tr>
        <th >
          <label >
            {/* <input type="checkbox" className="checkbox" /> */}
          </label>
        </th>
        <th className='ml-48'>Service Name</th>
        {/* <th>Job</th> */}
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    {
                    allServices.map(service => <Tbody key={service._id} service={service}></Tbody>)
                }

    
  </table>
</div>
    );
};

export default ServicesPage;