import Header from '../Header';
import { Board } from '../../components/organisms'

import './App.css';

import { mockData } from '../../api';


const App = function App() {
	return (
		<div className="app">
			<Header />
			<div className="app-content">
				<Board data={mockData} />
			</div>
		</div>
	)
}

export default App;
