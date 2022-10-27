import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categorycours from './Categorycours';

const Coursedetails = () => {
    const course = useLoaderData();
    
    return (
        <div>
          <h2> This catagory has {course.length} courses</h2>
          {
                   course.map(course=><Categorycours key={course._id}
                     course={course}></Categorycours>
            

                    )
}
         
        </div>
    );
};

export default Coursedetails;