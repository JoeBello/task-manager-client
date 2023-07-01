import { ReactElement } from 'react'
import styled from 'styled-components'

type Spacing = 'sm' | 'md' | 'lg' | 'xl'

interface PaddingProps {
	pt?: Spacing
	pb?: Spacing
	pl?: Spacing
	pr?: Spacing
	px?: Spacing
	py?: Spacing
	p?: Spacing
}

interface MarginProps {
	mt?: Spacing
	mb?: Spacing
	ml?: Spacing
	mr?: Spacing
	mx?: Spacing
	my?: Spacing
	m?: Spacing
}

const spaceMap: { [key: string]: string } = {
	sm: '.25rem',
	md: '.5rem',
	lg: '.75rem',
	xl: '1rem'
}

type StyledContainerProps = MarginProps & PaddingProps 

const StyledContainer = styled.div<StyledContainerProps>`
	margin-bottom: ${({ mb, my }) => (mb && spaceMap[mb]) ?? (my && spaceMap[my])};
	margin-left: ${({ ml, mx }) => (ml && spaceMap[ml]) ?? (mx && spaceMap[mx])};
	margin-right: ${({ pr, mx }) => (pr && spaceMap[pr]) ?? (mx && spaceMap[mx])};
	margin-top: ${({ mt, my }) => (mt && spaceMap[mt]) ?? (my && spaceMap[my])};
	margin: ${({ m }) => m && spaceMap[m]};
	padding-bottom: ${({ pb, py }) => (pb && spaceMap[pb]) ?? (py && spaceMap[py])};
	padding-left: ${({ pl, px }) => (pl && spaceMap[pl]) ?? (px && spaceMap[px])};
	padding-right: ${({ pr, px }) => (pr && spaceMap[pr]) ?? (px && spaceMap[px])};
	padding-top: ${({ pt, py }) => (pt && spaceMap[pt]) ?? (py && spaceMap[py])};
	padding: ${({ p }) => p && spaceMap[p]};
`

interface ContainerProps extends MarginProps, PaddingProps {
	children: ReactElement
}

export function Container({ children, ...rest }: ContainerProps): ReactElement {
	return (
		<StyledContainer {...rest} >
			{children}
		</StyledContainer>
	)
}
