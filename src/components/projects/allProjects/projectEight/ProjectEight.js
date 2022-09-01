import React, {useState} from 'react';
import './ProjectEight.css';
import Reviews from './Reviews';

const ProjectEight = () => {
    
  return <>
            <div>
                <p style={{color: 'steelblue', width:'10rem'}}>Project Eight ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>R</span>eview's</p>
            </div>
            <div className='project-eight'>
                <Reviews/>
            </div>
        </>;
};

export default ProjectEight;
