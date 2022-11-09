import React from 'react';

const BlogCards = ({blog}) => {
    const {Q, A} = blog
    return (
        <div className="card-body m-5">
    <h2 className="card-title">{Q}</h2>
    <p>{A}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
    );
};

export default BlogCards;