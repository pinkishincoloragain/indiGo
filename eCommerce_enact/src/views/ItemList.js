import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';

import ItemInfo from '../components/ItemInfo';
import css from './ItemList.module.less';

const ItemListBase = kind({
	name: 'ItemList',

	propTypes: {
        children: PropTypes.array,
        onSelectItem: PropTypes.func
    },

	styles: {
		css,
		className: 'item_list'
	},

	render: ({children, onSelectItem, ...rest}) => (
		<Panel {...rest}>
			<Header title="INDIGO SHOPPING MALL" />
			<Scroller>
				<div>
					<h2>Shopping list</h2>
					{/* print shopping list, below is an example */}
					<p>Avocado</p>
					<p>cherry</p>
					<hr />
				</div>
				<Repeater childComponent={ItemInfo} indexProp="index" itemProps={{onSelect: onSelectItem}}>
                    {children}
                </Repeater>
			</Scroller>
		</Panel>
	)
});

export default ItemListBase;
export {
    ItemListBase as Item,
    ItemListBase
};
