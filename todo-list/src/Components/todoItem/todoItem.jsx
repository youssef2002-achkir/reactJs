import React from 'react'
import './todoItem.css'

const  TodoItems = (props) =>{
    
        const {items, deleteItem} = props;
        let L = items.length;
        const func_get = L ? (items.map((item) => {
            return  (
                <div>
                    <span className='name'>{item.name}</span>
                    <span className='age'>{item.age}</span>
                    <span className='action icon' onClick={()=>deleteItem(item.id)}>&times;</span>

                </div>)
            
        
    
}) ): <p>There is no data to show</p>

        return(
            
            <div className='ListItems'>
             <div>
             <span className='name title'>Name</span>
             <span className='age title'>Age</span>
             <span className='action title'>Action</span>
             </div>
            {func_get}</div>
        )
    
}

export default TodoItems;