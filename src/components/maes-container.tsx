import { ContainerAttributes } from '../types/container_types'

interface Props {
	attributes: ContainerAttributes
	children: React.ReactNode
}

function MAESContainer({ attributes, children }: Props) {
	const border = attributes.border
	const fade = attributes.fade
	const shadow = attributes.shadow

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
				className='maes-container__background-wrap'
				style={{
					filter: `drop-shadow(${shadow.horizontal} ${shadow.vertical} ${shadow.size} ${shadow.color})`,
				}}
			>
				<div
					className={`maes-container__background ${
						attributes.fullWidth && `maes-container__fullwidth`
					}`}
					style={{
						background: attributes.background,
						opacity: attributes.opacity / 100,

						top: offset.top,
						bottom: offset.bottom,

						borderTopWidth: border.top.border?.width,
						borderTopColor: border.top.border?.color,
						borderTopStyle: border.top.border?.style,

						borderBottomWidth: border.bottom.border?.width,
						borderBottomColor: border.bottom.border?.color,
						borderBottomStyle: border.bottom.border?.style,

						...widthStyle,

						maskImage: `${
							fade.horizontal.toggle
								? `linear-gradient(
								90deg,
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 1) ${fade.horizontal.width / 2}%,
								rgba(0, 0, 0, 1) ${100 - fade.horizontal.width / 2}%,
								rgba(0, 0, 0, 0) 100%
							)`
								: ``
						}${fade.horizontal.toggle && fade.vertical.toggle ? ',' : ''} ${
							fade.vertical.toggle
								? `linear-gradient(
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 1) ${fade.vertical.width / 2}%,
								rgba(0, 0, 0, 1) ${100 - fade.vertical.width / 2}%,
								rgba(0, 0, 0, 0) 100%
							)`
								: ``
						}`,
						maskComposite: 'intersect',
					}}
				></div>
			</div>
		</div>
	)
}

export default MAESContainer
