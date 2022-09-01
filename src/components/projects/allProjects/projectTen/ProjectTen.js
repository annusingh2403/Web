import React, {useState} from 'react';
import Categories from './Categories';
import ItemList from './ItemList';
import data from './ProjectTenData';
import './ProjectTen.css';

const allCategory = ["all",...new Set(data.map((item) => item.category))]

const ProjectTen = () => {

    const [items, setItems] = useState(data);
    const [categories, setCategories] = useState(allCategory);

    const filter = (category) => {
        if(category === 'all'){
            setItems(data);
            return;
        }
        const newItems = data.filter((item) => item.category === category);
        setItems(newItems);
    }

  return <>
            <div>
                <p style={{color: 'steelblue'}}>Project Ten ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>M</span>enu <span style={{color: "tomato"}}>I</span>tem's</p>
            </div>
            <div className='project-ten'>
                <Categories categories={categories} filter={filter}/>
                <div className='pten-container'>
                    <ItemList items={items}/>
                </div>
            </div>
        </>;
};

export default ProjectTen;
