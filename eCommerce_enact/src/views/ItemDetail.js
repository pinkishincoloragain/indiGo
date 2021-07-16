import React from 'react';
import kind from '@enact/core/kind';
import {Header, Panel} from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import Button from '@enact/sandstone/Button';
import Scroller from '@enact/sandstone/Scroller';
import LS2Request from '@enact/webos/LS2Request';

import SubmitBtn from '../components/SubmitBtn';
import css from './ItemDetail.module.less';

const ItemDetailBase = kind({
	name: 'ItemDetail',

	propTypes: {
        name: PropTypes.string, // building name
        putKind: PropTypes.func,
        put: PropTypes.func
	},

    styles: {
        css,
        className: 'item_detail'
    },

	render: ({name, putKind, put, ...rest}) => (
		<Panel {...rest}>
			<Header title={name} />
            <Scroller>
                <img className="Item" src={`../../media/${name}.jpg`} alt="ItemInfo" />
                <SubmitBtn name={name}></SubmitBtn>
                <Button className="map">Map</Button>
            </Scroller>
		</Panel>
	)
});

export default ItemDetailBase;
export {
	ItemDetailBase as ItemDetail,
	ItemDetailBase
};