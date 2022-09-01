import React, {useState} from 'react';
import Tour from './Tour';

const Tours = ({tours, handleClick, setReadMore, readMore, handleRemove}) => {

    

  return <div  className='tours-box'>
            {tours.map((tour) => {
            return( 
                <>
                    <Tour key={tour.id} {...tour} handleClick={handleClick} setReadMore={setReadMore} readMore={readMore} />   
                    
                </>
            )
            })}
        </div>;
};

export default Tours;
