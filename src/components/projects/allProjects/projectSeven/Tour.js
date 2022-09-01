import React, {useState} from 'react';

const Tour = ({id,name,image,info,price,handleClick}) => {

  const [readMore, setReadMore] = useState(false);


  return <>
            <div className='tour-card'>
                    <div className='tour-img'>
                        <img src={image} alt="" />
                        <div className='tour-data'>
                            <div className='tour-title'>
                                <h5>{name}</h5>
                            </div>
                            <div className='tour-price'>
                                <p> $ {price}</p>
                            </div>
                        </div>
                        <div className='tour-info'>
                            {readMore ? info : `${info.substring(0, 250)}....`} 
                            <button className='readmore-button' onClick={() => setReadMore(!readMore)}>{readMore ? 'ReadLess' : 'ReadMore'}</button>
                        </div>
                    </div>
                    <div onClick={() => handleClick(id)} className='button'>
                        Not Interested
                    </div>
                    
                </div>
        </>;
};

export default Tour;
