import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import Changeable from '@enact/ui/Changeable';

import ItemList from '../views/ItemList';
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
		onSelectItem: PropTypes.func,
		open: PropTypes.bool,
		handleOpen: PropTypes.func
	},

	defaultProps: {
		index: 0,
		item_num: 0,
		open: false
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
		},
		handleOpen: (ev, {open, handleOpen}) => {
			if(handleOpen) {
				handleOpen({
					open: !open
				});
			}
		}
	},

	render: ({index, item_num, onNavigate, onSelectItem, open, handleOpen, ...rest}) => (
		<Panels {...rest} index={index} onBack={onNavigate}>
			<ItemList onSelectItem={onSelectItem}>{item_list}</ItemList>
			<ItemDetail name={item_list[item_num]} open={open} handleOpen={handleOpen}/>
		</Panels>
	)
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
	Changeable({prop: 'item_num', change: 'onSelectItem'},
	Changeable({prop: 'open', change: 'handleOpen'},
		ThemeDecorator(AppBase)
	))
);

export default App;
export {
	App,
	AppBase
};