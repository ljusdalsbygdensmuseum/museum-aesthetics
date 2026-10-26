import { ContainerAttributes } from '../types/container_types'

interface Props {
	attributes: ContainerAttributes
	children: React.ReactNode
}

function MAESContainer({ attributes, children }: Props) {
	const border = attributes.border
	const offset = attributes.offset
	const fade = attributes.fade
	const shadow = attributes.shadow

	const widthStyle = attributes.fullWidth
		? null
		: {
				left: offset.left ? offset.left : 0,
				right: offset.right ? offset.right : 0,

				borderLeftWidth: border.left?.width,
				borderLeftColor: border.left?.color,
				borderLeftStyle: border.left?.style,

				borderRightWidth: border.right?.width,
				borderRightColor: border.right?.color,
				borderRightStyle: border.right?.style,
			}

	return (
		<div className='maes-container__container'>
			{children}
			<div
				className='maes-container__background-wrap'
				style={
					shadow.toggle
						? {
								filter: `drop-shadow(${shadow.horizontal} ${shadow.vertical} ${shadow.size} ${shadow.color})`,
							}
						: {}
				}
			>
				<div
					className={`maes-container__background ${
						attributes.fullWidth && `maes-container__fullwidth`
					}`}
					style={{
						background: attributes.background,
						opacity: attributes.opacity / 100,

						top: offset.top ? offset.top : 0,
						bottom: offset.bottom ? offset.bottom : 0,

						transform: `rotate(${attributes.rotation}deg) ${attributes.fullWidth ? `translate(-50%)` : ``}`,
						transformOrigin: 'left',

						borderTopWidth: border.top?.width,
						borderTopColor: border.top?.color,
						borderTopStyle: border.top?.style,

						borderBottomWidth: border.bottom?.width,
						borderBottomColor: border.bottom?.color,
						borderBottomStyle: border.bottom?.style,

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
