import React, {useState} from 'react';
import './ProjectTen.css';

const Categories = ({categories, filter}) => {

  return <>
            <div className='menu'>
                {categories.map((category,index) => {
                    return(
                        <ul  key={index}>
                            <li onClick={() => filter(category)}>{category}</li>
                        </ul>
                    )
                })}
                
            </div>
        </>;
};

export default Categories;
