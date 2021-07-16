import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';

import ItemInfo from '../components/ItemInfo'

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
        children: PropTypes.array,
        onSelectItem: PropTypes.func
    },

	render: ({children, onSelectItem, ...rest}) => (
		<Panel {...rest}>
			<Header title="Hello world!" />
			<Scroller>
				<Repeater childComponent={ItemInfo} indexProp="index" itemProps={{onSelect: onSelectItem}}>
                    {children}
                </Repeater>
			</Scroller>
		</Panel>
	)
});

export default MainPanel;
