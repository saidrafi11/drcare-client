import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider';
import ReviewCard from './ReviewCard';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext)
  const { title, img, description, price, _id } = useLoaderData();
  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || `/services/${_id}`;
  console.log(user)
  useTitle('Service Details')

 

  const { data: review = [], refetch, isLoading } = useQuery({
    queryKey: ['serviceID'],
    queryFn: async () => {
        const res = await fetch(`https://y-chi-neon.vercel.app/reviews/${_id}`);
        const data = await res.json();
        return data;
    }

})
console.log(review);


  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value
    const imgURL = form.imgURL.value
    const review = form.review.value
 const ID = _id
    console.log(ID,email, review, imgURL)
    
    const addReview = {
      
      serviceID: ID,
      email: email,
      imgURL: imgURL,
      review: review

    }
   
    axios.post('https://y-chi-neon.vercel.app/add-review', addReview )
      .then(function (response) {
        console.log(response);
        refetch()
      })
      .catch(function (error) {
        console.log(error);
      });



  }




  return (
    <div className=''>
      <div className='p-5 '>
        <div className="w-full">
          <img className='w-fit mx-auto max-h-80' src={img} alt="" />


          {/* <figure><img src={img} alt="Shoes" /></figure> */}


          <div>
            <PhotoProvider pullClosable={true} maskClosable={false}>
              <PhotoView src={img}>

              </PhotoView>
            </PhotoProvider>
          </div>

          {/* <figure><img src={img} alt="Shoes" /></figure> */}



          <div className="p-5 text-center">
            <h2 className="font-bold text-3xl">{title}</h2>
            <h2 className="font-semibold">${price}</h2>
            <p>{description}</p>
            <div className="card-actions justify-center p-2">
              <Link to={`/services/confirm-order/${_id}`} style={{ backgroundImage: ' radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )' }} className="btn btn-wide drop-shadow-sm border-none text-blue-900 font-bold">Subscribe Now</Link>
            </div>
          </div>


          {/* Review section */}

        </div>
      </div>
      <div>
        <div className="hero my-2" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/emoji-framed-background_53876-90482.jpg?w=900&t=st=1667955046~exp=1667955646~hmac=9787999ecf85663b29ed95be69b11dcaceebb8d0dc02d7a6259ebff2447eb3e0")` }}>
          <div className="hero-overlay bg-opacity-40 "></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Review section</h1>



              <div className='flex justify-end m-5'>

                {/* The button to open modal */}

                {
                  user?.email ?
                    <>
                      <label htmlFor="my-modal-6" className="  btn glass btn-wide font-bold">+ Add review</label>

                    </>
                    :
                    <>
                      <div className="tooltip tooltip-open tooltip-error" data-tip="Please login first">
                        {/* <button className="btn btn-error">error</button> */}
                        <label className="btn glass btn-wide font-bold">+ Add review</label>
                      </div>
                    </>

                }


                {/* Put this part before </body> tag */}

              </div>
            </div>


          </div>

        </div>
        {/* <div>ksdhf</div> */}
      </div>


      {/* Review cards  */}


      <div className='flex justify-center flex-wrap mx-auto'>
        {
          review.map(r => <ReviewCard reviews={r}></ReviewCard>)
        }

      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle  ">
        <div className="bg-white lg:p-10 p-5 rounded-md lg:w-2/3 md:w-3/4 w-5/6 relative">
        
          <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h2 className='text-2xl text-black font-bold text-center p-2'>Add a review</h2>

          <form onSubmit={handleAddReview}>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-3 '>
              <input name='email' type="Email" placeholder="Email" className="input text-black  w-full max-w-xs" defaultValue={user?.email} />
              <input name='imgURL' type="text" placeholder="imgURL" className="input text-black input-bordered w-full max-w-xs hidden" defaultValue={user?.photoURL} />




            </div>
            <textarea name='review' className="textarea textarea-bordered h-24 w-full text-black" maxlength="300" placeholder="Add your review message"></textarea>


            <div className="modal-action">
              <input htmlFor="my-modal-6" className='btn' type="submit" value="Submit"></input>
              <label htmlFor="my-modal-6" className="btn">Done</label>
            </div>
          </form>
        
        </div>
        
      </div>


    </div>
  );
};

export default ServiceDetails;