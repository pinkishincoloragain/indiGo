import React from 'react';
import kind from '@enact/core/kind';
import {Header, Panel} from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import Button from '@enact/sandstone/Button';
import Scroller from '@enact/sandstone/Scroller';

import css from './ItemDetail.module.less';

const ItemDetailBase = kind({
	name: 'ItemDetail',

	propTypes: {
        name: PropTypes.string // building name
	},

    styles: {
        css,
        className: 'item_detail'
    },
    
	render: ({name, ...rest}) => (
		<Panel {...rest}>
			<Header title={name} />
            <Scroller>
                <img classname="Item" src={`../../media/${name}.jpg`} alt="ItemInfo" />
                <Button className="complete">complete</Button>
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