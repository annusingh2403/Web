import React, {useState, useEffect} from 'react';
import './ProjectSix.css'
import data from './ProjectSixData';

const ProjectSix = () => {

    const [person, setPerson] = useState(data);
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(data.length);

    const [status, setStatus] = useState('all');
    const [filteredItems, setFilteredItems] = useState([]);


    const clearAll = () => {
        setPerson([]);
        setShow(!show);
    }

    const reset = () => {
        setPerson(data)
        setShow(!show);
    }

    var date = new Date();
    
    var month = date.getMonth() + 1; //months from 1-12
    var day = date.getDate();
    var year = date.getFullYear();


    const newdate = day + "/" + month;


    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    useEffect(() => {
        filterHandler();
    }, [person, status]);

    const filterHandler = () => {
        switch(status){
            case 'today':
                let newPerson = person.filter((item) => item.date === newdate);
                setFilteredItems(newPerson);
                setCount(newPerson.length);
                break;
            default:
                setFilteredItems(person);
                setCount(data.length);
                break; 
        }
    }

    // let dob = 'July 6, 1997';

    // const millisecondsOfDob = Date.parse(dob);
    // const millisecondsOfCurrentTime = Date.now();
    // const ageInMilliseconds = millisecondsOfCurrentTime - millisecondsOfDob;

    // let milliSeconds = ageInMilliseconds;
    // let second = 1000;
    // let minute = second*60;
    // let hour = minute*60;
    // var day = hour*24;
    // var month = day*30;
    // var year = day*365;

    // let years = Math.round(milliSeconds/year);
    // let months = years/12;
    // let days = year*365;
    // let hours = Math.round(milliSeconds/hour);
    // let seconds = Math.round(milliSeconds/second);

    // console.log(years);


  return <>
            <div>
                <p style={{color: 'steelblue'}}>Project Six ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>B</span>irthday <span style={{color: "tomato"}}>R</span>eminder</p>
            </div>

            <div className='project-six'>
                {/* <div>
                    <p style={{color: 'white'}}>{status === 'all' ? "Total Number of Birthday's" : "Number Of Birhtday's Today: <span style={{backgroundColor: 'white', color:'steelblue', padding:'0 8px 0 8px', borderRadius: '5px', fontWeight:'600'}}>{count}</span>"}</p>
                </div> */}

                <div style={{color: 'white'}}>
                    <p>{status === 'all' ? `Total Number of Birthday's : ${count}` : `Number Of Birthday's Today : ${count}`}</p>
                </div>
                
                <div className='project-six-select select'>
                        <select name="items" className="filter-item" onChange={handleStatus}>
                        <option className='option' value="all">All</option>
                        <option value="today">Today's</option>
                        </select>
                    </div>
                <div>
                {filteredItems.map((user) => {
                    return (
                        <>
                            <div key={user.id} className='main'>
                                <div key={user.id} className='img-box'>
                                    <img src={user.img} alt="user image" />
                                </div>
                                <div className='data-box'>
                                    <h5>{user.name}</h5>
                                    <p>Age : {year - user.year}</p>
                                </div>
                            </div>
                        </>
                        )
                    })}
                    {show ? <button onClick={clearAll}>
                        {show ? 'clear all' : 'show all'}
                    </button> : <button onClick={reset}>
                        show all
                    </button>}
                </div>
            </div>
                
                    

            

                    
        </>;
};

export default ProjectSix;
