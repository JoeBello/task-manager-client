import { AppHeader } from '../AppHeader';
import { Board } from '../components/organisms'

import './App.css';

import { mockData } from '../mockData';

export const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<div className="app-content">
				<Board data={mockData} />
			</div>
		</div>
	)
}

export default App;
