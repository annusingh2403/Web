import React, {useState} from 'react';
import './ProjectOne.css';

const MiniOne = () => {

  const [name, setName] = useState(null);
  const [print, setPrint] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setPrint(false);
  }

  return <>
      <div>
        <div>
           <p style={{color: 'steelblue'}}>Project One ➡️</p>
        </div>
        <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
            <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>W</span>elcome</p>
        </div>
        <div className='minione'>
            <input type="text" placeholder='Name' onChange={handleInput}/>
            <button type='submit' onClick={() => setPrint(true)}>enter</button>
            <div className='name'>
                {print ? <div>Welcome <span style={{color:'steelblue',fontFamily: 'Dancing Script',fontSize: '35px',marginLeft: '10px'}}>{name}</span> <img style={{width: '10rem'}} src="https://image.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-rain-gear_183364-81181.jpg" alt="" /></div> : null}
            </div>
        </div>
      </div>
  </>;
};

export default MiniOne;
