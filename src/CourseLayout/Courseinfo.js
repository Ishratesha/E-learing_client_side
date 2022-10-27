import React from 'react';
import { Outlet } from 'react-router-dom';
import CouresMap from '../Components/Course/CouresMap';
import Course from '../Components/Course/Course';
import LeftSideNav from '../Components/Courseinfo/LeftSideNav'

const Courseinfo = () => {
    return (
      
        <div>
      
     
      <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     
      
      <LeftSideNav></LeftSideNav>
    </ul>
  
  <div>
    </div>
    </div>
</div>

    );
};

export default Courseinfo;