import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { MockData } from '@api'
import { Board } from '@organisms'

export default function Home() {
	const data = useLoaderData() as Awaited<{ mockData: MockData }>

	return (
		<div>
			<h1>Home</h1>
			{/* TODO: skeleton */}
			<Suspense fallback={<h1>Loading...</h1>}>
				<Await children={(resolved) => <Board data={resolved} />} resolve={data.mockData} />
			</Suspense>
		</div>
	)
}
