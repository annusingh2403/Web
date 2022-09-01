import React, {useState} from 'react';
import {FaPlus} from 'react-icons/fa';

const Form = ({setInputText, items, setItems, inputText, setStatus, added}) => {

    
    
    const handleInput = (e) => {
        setInputText(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputText){
            alert('Input is Empty')
        }else{
            setItems([
                ...items,
                { text: inputText, completed: false, id: Math.random() * 1000 }
            ]);
        }
        setInputText('');
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

  return <>
        <div style={{width: '30rem',display:'flex'}}>
            <form className='form'>
                <input value={inputText} onChange={handleInput} type="text" />
                <button onClick={handleSubmit}><FaPlus/></button>
            </form>
            <div className='select'>
                <select name="items" className="filter-item" onChange={handleStatus}>
                    <option className='option' value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </div>
         </>;
};

export default Form;
