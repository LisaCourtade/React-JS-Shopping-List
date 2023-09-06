import { useState } from "react";

function Item({quantity, product}) {
    const [isCrossedOut, setIsCrossedOut] = useState(false);
    return (
    <div className="item">
        <div className={!isCrossedOut ? "checkbox" : "checkbox checked"} onClick={() => setIsCrossedOut(!isCrossedOut)}></div>
        <div className={isCrossedOut && "crossed-out"}>
            {quantity} {product}
        </div>
    </div>
    )
}

export default Item;