import { ReactElement } from "react"
import styled from 'styled-components'
import { Draggable } from "react-beautiful-dnd"

import { Task } from '../../mockData'

type CardProps = {
	children?: JSX.Element
	task: Task
	taskIndex: number
}

type StyledCardProps = {
	isDragging: boolean
}

const StyledCard = styled.div<StyledCardProps>`
	align-items: center;
	background-color: ${({ isDragging }) => isDragging ? 'lightblue' : 'white' };
	border-radius: 5px;
	border: 2px solid #282c34;
	color: #282c34;
	display: flex;
	justify-content: center;
	margin: .25rem auto;
	min-height: 3rem;
`

export const Card = ({ children, task, taskIndex }: CardProps): ReactElement => {

	return (
		<Draggable draggableId={task.id} index={taskIndex}>
			{(provided, snapshot) => {
				return (
					<StyledCard isDragging={snapshot.isDragging}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<span className="card-edit">E</span>
						<span className="card-title">{task.content}</span>
					</StyledCard>
				)
			}}
		</Draggable>
	)
}
