import React from 'react';
import kind from '@enact/core/kind';
import {Header, Panel} from '@enact/sandstone/Panels';
import PropTypes, { oneOf } from 'prop-types';
import CheckboxItem from '@enact/sandstone/CheckboxItem';
import Scroller from '@enact/sandstone/Scroller';
import LS2Request from '@enact/webos/LS2Request';
import Popup from '@enact/sandstone/Popup';
import Button from '@enact/sandstone/Button';

import SubmitBtn from '../components/SubmitBtn';
import css from './ItemDetail.module.less';

const ItemDetailBase = kind({
	name: 'ItemDetail',

	propTypes: {
        name: PropTypes.string, // building name
        putKind: PropTypes.func,
        put: PropTypes.func,
        open: PropTypes.bool,
        handleOpen: PropTypes.func
	},

    styles: {
        css,
        className: 'item_detail'
    },

	render: ({name, putKind, put, open, handleOpen, ...rest}) => (
		<Panel {...rest}>
			<Header title={name} />
            <Scroller>
                <img className="Item" src={`../../media/${name}.jpg`} alt="ItemInfo" />
                <br />
                <SubmitBtn name={name}></SubmitBtn>
                <br />
                <Button onClick={handleOpen}>Rate</Button>
            </Scroller>
            <Popup open={open} onclose={handleOpen} position="center" spotlightRestrict="self-first" style={{width: '500px'}}>
                    <CheckboxItem>1 point</CheckboxItem>
                    <CheckboxItem>2 points</CheckboxItem>
                    <CheckboxItem>3 points</CheckboxItem>
                    <CheckboxItem>4 points</CheckboxItem>
                    <CheckboxItem>5 points</CheckboxItem>
                    <Button size="small" onClick={handleOpen}>Submit</Button>
                </Popup>
		</Panel>
	)
});

export default ItemDetailBase;
export {
	ItemDetailBase as ItemDetail,
	ItemDetailBase
};