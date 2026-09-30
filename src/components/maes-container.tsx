import { ContainerAttributes } from '../types/container_types'

interface Props {
	attributes: ContainerAttributes
	children: React.ReactNode
}

function MAESContainer({ attributes, children }: Props) {
	return (
		<div
			style={{
				borderTopWidth: attributes.border.top.border?.width,
				borderTopColor: attributes.border.top.border?.color,
				borderTopStyle: attributes.border.top.border?.style,

				borderBottomWidth: attributes.border.bottom.border?.width,
				borderBottomColor: attributes.border.bottom.border?.color,
				borderBottomStyle: attributes.border.bottom.border?.style,

				borderLeftWidth: attributes.border.left.border?.width,
				borderLeftColor: attributes.border.left.border?.color,
				borderLeftStyle: attributes.border.left.border?.style,

				borderRightWidth: attributes.border.right.border?.width,
				borderRightColor: attributes.border.right.border?.color,
				borderRightStyle: attributes.border.right.border?.style,
			}}
		>
			{children}
		</div>
	)
}

export default MAESContainer
