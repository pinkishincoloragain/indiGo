import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import Spottable from '@enact/spotlight/Spottable';
import Icon from '@enact/sandstone/Icon';

import css from './ItemInfo.module.less';
import images from '../../media'

const ItemInfoBase = kind ({
    name: 'ItemInfo',

    propTypes: {
        children: PropTypes.string,
        index: PropTypes.number,
        onSelect: PropTypes.func,
        rate: PropTypes.number
    },

    defaultProps: {
        rate: 4.5,
    },

    styles: { 
        css,
        className: 'item_info'
    },

    handlers: {
        onSelect: (ev, {index, onSelect}) => {
            if (onSelect) {
                onSelect({index});
            }
        }
    },


    render: ({children, onSelect, rate, ...rest}) => {
        delete rest.index;
        return (
            <div {...rest} onClick={onSelect}>
                <img src={`../../media/${children}.jpg`} alt="ItemInfo" />
                <div>{children}</div>
                <div><Icon>star</Icon>{rate} / 5.0</div>
            </div>
        );
    }
});

const ItemInfo = Spottable(ItemInfoBase);

export default ItemInfo;
export {
    ItemInfo,
    ItemInfoBase
};