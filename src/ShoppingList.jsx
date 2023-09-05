import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListform from './ShoppingListForm'
import "./ShoppingList.css";

function ShoppingList() {
    const [items, setItems] = useState([
        {id: uuid(), product: "Bananas", quantity: 5},
        {id: uuid(), product: "Apples", quantity: 4}
    ]);

    const addItem = (item) => {
        setItems((prev) => {
            return [...prev, {...item, id: uuid()}]
        })
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ShoppingListform addItem={addItem}/>
            <div className="shopping-list">
                <ul >
                    {items.map(i => <li key={i.id}>{i.quantity} {i.product}</li>)}
                </ul>
            </div>
            
        </div>
    )
}

export default ShoppingList;