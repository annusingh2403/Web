import React, {useState, useEffect} from 'react'
import './ProjectEleven.css';
import {FaAngleDoubleRight} from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project'

const ProjectEleven = () => {

    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs();
    }, []);

    if(loading) {
        return (
            <section>
                Loading...
            </section>
        )
    }

    const {company, dates, duties, title} = jobs[value];

  return (
            <>
                <div>
                    <p style={{color: 'steelblue'}}>Project Eleven ➡️</p>
                </div>
                <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                    <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>T</span>abs</p>
                </div>
                <div className='project-eleven'>
                    <div className='project-eleven-left'>
                        {jobs.map((job, index) => {
                            return(
                                <>
                                    <div className={`${index === value && 'border-left'}`}>
                                    </div>
                                    <div className={ `button ${index === value && 'active'}`} key={job.id} onClick={() => setValue(index)}>
                                            {job.company}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className='project-eleven-right'>
                        <h4>{title}</h4>
                        <h5>{company}</h5>
                        <p className='dates'>{dates}</p>

                        {duties.map((duty, index) => {
                            return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className='job-icons'>
                                </FaAngleDoubleRight>
                                    <p>{duty}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </>
  )
}

export default ProjectEleven