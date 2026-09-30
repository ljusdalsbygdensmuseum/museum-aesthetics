import { useEffect, useRef, useState } from 'react'
import { ContainerAttributes } from '../types/container_types'

interface Props {
	attributes: ContainerAttributes
	children: React.ReactNode
}

function MAESContainer({ attributes, children }: Props) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState(0)
	const [width, setWidth] = useState(0)

	useEffect(() => {
		if (containerRef.current) {
			setHeight(containerRef.current.getBoundingClientRect().height)
			setWidth(containerRef.current.getBoundingClientRect().width)
		}
	}, [])

	const border = attributes.border

	const offset = {
		top: border.top.offset ? parseFloat(border.top.offset.toString()) : 0,
		bottom: border.bottom.offset
			? parseFloat(border.bottom.offset.toString())
			: 0,
		left: border.left.offset ? parseFloat(border.left.offset.toString()) : 0,
		right: border.right.offset ? parseFloat(border.right.offset.toString()) : 0,
	}

	const renderdHeight = height - offset.top - offset.bottom
	const renderdWidth = width - offset.left - offset.right

	console.log(renderdHeight)
	return (
		<div className='maes-container__container' ref={containerRef}>
			{children}
			<div
				className='maes-container__background'
				style={{
					height: renderdHeight + 'px',
					top: offset.top + 'px',
					bottom: offset.bottom + 'px',

					width: renderdWidth + 'px',
					left: offset.left + 'px',
					right: offset.right + 'px',

					borderTopWidth: border.top.border?.width,
					borderTopColor: border.top.border?.color,
					borderTopStyle: border.top.border?.style,

					borderBottomWidth: border.bottom.border?.width,
					borderBottomColor: border.bottom.border?.color,
					borderBottomStyle: border.bottom.border?.style,

					borderLeftWidth: border.left.border?.width,
					borderLeftColor: border.left.border?.color,
					borderLeftStyle: border.left.border?.style,

					borderRightWidth: border.right.border?.width,
					borderRightColor: border.right.border?.color,
					borderRightStyle: border.right.border?.style,
				}}
			></div>
		</div>
	)
}

export default MAESContainer
