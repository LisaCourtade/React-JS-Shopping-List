import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListform from './components/ShoppingListForm';
import DeleteButton from "./components/DeleteButton";
import Item from "./components/Item";
import ToggleSwitch from "./components/ToggleSwitch";
import { useTheme } from "./ThemeContext";
import "./styles/ShoppingList.css";

function ShoppingList() {
    const {isDarkTheme} = useTheme();
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
            <div className={isDarkTheme ? "paper paper-dark" : "paper"}>
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
            <ToggleSwitch/>
        </div>
    )
}

export default ShoppingList;