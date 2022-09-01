import React, {useState, useRef, useEffect} from 'react';
import './ProjectThree.css';

const MiniThree = () => {

  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  const handleClick = (e) => {
      setResult(result.concat(e.target.name));
  }

  const backSpace = () => {
    setResult(result.slice(0, -1))
  }

  const clear = () => {
    setResult('');
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return <> 
      <div>
        <div>
            <p style={{color: 'steelblue', width:'10rem'}}>Project Three ➡️</p>
        </div>
        <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
            <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>C</span>al<span style={{color: "tomato"}}>c</span>ulator</p>
        </div>
        <div className='calc-app'>
            <form>
                <input type="text" value={result} ref={inputRef} placeholder='0'/>
            </form>
            <div className="keypad">
              <button id='clear' onClick={clear}>CLEAR</button>
              <button id='backspace' onClick={backSpace}>C</button>
              <button className='operator' name='+' onClick={handleClick}>+</button>
              <button name='7' onClick={handleClick}>7</button>
              <button name='8' onClick={handleClick}>8</button>
              <button name='9' onClick={handleClick}>9</button>
              <button className='operator' name='-' onClick={handleClick}>-</button>
              <button name='4' onClick={handleClick}>4</button>
              <button name='5' onClick={handleClick}>5</button>
              <button name='6' onClick={handleClick}>6</button>
              <button className='operator' name='*' onClick={handleClick}>*</button>
              <button name='1' onClick={handleClick}>1</button>
              <button name='2' onClick={handleClick}>2</button>
              <button name='3' onClick={handleClick}>3</button>
              <button className='operator' name='/' onClick={handleClick}>/</button>
              <button name='0' onClick={handleClick}>0</button>
              <button name='.' onClick={handleClick}>.</button>
              <button id='result' onClick={calculate}>=</button>
            </div>
        </div>
      </div>
  </>;
};

export default MiniThree;
