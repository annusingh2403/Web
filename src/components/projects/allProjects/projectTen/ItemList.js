import React from 'react';
import './ProjectTen.css';

const ItemList = ({items}) => {


  return <>
            {items.map((item) => {
                return(
                    <div key={item.id} className='pten-img'>
                        <img src={item.image} alt=""/>
                            <div className="text">{item.category}</div>
                    </div>
                )
            })}
         </>;
};

export default ItemList;
