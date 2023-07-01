import { useLoaderData } from 'react-router-dom'
import { MockData } from '@api'
import { Board } from '@organisms'

export default function Home() {
	const mockData = useLoaderData() as MockData

	return (
		<div className="app-content">
			<Board data={mockData} />
		</div>
	)
}
