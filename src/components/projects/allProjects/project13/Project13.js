import React, {useState} from 'react'
import Alert from './Alert';
import './Project13.css';


const Project13 = () => {

    const [text, setText] = useState('');
    const [alert, setAlert] = useState(null);

    const showAlert = (msg) => {
            setAlert({
                msg:msg
            })
            setTimeout(() => {
                setAlert(null);
            }, 2000);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert('Uppercase');
        
    }

    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        showAlert('Lowercase');

    }

    const handleCapitalize = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        showAlert('Capitalized');
    }

    const handleClear = () => {
        let newText = ('');
        setText(newText);
        showAlert('Text Cleared');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();


        showAlert('Coppeid to ClipBoard');
    }   

  return (
		<>
			<div>
                <p style={{color: 'steelblue'}}>Project Thirteen ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>T</span>ext <span style={{color: "tomato"}}>U</span>tils</p>
            </div>
            <div className="project13">
                <h5>Enter the text below to Analyze</h5>
            <div className='alert-box'>
                {alert ? <Alert alert={alert}/> : null}
            </div>
                <textarea id="text" cols="100" rows="10" value={text} onChange={handleOnChange} placeholder="Type your text here"></textarea>
            </div>
            <div className='project13-btn'>
                <button disabled={text.length === 0} onClick={handleUpper}>UpperCase</button>
                <button disabled={text.length === 0} onClick={handleLower}>LowerCase</button>
                <button disabled={text.length === 0} onClick={handleCapitalize}>Capitalize</button>
                <button disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} style={{backgroundColor: "orangeRed"}} onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container">
                <h5 style={{}}>Summary</h5>
                <p>Words : {text.trim().split(/\s+/).filter((element) => {return element.length !== 0}).length}</p>
                <p>Characters : {text.length}</p>
                <p>Read Time : {(0.002 * text.length).toFixed(2)} Minutes</p>
            </div>
		</>
	);
} 

export default Project13
