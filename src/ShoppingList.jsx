import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListform from './ShoppingListForm';
import DeleteButton from "./components/DeleteButton";
import Item from "./components/Item";
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

    function deleteItem(itemId) {
        const updatedItems = items.filter((item) => {
            return item.id != itemId;
        })
        setItems(updatedItems);
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ShoppingListform addItem={addItem}/>
            <div className="paper">
                <ul>
                    {items.map((i) => {
                    return (
                        <li className="list-item" key={i.id}>
                            <Item quantity={i.quantity} product={i.product} />
                            <DeleteButton onDelete={() => deleteItem(i.id)}/>
                        </li>
                    )
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default ShoppingList;