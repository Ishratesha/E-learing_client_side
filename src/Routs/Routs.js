import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';

import Register from'../Components/Register/Register'
import Home from'../Components/Home/Home'
import About from'../Components/About/About';
import Login from '../Components/Login/Login'
import CouresMap from '../Components/Course/CouresMap';
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
                    path:'/course',
                    loader:()=>fetch('data.json'),
                    element:<CouresMap></CouresMap>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                }
            ]

            
        }
    ])
  