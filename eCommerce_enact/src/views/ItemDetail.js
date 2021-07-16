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
                <img className="stream" src="https://cdn.pixabay.com/photo/2020/11/30/18/14/colorful-5791787_960_720.png"/>
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