import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewCard = ({ reviews }) => {
  const { _id } = useLoaderData()
  console.log(_id)
  const { id, email, review, imgURL } = reviews;
  console.log(id, email, review)



  const handleEditReview = event => {
    event.preventDefault();
    const form = event.target;
    const ids = id
    const email = form.email.value
    const review = form.review.value

    console.log(ids, email, review)

    const editReview = {
      email: email,
      review: review

    }
  
  }

  




  return (
    <>
      <div className="m-2 p-2 bg-white w-96 rounded-sm drop-shadow-md">
        <div className='w-full flex justify-end'>
          <label htmlFor="my-modal-3" className="btn btn-xs">Edit</label>
        </div>
        <div className='h-16 '>
          <img className='w-16 mx-auto rounded-full' src={imgURL}></img>

        </div>
        <h1 className='text-center font-semibold text-sm'>{email}</h1>
        <div className='w-full  min-h-fit text-center p-2 break-words'>
          <h1><span style={{
            fontFamily: "Times New Roman"
          }} className='text-3xl font-extrabold text-blue-900'>"</span><span className='font-bold text-normal'>{review}</span> </h1>

        </div>


      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <form onSubmit={handleEditReview}>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-3'>
              <input name='email' type="Email" placeholder="Email" className="input input-bordered w-full max-w-xs" />




            </div>
            <textarea name='review' className="textarea textarea-bordered h-24 w-full text-black" maxlength="100" placeholder="Add your review message"></textarea>


            <div className="modal-action">
              <input htmlFor="my-modal-3" className='btn' type="submit" value="Submit"></input>
              <label htmlFor="my-modal-3" className="btn">Done</label>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default ReviewCard;