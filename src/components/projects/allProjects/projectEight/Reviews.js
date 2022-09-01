import React, {useState} from 'react';
import './ProjectEight.css';
import data from './ProjectEightData';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import {FaQuoteLeft} from 'react-icons/fa';


const Reviews = () => {

    const [index, setIndex] = useState(0);
    const {name,job,image,text} = data[index];

    const checkNumber = (number) => {
        if(number < 0){
            return data.length - 1;
        }if(number > data.length -1){
            return 0
        }
        return number;
    }

    const left = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const right = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const random = () => {
        let randomNumber = Math.floor(Math.random() * data.length);
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

  return  <div className='project-eight-box'>
                <div className='review-img'>
                    <img src={image} alt="" />
                </div>
                <div className='quote'>
                    <FaQuoteLeft/>
                </div>
                <div className='review-data'>
                    <h5>{name}</h5>
                    <p>{job}</p>
                </div>
                <div className='review-text'>
                    {text}
                </div>
                <div className='button'>
                <button onClick={left}>
                    <AiOutlineDoubleLeft/>
                </button>
                <button onClick={right}>
                    <AiOutlineDoubleRight/>
                </button>
                </div>
                <button className='random' onClick={random}>
                    Random Review
                </button>
        </div>
};

export default Reviews;
