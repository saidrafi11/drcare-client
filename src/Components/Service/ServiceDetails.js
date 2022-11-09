import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const ServiceDetails = () => {
  const { title, img, description, price, _id, reviews} = useLoaderData();
console.log(reviews)
  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;
    
    const email = form.email.value
    const review = form.review.value

    console.log(email, review)

    const addReview = {
      email: email,
      review: review

    }
    fetch(`http://localhost:5000/services/${_id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(addReview)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

  }




  return (
    <div>
      <div className='p-5 w'>
        <div className="card w-full bg-base-100 shadow-xl">
          {/* <figure><img src={img} alt="Shoes" /></figure> */}
          
          
    <div>
    <PhotoProvider pullClosable={true} maskClosable={false}>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
    </div>

          {/* <figure><img src={img} alt="Shoes" /></figure> */}
          <div className="card-body">
            <h2 className="card-title text-3xl">{title}</h2>
            <h2 className="card-title">${price}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
          {/* Review section */}

        </div>
      </div>
      <div>
        <div className="hero m-5" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/emoji-framed-background_53876-90482.jpg?w=900&t=st=1667955046~exp=1667955646~hmac=9787999ecf85663b29ed95be69b11dcaceebb8d0dc02d7a6259ebff2447eb3e0")` }}>
          <div className="hero-overlay bg-opacity-40 "></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Review section</h1>



              <div className='flex justify-end m-5'>

                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn   btn glass btn-wide font-bold">+ Add review</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box relative">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='text-4xl text-black font-bold text-center p-5'>Add a review</h2>

                    <form onSubmit={handleAddReview}>
                      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-3'>
                        <input name='email' type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />




                      </div>
                      <textarea name='review' className="textarea textarea-bordered h-24 w-full text-black" maxlength="100" placeholder="Add your review message"></textarea>


                      <div className="modal-action">
                        <input htmlFor="my-modal-6" className='btn' type="submit" value="Submit"></input>
                        <label htmlFor="my-modal-6" className="btn">Done</label>
                      </div>
                    </form>




                  </div>
                </div>



              </div>


            </div>
          </div>
        </div>
      </div>

      <div className='m-5'>
        {
          reviews.map(r=><ReviewCard reviews={r}></ReviewCard>)
        }
      </div>
    </div>
  );
};

export default ServiceDetails;