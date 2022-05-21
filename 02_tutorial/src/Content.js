import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    //list/array state
    //each item is an object with 3 properties
    const [items, setItems] = useState([
        {
            id:1,
            checked: false,
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
        
    ])

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
                        checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt 
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