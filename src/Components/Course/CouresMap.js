import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const CouresMap = () => {
    const course = useLoaderData()
    return (
        <div>
            {
            course.map(course=><Course key={course._id}
            course={course}
           
            ></Course>)
           }
        </div>
    );
};

export default CouresMap;