import { StrictModeDroppable } from '@utils'
import { Card } from '@molecules'
import { Task } from '@api'

import './CardList.css'

type CardListProps = {
	listId: string
	tasks: Task[]
	title?: string
}

export function CardList({ listId, tasks, title }: CardListProps) {
	return (
		<div className="card-list">
			<h2>{title ?? 'Card List'}</h2>
			<StrictModeDroppable droppableId={listId}>
				{(provided, snapshot) => (
					<div
						className={snapshot.isDraggingOver ? 'dragging-over' : ''}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{tasks.map((task, index) => (
							<Card key={task.id} task={task} taskIndex={index} />
						))}
						{provided.placeholder}
					</div>
				)}
			</StrictModeDroppable>
		</div>
	)
}
