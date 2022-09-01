import React, {useState} from 'react';
import './ProjectTwo.css';

const MiniTwo = () => {

    const time = new Date()

    const newTime = {
            hour : time.getHours(),
            minute : time.getMinutes(),
            seconds : time.getSeconds()
        };
    
    const [currentTime, setCurrentTime] = useState(newTime);
    
    const updateTime = () => {
        const time = new Date()

        const updatedTime = {
                hour : time.getHours(),
                minute : time.getMinutes(),
                seconds : time.getSeconds()
            };
        setCurrentTime(updatedTime);
    }


    setInterval(() => {
        updateTime();
    }, 1000);

  return <>
      <div>
        <div>
            <p style={{color: 'steelblue', width:'10rem'}}>Project Two ➡️</p>
        </div>
        <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
            <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>D</span>igital <span style={{color: "tomato"}}> C</span>lock</p>
        </div>
        <div className='minitwo'>
            <h5 style={{color: 'green'}}>
            {currentTime.hour < 10 ? `0${currentTime.hour}` : currentTime.hour} :
            </h5>
            <h5 style={{color: 'orange'}}>
                {currentTime.minute < 10 ? `0${currentTime.minute}` : currentTime.minute} :  
            </h5>
            <h5 style={{color: 'red'}}>
                {currentTime.seconds < 10 ? `0${currentTime.seconds}` : currentTime.seconds}
                {/* {currentTime.seconds} */}
            </h5>
            <h5 style={{color: 'steelblue'}}>{currentTime.hour < 12 ? 'AM' : 'PM'}</h5>
        </div>
      </div>
  </>;
};

export default MiniTwo;
