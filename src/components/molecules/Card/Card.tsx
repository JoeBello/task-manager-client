import { ReactElement } from "react"

import './Card.css'

export interface CardProps {
	children: JSX.Element 
}

export const Card = ({ children }: CardProps): ReactElement => {
	return (
		<div className="card">
			{children}
		</div>
	)
}
