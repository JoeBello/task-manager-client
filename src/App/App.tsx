import React from 'react';

import { AppHeader } from '../AppHeader';
import { CardList } from '../components/organisms'

import './App.css';

export const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<div className="app-content">
				<CardList />
			</div>
		</div>
	);
}

export default App;
