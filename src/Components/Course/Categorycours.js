import React from 'react';
import { Link } from 'react-router-dom';

const Categorycours = ({course}) => {
    const{title,thumbnail_url,total_view,rating,author,_id} = course
    return (
        <div>
                         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={thumbnail_url} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h3 className="text-3xl  dark:text-white font-bold">{title}</h3>
      <figcaption class="flex justify-center items-center space-x-3">
            <img class="w-9 h-9 rounded-full" src={author.img}alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>{author.name}</div>
                <div>Rating:{rating.number}</div>
      <div><h6>total Enrolled: {total_view}</h6></div> 
        </div>
        
        </figcaption>    
       
      <Link to={`/course/${_id}`} ><button className="btn btn-primary">Enroll Now</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Categorycours;