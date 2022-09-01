import React, {useState} from 'react';
import './ProjectTwelve.css';
import data from './ProjectTwelveData';

const ProjectTwelve = () => {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

  return (
        <>
            <div>
                <p style={{color: 'steelblue'}}>Project Twelve ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>S</span>lider</p>
            </div>
            {/* <div className="p12">
                {people.map((person, personIndex) => {

                    const {id, image, name, job, text} = person;

                    let position = 'nextSlide';

                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return(
                        <article key={id} className={position}>
                            <img className='person-img' src={image} alt="" />
                            <h5>{name}</h5>
                            <p>{job}</p>
                            <p>{text}</p>
                        </article>
                    )
                })}
                <button onClick={() => setIndex(index - 1)}>left</button>
                <button onClick={() => setIndex(index + 1)}>right</button>
            </div> */}
        </>
  )
}

export default ProjectTwelve