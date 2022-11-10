import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Context/AuthProvider';

const AddService = () => {
    const { user, loading } = useContext(AuthContext)
    const handleAddService = event => {
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
            reviews: [{}]

        }
        console.log(newService)
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        }).then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert('Services added success')
                    swal("Good job!", "You clicked the button!", "success");
                    console.log('Services added success')
                    form.reset();
                }
            })
            .catch(er => console.error(er))



    }

    return (
        <div className="flex justify-center min-h-screen">
            
            {
                user?.email ?
                    <>
                        <div >
                        <input className="" />
                            <div className="m-5 w-3/4">

                                <h2 className='text-4xl font-bold text-center p-5'>Add new services</h2>

                                <form onSubmit={handleAddService} >
                                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                                        <input name='title' type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
                                        <input name='imgURL' type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                                        <input name='price' type="text" placeholder="Price" className="input input-bordered w-full max-w-xs mb-3" />


                                    </div>
                                    <textarea name='description' className="textarea textarea-bordered h-24 w-full" maxlength="100" placeholder="Description (MAX 100 Character)"></textarea>


                                    <div className="modal-action">
                                        <input className='btn' type="submit" value="Add"></input>
                                        <label className="btn">Done</label>
                                    </div>
                                </form>




                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='flex align-middle '>

                        <div className="card w-full bg-base-100 shadow-xl max-h-96">
  <figure className="">
    <img src="https://img.freepik.com/free-vector/security-safety-icon_24911-44991.jpg?w=740&t=st=1668047406~exp=1668048006~hmac=509fa615480ababd0cdafd828126286d263731e00621207b0b9d21cd8c3e950f" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card items-center text-center pb-5 mt-0">
    <h2 className="card-title font-bold mb-5">Please login first</h2>
   


   {/* Login button */}

   
    <div className="card-actions">
      <button className="btn btn-outline btn-success"><Link to='/login'>Login</Link></button>
    </div>
  </div>
</div>








                            {/* <div className='w-2/4'><img src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1668045975~exp=1668046575~hmac=61a871ba941ba6880d9fdbc04cb5050ba9c7dc27008574f2d28b98b239ceec19'></img></div> */}
                        </div>

                    </>
            }
        </div>
    );
};

export default AddService;