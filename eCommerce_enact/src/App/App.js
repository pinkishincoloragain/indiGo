import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import Changeable from '@enact/ui/Changeable';

import MainPanel from '../views/MainPanel';
import ItemDetail from '../views/ItemDetail';
import css from './App.module.less';

const item_list = [
	'avocado', 
	'berry_mix', 
	'cherry', 
	'dragonfruit', 
	'grapefruit', 
	'kiwi', 
	'lemon', 
	'orange', 
	'papaya', 
	'passionfruit', 
	'pear', 
	'raspberry', 
	'strawberry', 
	'tomato', 
	'watermelon'
]

const AppBase = kind({
	name: 'App',
	propTypes: {
		index: PropTypes.number,
		item_num: PropTypes.number,
		onNavigate: PropTypes.func,
		onSelectItem: PropTypes.func
	},

	defaultProps: {
		index: 0,
		item_num: 0
	},

	styles: {
		css,
		className: 'app'
	},

	handlers: {
		onSelectItem: (ev, {onNavigate, onSelectItem}) => {
			if (onSelectItem) {
				onSelectItem({
					item_num: ev.index
				});
			}

			if(onNavigate) {
				onNavigate({
					index: 1
				});
			}
		}
	},

	render: ({index, item_num, onNavigate, onSelectItem, ...rest}) => (
		<Panels {...rest} index={index} onBack={onNavigate}>
			<MainPanel onSelectItem={onSelectItem}>{item_list}</MainPanel>
			<ItemDetail name={item_list[item_num]}/>
		</Panels>
	)
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
	Changeable({prop: 'item_num', change: 'onSelectItem'},
		ThemeDecorator(AppBase)
	)
);

export default App;
export {
	App,
	AppBase
};