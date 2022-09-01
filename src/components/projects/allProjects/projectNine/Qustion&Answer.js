import React, {useState} from 'react';
import './ProjectNine.css';
import {FiMinus, FiPlus} from 'react-icons/fi';

const Qustion_Answer = ({title,info}) => {

    const [show, setShow] = useState(false);
    const [question, setQuestion] = useState(false);

    const handleClick = () => {
        setShow(!show);
        setQuestion(!question);
    }

  return <>
            <div className='project-nine-question-box'>
                <div className='project-nine-question'>
                    <h5>{title}</h5>
                    <div onClick={handleClick}>
                        <div className='project-nine-icon'>
                            {question ? <FiMinus/> : <FiPlus/>}
                        </div>
                    </div>
                </div>
                <div className={show ? 'project-nine-info' : 'hide'}>
                    <p>
                        {show && `${info}`}
                    </p>
                </div>
            </div>
            
        </>;
};

export default Qustion_Answer;
