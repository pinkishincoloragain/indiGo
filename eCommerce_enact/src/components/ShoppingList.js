import React from 'react';
import Button from '@enact/sandstone/Button';
import LS2Request from '@enact/webos/LS2Request';

const ShoppingList = (name) => {
    const [quantity, setQuantity] = React.useState(0);

    const find = () => {
        var request = new LS2Request().send({
            service: "luna://com.webos.service.db",
            method: 'find',
            parameters: {
                "query":{"from":"com.sample.app:1"}
            },
            onSuccess: (res) => {
                
            }
        });
    }
    
	return (
        <div>
            <Button onClick={() => setQuantity(quantity-1)}>-</Button>
            { quantity }
            <Button onClick={() => setQuantity(quantity+1)}>+</Button>
            <hr/>
            <Button onClick={put}>Add to Cart</Button>
        </div>
	);
};

export default SubmitBtn;