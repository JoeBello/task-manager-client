export type Column = {
	id: string,
	title: string,
	taskIds: string[]
}

type Columns = {
	[key: string]: Column
}

type ColumnOrderKey = keyof Columns

export type MockData = {
	tasks: Tasks
	columns: Columns
	columnOrder: ColumnOrderKey[]
}

export type Task = {
	id: string
	content: string
}

type Tasks = {
	[key: string]: Task
}

export const mockData: MockData = {
	tasks: {
		'task-1': {
			id: 'task-1',
			content: 'Take out the garbage'
		},
		'task-2': {
			id: 'task-2',
			content: 'Do something fun'
		},
		'task-3': {
			id: 'task-3',
			content: 'Wash dishes'
		},
		'task-4': {
			id: 'task-4',
			content: 'Walk the dogs'
		}
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To Do',
			taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
		},
		'column-2': {
			id: 'column-2',
			title: 'In Progress',
			taskIds: []
		},
		'column-3': {
			id: 'column-3',
			title: 'Done',
			taskIds: []
		}
	},
	columnOrder: ['column-1', 'column-2', 'column-3']
}
