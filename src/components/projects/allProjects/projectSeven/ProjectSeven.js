import React, {useState, useEffect} from 'react';
import './ProjectSeven.css';
import Loading from './Loading';
import Tours from './Tours';
const  url = 'https://course-api.com/react-tours-project';


const ProjectSeven = () => {
  
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const handleClick = (id) => {
      setTours(tours.filter((item) => item.id !== id))
  }
  
    if(loading) {
        return(
          <div style={{margin: '15rem 0px 0px 35rem'}}>
              <Loading/>
          </div>
        )
    }
    if(tours.length === 0){
        return(
            <>
                <div>
                    <p style={{color: 'steelblue'}}>Project Seven ➡️</p>
                </div>
                <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>T</span>our's</p>
            </div>
            <div className='no-tours'>
                <h5>No Tours Left</h5>
                <button onClick={fetchTours}>Refresh</button>
            </div>

            </>
        )
    }
    return(
    <>
        <div>
            <p style={{color: 'steelblue'}}>Project Seven ➡️</p>
        </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
            <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>T</span>our's</p>
        </div>

        <div className='tours'>
            <Tours tours={tours} handleClick={handleClick} />
        </div>

    </>
    )
};

export default ProjectSeven;
