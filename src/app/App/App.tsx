import Header from '../Header';
import { Board } from '@organisms'
import Router from '@routes'

import './App.css';

import { mockData } from '@api';


const App = function App() {
	return (
		<div className="app">
			<Header />
			<Router />
			{/* <div className="app-content">
				<Board data={mockData} />
			</div> */}
		</div>
	)
}

export default App;
