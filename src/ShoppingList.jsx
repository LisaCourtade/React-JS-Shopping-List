import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListform from './ShoppingListForm'

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
            <ul>
                {items.map(i => <li key={i.id}>{i.quantity} - {i.product}</li>)}
            </ul>
            <ShoppingListform addItem={addItem}/>
        </div>
    )
}

export default ShoppingList;