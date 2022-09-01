import React, {useState} from 'react';
import './ProjectNine.css';
import Qustion_Answer from './Qustion&Answer';
import data from './ProjectNineData';

const ProjectNine = () => {

    const [question, setQuestion] = useState(data);

  return <>
           <div>
                <p style={{color: 'steelblue', width:'10rem'}}>Project Nine ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>A</span>ccordion</p>
            </div>
            <div className='project-nine'>
                <div className='project-nine-left'>
                    <h5>Question & Answer</h5>
                </div>
                <div className='project-nine-right'>
                {question.map((question) => {
                    return  <Qustion_Answer key={question.id} question={question} {...question}/>
                })}
                </div>
            </div>
        </>;
};

export default ProjectNine;
