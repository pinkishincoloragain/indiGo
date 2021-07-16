import React, {useEffect} from 'react';
import LS2Request from '@enact/webos/LS2Request';

const ShoppingList = () => {
    const [item, setItem] = React.useState("");
    const [quantity, setQuantity] = React.useState(0);

    const search = () => {
        var request = new LS2Request().send({
            service: "luna://com.webos.service.db",
            method: 'search',
            parameters: {
                "query":{"from":"com.sample.app:1"}
            },
            onSuccess: (res) => {
                console.log(res.count);
                for(var i=0;i<res.count;i++) {
                    setItem(res.results[i].item);
                    setQuantity(res.results[i].quantity);
                    console.log(item);
                    console.log(quantity);
                    return ({item});
                }
            }
        });
    }

    useEffect(() => {
        search();
    }, []);
    
	return (
        <div>
            { item }
            { quantity }
        </div>
	);
};

export default ShoppingList;