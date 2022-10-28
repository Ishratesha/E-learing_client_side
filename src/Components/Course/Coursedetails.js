import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categorycours from './Categorycours';
import LeftSideNav from '../Courseinfo/LeftSideNav'
const Coursedetails = () => {
    const course = useLoaderData();
    
    return (
        <div>
          <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-96 card bg-base-300 rounded-box place-items-center"><LeftSideNav></LeftSideNav></div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-46 card bg-base-300 rounded-box place-items-center">
  <h2> This catagory has {course.length} courses</h2>
   <div className=''>
   {
                   course.map(course=><Categorycours key={course._id}
                     course={course}></Categorycours>
            

                    )
}
   </div>
  </div>
</div>
        
         
        </div>
    );
};

export default Coursedetails;