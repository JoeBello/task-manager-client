import { useCallback, useState } from 'react'
import { DragDropContext, DragUpdate } from 'react-beautiful-dnd'

import { CardList } from '../CardList'
import { MockData } from "../../../mockData"

import './Board.css'

type BoardProps = {
	data: MockData
}

export const Board = ({ data }: BoardProps) => {
	const [boardState, setBoardState] = useState(data)

	const onDragEnd = useCallback((result: DragUpdate) => {
		const { destination, source, draggableId } = result
		// drag cancelled
		if (!destination) return
	
		// position didnt change
		if (destination.droppableId === source.droppableId && destination.index === source.index) return
	
		const column = boardState.columns[source.droppableId]
		const newTaskIds = [...column.taskIds]
		newTaskIds.splice(source.index, 1)
		newTaskIds.splice(destination.index, 0, draggableId)
	
		const stateUpdate = {
			...boardState,
			columns: {
				...boardState.columns,
				[column.id]: {
					...column,
					taskIds: newTaskIds
				}
			}
		}
	
		setBoardState(stateUpdate)
	}, [boardState, setBoardState])

	return (
		<div className="board">
			<DragDropContext
				// onDragStart={}
				// onDragUpdate={}
				onDragEnd={onDragEnd}
			>
				{boardState.columnOrder.map((columnId) => {
					const column = boardState.columns[columnId]
					const tasks = column.taskIds.map((taskId) => boardState.tasks[taskId])

					return (
						<CardList
							key={column.id}
							listId={column.id}
							tasks={tasks}
							title={column.title}
						/>
					)
				})}
			</DragDropContext>
		</div>
	)
}
