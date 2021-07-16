import React from 'react';
import kind from '@enact/core/kind';
import {Header, Panel} from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import Button from '@enact/sandstone/Button';
import Scroller from '@enact/sandstone/Scroller';
import LS2Request from '@enact/webos/LS2Request';


const SubmitBtn = (name) => {
	const putKind = () => {
        var request = new LS2Request().send({
            service: "luna://com.webos.service.db",
            method: 'putKind',
            parameters: { "id":"com.sample.app:1", "owner":"com.sample.app", "indexes":[{"name":"avocado","props":[{"name":"avocado"}]},{"name":"berry_mix","props":[{"name":"berry_mix"}]},{"name":"dragonfruit","props":[{"name":"dragonfruit"}]},{"name":"grapefruit","props":[{"name":"grapefruit"}]},{"name":"kiwi","props":[{"name":"kiwi"}]},{"name":"lemon","props":[{"name":"lemon"}]},{"name":"lime","props":[{"name":"lime"}]},{"name":"orange","props":[{"name":"orange"}]},{"name":"papaya","props":[{"name":"papaya"}]},{"name":"passionfruit","props":[{"name":"passionfruit"}]},{"name":"pear","props":[{"name":"pear"}]},{"name":"raspberry","props":[{"name":"raspberry"}]},{"name":"strawberry","props":[{"name":"strawberry"}]},{"name":"tangerin","props":[{"name":"tangerin"},{"name":"tomato","props":[{"name":"tomato"}]}]}]}
        });
    }
    const put = () => {
        putKind();
        var request = new LS2Request().send({
            service: "luna://com.webos.service.db",
            method: 'mergePut',
            parameters: {
                "props":{"_kind":"com.sample.app:1", [name]:1},
            }
        });
    }
    
	return (
            <Button className="complete" onClick={put}>complete</Button>
	);
};

export default SubmitBtn;