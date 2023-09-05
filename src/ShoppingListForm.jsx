import { useState } from "react";

function ShoppingListform({addItem}) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });

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
        <form onSubmit={handleSubmit}> 
            <h1>Product is: {formData.product} & quantity is: {formData.quantity}</h1>
            <label htmlFor="product">Product Name</label>
            <input 
                type="text" 
                placeholder="product name" 
                name="product" 
                id="product"
                value={formData.product}
                onChange={handleChange}
            />
            <label htmlFor="quantity">Quantity</label>
            <input 
                type="number" 
                placeholder="1" 
                name="quantity" 
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
            />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListform;