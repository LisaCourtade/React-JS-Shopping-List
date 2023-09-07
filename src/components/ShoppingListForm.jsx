import { useState } from "react";
import "../styles/ShoppingList.css";

function ShoppingListform({addItem}) {
    const [formData, setFormData] = useState({ product: "", quantity: 1 });

    const handleChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="product-form"> 
            <div className="input-field">
                <label htmlFor="product">Product Name</label>
                <input 
                    type="text" 
                    placeholder="Pineapple" 
                    name="product" 
                    id="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="input-field">
                <label htmlFor="quantity">Quantity</label>
                <input 
                    type="number" 
                    min={1}
                    placeholder="1" 
                    name="quantity" 
                    id="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListform;