import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import BlogCards from './BlogCards';

const Blog = () => {
    const blogs = useLoaderData()
    useTitle('Blogs')
    return (
        <div className='p-5'>
          
            <div className="card w-full bg-base-100 shadow-xl">
  {
    blogs.map(b=><BlogCards id={b._id} blog={b}></BlogCards>)
  }
</div>

            
        </div>
    );
};

export default Blog;