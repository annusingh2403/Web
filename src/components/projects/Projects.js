import React, { useState } from 'react';
import './Projects.css';
import data from './ProjectData';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';
import ProjectOne from './allProjects/projectOne/ProjectOne';
import ProjectTwo from './allProjects/projectTwo/ProjectTwo';
import ProjectThree from './allProjects/projectThree/ProjectThree';
import ProjectFour from './allProjects/projectFour/ProjectFour';
import ProjectFive from './allProjects/projectFive/ProjectFive';
import ProjectSix from './allProjects/projectSix/ProjectSix';
import ProjectSeven from './allProjects/projectSeven/ProjectSeven';
import ProjectEight from './allProjects/projectEight/ProjectEight';
import ProjectNine from './allProjects/projectNine/ProjectNine';
import ProjectTen from './allProjects/projectTen/ProjectTen';
import ProjectEleven from './allProjects/projectEleven/ProjectEleven';
import ProjectTwelve from './allProjects/projectTwelve/ProjectTwelve';
import Project13 from './allProjects/project13/Project13';
import Project14 from './allProjects/project14/Project14';
import Project15 from './allProjects/project15/Project15';


const Projects = () => {

    const [project, setProject] = useState(false);

    const [projectIndex, setProjectIndex] = useState(1);

    const [sidebar, setSidebar] = useState(true);

   

  return <>
      <div className='project'>
        <button className='showhide' onClick={() => setSidebar(!sidebar)}>👈</button>
        <div className={sidebar ? 'sidebar' : 'no-sidebar'}>
            <h5>PROJECTS</h5>
            <div className='project-list'>
                <button className='project-list-title' onClick={() => setProject(!project)}>REACT PROJECTS {project ? <AiOutlineArrowUp style={{marginLeft: '5px', color: "red", fontSize: '15px'}}/> : <AiOutlineArrowDown style={{marginLeft: '5px', color: "green", fontSize: '15px'}}/>}</button>
                <div className={`list-back ${project ? 'show' : 'hide'}`}>
                    
                        {data.map((item) => {
                            return(
                                <ul key={item.id} className='list-items'>
                                    <li  className={projectIndex === item.id ? 'active-tab tab' : 'tab'} onClick={() =>  setProjectIndex (item.id)}>
                                        {item.title}
                                    </li>
                                </ul>
                            )
                        })}
                </div>
            </div>
        </div>
        <div className="project-box">
            {projectIndex === 1 && <div> <ProjectOne/></div>}
            {projectIndex === 2 && <div> <ProjectTwo/></div>}
            {projectIndex === 3 && <div> <ProjectThree/></div>}
            {projectIndex === 4 && <div> <ProjectFour/></div>}
            {projectIndex === 5 && <div> <ProjectFive/></div>}
            {projectIndex === 6 && <div> <ProjectSix/></div>}
            {projectIndex === 7 && <div> <ProjectSeven/></div>}
            {projectIndex === 8 && <div> <ProjectEight/></div>}
            {projectIndex === 9 && <div> <ProjectNine/></div>}
            {projectIndex === 10 && <div> <ProjectTen/></div>}
            {projectIndex === 11 && <div> <ProjectEleven/></div>}
            {projectIndex === 12 && <div> <ProjectTwelve/></div>}
            {projectIndex === 13 && <div> <Project13/></div>}
            {projectIndex === 14 && <div> <Project14/></div>}
            {projectIndex === 15 && <div> <Project15/></div>}
        </div>
      </div>
  </>;
};

export default Projects;
