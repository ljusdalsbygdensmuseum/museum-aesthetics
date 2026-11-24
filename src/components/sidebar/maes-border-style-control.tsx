import { BorderControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

import { Color } from '@wordpress/components/build-types/palette-edit/types'

import { ContainerBackground } from '../../types/container_types'

interface Props {
	attribute: ContainerBackground
	setBackground: (item: ContainerBackground, index: number) => void
	index: number
	direction: 'top' | 'bottom' | 'left' | 'right'
	colors: Color[]
}

function BorderStyleControl({
	attribute,
	setBackground,
	index,
	direction,
	colors,
}: Props) {
	const border = attribute.border[direction]

	return (
		<BorderControl
			className={
				attribute.fullWidth && (direction === 'left' || direction === 'right')
					? 'maes-disabled'
					: ''
			}
			label={__(
				direction.charAt(0).toUpperCase() + direction.slice(1),
				'maes-domain',
			)}
			value={border}
			enableAlpha
			enableStyle
			onChange={(value) =>
				setBackground(
					{
						...attribute,
						border: {
							...attribute.border,
							[direction]: value,
						},
					},
					index,
				)
			}
			colors={colors}
		/>
	)
}

export default BorderStyleControl
