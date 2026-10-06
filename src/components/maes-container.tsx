import { ContainerAttributes } from '../types/container_types'

interface Props {
	attributes: ContainerAttributes
	children: React.ReactNode
}

function MAESContainer({ attributes, children }: Props) {
	const border = attributes.border

	const offset = {
		top: border.top.offset ? border.top.offset : 0,
		bottom: border.bottom.offset ? border.bottom.offset : 0,
		left: border.left.offset ? border.left.offset : 0,
		right: border.right.offset ? border.right.offset : 0,
	}

	const widthStyle = attributes.fullWidth
		? null
		: {
				left: offset.left,
				right: offset.right,

				borderLeftWidth: border.left.border?.width,
				borderLeftColor: border.left.border?.color,
				borderLeftStyle: border.left.border?.style,

				borderRightWidth: border.right.border?.width,
				borderRightColor: border.right.border?.color,
				borderRightStyle: border.right.border?.style,
		  }

	return (
		<div className='maes-container__container'>
			{children}
			<div
				className={`maes-container__background ${
					attributes.fullWidth && `maes-container__fullwidth`
				}`}
				style={{
					top: offset.top,
					bottom: offset.bottom,

					borderTopWidth: border.top.border?.width,
					borderTopColor: border.top.border?.color,
					borderTopStyle: border.top.border?.style,

					borderBottomWidth: border.bottom.border?.width,
					borderBottomColor: border.bottom.border?.color,
					borderBottomStyle: border.bottom.border?.style,

					...widthStyle,
				}}
			></div>
		</div>
	)
}

export default MAESContainer
