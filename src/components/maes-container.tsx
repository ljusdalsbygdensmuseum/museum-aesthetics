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

	//Width when full width
	//Making the angle go from 0-365 to 0-90-0-90-0 for the trigonometry to function
	const angleRange = attributes.rotation / 90

	let angle = angleRange * 90

	if (angleRange > 1 && angleRange <= 2) {
		angle = (1 - (angleRange - 1)) * 90
	}
	if (angleRange > 2 && angleRange <= 3) {
		angle = (angleRange - 2) * 90
	}
	if (angleRange > 3 && angleRange <= 4) {
		angle = (1 - (angleRange - 3)) * 90
	}

	//Said trigonometry, soh cah toa formula
	const width = `calc((100vw / cos(${angle}deg) + (tan(${angle}deg)*(372px/2)))` // TODO: use dynamic height insted

	const widthStyle = attributes.fullWidth
		? {
				width: width,
		  }
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

						transform: `rotate(${attributes.rotation}deg) ${
							attributes.fullWidth ? `translate(-50%)` : ``
						}`,
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
