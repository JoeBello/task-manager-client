import { ReactElement } from "react"
import { Draggable } from "react-beautiful-dnd"
import { Task } from '../../../mockData'

import './Card.css'

export type CardProps = {
	children?: JSX.Element
	task: Task
	taskIndex: number
}

export const Card = ({ children, task, taskIndex }: CardProps): ReactElement => {
	return (
		<Draggable draggableId={task.id} index={taskIndex}>
			{(provided, snapshot) => {
				return (
					<div className={`card ${snapshot.isDragging ? 'dragging' : 
				''}`}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<span>{task.content}</span>
					</div>
				)
			}}
		</Draggable>
	)
}
