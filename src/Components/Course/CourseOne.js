import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseOne = () => {
    const onecourse = useLoaderData()
    console.log(onecourse)
    return (
        <div>
            
              <div className="hero min-h-screen bg-base-200">
             
  <div className="hero-content flex-col ">
    <img src={onecourse.image_url} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{onecourse.title}</h1>
      <p className="py-6 text-xl">{onecourse.details}</p>
      <button className="btn btn-primary">Get premium access</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseOne;