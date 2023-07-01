import React from 'react'
import ReactDOM from 'react-dom/client'

import Shell from './shell'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Shell />
	</React.StrictMode>
)
