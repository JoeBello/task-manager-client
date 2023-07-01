import Header from '../Header';
import { Board } from '@organisms'
import Router from '@routes'

import './Shell.css';

import { mockData } from '@api';


const Shell = function Shell() {
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

export default Shell;
