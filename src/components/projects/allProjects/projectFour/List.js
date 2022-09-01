import React from 'react';
import Todo from './Todo';

const List = ({items, setItems, setInputText, filteredItems}) => {
  return ( 
    <div>
    {filteredItems.map((item) => (
                <Todo key={item.id} item={item} items={items} setItems={setItems} setInputText={setInputText}/>
    ))}
    </div>
  )
};

export default List;
 