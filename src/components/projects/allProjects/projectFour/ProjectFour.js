import React, {useState, useEffect} from 'react';
import Form from './Form';
import List from './List';

const ProjectFour = () => {

    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        getLocalItems();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalItems();
    }, [items, status]);
    

     const filterHandler = () => {
         switch(status){
            case 'completed':
                 setFilteredItems(items.filter((item) => item.completed === true));
                 break;
            case 'pending':
                setFilteredItems(items.filter((item) => item.completed === false));
                break;
             default:
                 setFilteredItems(items);
                 break; 
         }
     }

     const saveLocalItems = () => {
        localStorage.setItem('items', JSON.stringify(items));
    }

    const getLocalItems = () => {
        if(localStorage.getItem('items') === null) {
            localStorage.setItem('items', JSON.stringify([]));
        }else{
            let itemLocal = JSON.parse(localStorage.getItem('items'));
            setItems(itemLocal);
        }
    };

  return <>   
       	    <div>
                <p style={{color: 'steelblue'}}>Project Four ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>M</span>y ToDo List</p>
            </div>
            <div className='project-four'>
              <Form items={items} setItems={setItems} setInputText={setInputText} inputText={inputText} setStatus={setStatus}/>
              <List setItems={setItems} items={items} setInputText={setInputText} filteredItems={filteredItems}/>
            </div>
         </>;
};

export default ProjectFour;
