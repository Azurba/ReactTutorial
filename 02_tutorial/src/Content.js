import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    //list/array state
    //each item is an object with 3 properties
    const [items, setItems] = useState([
        {
            id:1,
            checked: true,
            item: "item 1"
        },
        {
            id:2,
            checked: false,
            item: "item 2"
        },
        {
            id:3,
            checked: false,
            item: "item 3"
        },
        
    ]);

    /*
    For each item, check is the id are equal. It is is true, return this
    new item but flipping the checked property, otherwise just return the item

    In other words: if the item is already check and u click there, uncheck.
    If it is not checked, check the item
    */
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, 
        checked: !item.checked } : item);
        setItems(listItems);   
    }

    /*
    map and filter return arrays of the elements we are passing. However,
    filter will create an array excluding a especific item. In our case,
    the item to be removed.
    */
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems)
    }

    /*
    We need to display the items now. Map is the way to do it

    for each element of items, we will return a <li>
    (item) is like the i in python loops: for i in items
    */
    
    return(
        <main>
            <ul>
                {items.map((item)=> (
                    <li className="item" key={item.id}>
                        <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt
                            onClick={() => handleDelete(item.id)} 
                            role="button" 
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content