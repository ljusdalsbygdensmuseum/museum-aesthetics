import { useEffect, useRef, useState } from 'react'
import { ContainerAttributes } from '../types/container_types'
import MAESContainerBackground from './maes-container-background'

interface Props {
	attributes: ContainerAttributes
	children: React.ReactNode
}

function MAESContainer({ attributes, children }: Props) {
	const [height, setHeight] = useState(0)

	const contanierRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (contanierRef.current) {
			setHeight(contanierRef.current.getBoundingClientRect().height)
		}
	})

	return (
		<div className='maes-container__container' ref={contanierRef}>
			{children}
			<MAESContainerBackground attributes={attributes} height={height} />
		</div>
	)
}

export default MAESContainer
