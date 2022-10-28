import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Register from'../Components/Register/Register'
import Home from'../Components/Home/Home'
import About from'../Components/About/About';
import Login from '../Components/Login/Login'
import CouresMap from '../Components/Course/CouresMap';
import Coursedetails from '../Components/Course/Coursedetails';
import Courseinfo from '../CourseLayout/Courseinfo';

import CourseOne from '../Components/Course/CourseOne';



    export const routs = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
           
           path:'/register' ,
           element:<Register></Register> 
                },
                {
           
                 path:'/about' ,
                 element:<About></About>
                 },
                 {
           
                path:'/' ,
                element:<Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <Coursedetails></Coursedetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
                },
                {
                    path:'/course/:_id',
                    loader:({params})=>fetch(`http://localhost:5000/course/${params._id}`),
                    element:<CourseOne></CourseOne>
                    // <CourseMap>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/courseinfo',
                    element:<Courseinfo></Courseinfo>
                },
            ]

            
        }
    ])
  