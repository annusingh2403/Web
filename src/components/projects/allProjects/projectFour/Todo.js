import React from 'react';
import {FaTrashAlt, FaCheck} from 'react-icons/fa'
import './ProjectFour.css';

const Todo = ({item,items, setItems}) => {

    const handleDelete = () => {
            setItems(items.filter((e) => e.id !== item.id))
        }

    const handleComplete = () => {
        setItems(items.map((element) => {
            if(element.id === item.id){
                return{
                    ...element,
                    completed: !element.completed
                }
            }
            return element;
        }))
    }

    return (
            <div className='todo'>
                    <li className={item.completed ? 'completed' : ''} >{item.text}</li>
                <button onClick={handleComplete} style={{color: 'green'}}>
                    <FaCheck/>
                </button>
                <button onClick={handleDelete} style={{color: 'red'}}>
                    <FaTrashAlt/>
                </button>
            </div>
  )
};

export default Todo;    
