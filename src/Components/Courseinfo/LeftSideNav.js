import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     
     
     <li>{category.name}</li>
   </ul></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;