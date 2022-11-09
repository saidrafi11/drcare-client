import React from 'react';

const ReviewCard = ({ reviews }) => {
    const { email, reviewMsg } = reviews;
    console.log(email, reviewMsg)
    const handleEditReview = event => {
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value
        const review = form.review.value
    
        console.log(email, review)
    
        const editReview = {
          email: email,
          review: review
    
        }
    }




    return (
        <div className="card w-full  shadow-xl">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <div className='flex justify-end m-5'>

                        
                        {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">open modal</label>

{/* Put this part before </body> tag */}
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
                    
                        
                        



                    </div>

                    <div>

                    </div>

                </div>
                <h2 className="card-title text-center">Review!!!</h2>
                <h2 className="card-title">Review: {reviewMsg}</h2>

                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default ReviewCard;