import React from 'react';
import Button from '@enact/sandstone/Button';
import LS2Request from '@enact/webos/LS2Request';


const SubmitBtn = (name) => {
    const [quantity, setQuantity] = React.useState(0);

	const putKind = () => {
        var request = new LS2Request().send({
            service: "luna://com.webos.service.db",
            method: 'putKind',
            //parameters: { "id":"com.sample.app:1", "owner":"com.sample.app", "indexes":[{"name":"avocado","props":[{"name":"avocado"}]},{"name":"berry_mix","props":[{"name":"berry_mix"}]},{"name":"dragonfruit","props":[{"name":"dragonfruit"}]},{"name":"grapefruit","props":[{"name":"grapefruit"}]},{"name":"kiwi","props":[{"name":"kiwi"}]},{"name":"lemon","props":[{"name":"lemon"}]},{"name":"lime","props":[{"name":"lime"}]},{"name":"orange","props":[{"name":"orange"}]},{"name":"papaya","props":[{"name":"papaya"}]},{"name":"passionfruit","props":[{"name":"passionfruit"}]},{"name":"pear","props":[{"name":"pear"}]},{"name":"raspberry","props":[{"name":"raspberry"}]},{"name":"strawberry","props":[{"name":"strawberry"}]},{"name":"tangerin","props":[{"name":"tangerin"},{"name":"tomato","props":[{"name":"tomato"}]}]}]}
            parameters: { "id":"com.sample.app:1", "owner":"com.sample.app", "indexes":[{"name":"item","props":[{"name":"item"}]},{"name":"quantity","props":[{"name":"quantity"}]}]}
        });
    }
    const put = () => {
        putKind();
        var request = new LS2Request().send({
            service: "luna://com.webos.service.db",
            method: 'mergePut',
            parameters: {
                "query":{"from":"com.sample.app:1"},
                "props":{"_kind":"com.sample.app:1", [name.name]:quantity},
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