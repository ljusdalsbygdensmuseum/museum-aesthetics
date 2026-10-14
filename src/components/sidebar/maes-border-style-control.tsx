import { BorderControl, PanelRow } from '@wordpress/components'
import { ContainerAttributes } from '../../types/container_types'
import { __ } from '@wordpress/i18n'
import { Color } from '@wordpress/components/build-types/palette-edit/types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attributes: ContainerAttributes
	setAttributes: any
	direction: 'top' | 'bottom' | 'left' | 'right'
	colors: Color[]
}

function BorderStyleControl({
	attributes,
	setAttributes,
	direction,
	colors,
}: Props) {
	const attribute = attributes.border[direction]

	return (
		<PanelRow
			className={
				attributes.fullWidth && (direction === 'left' || direction === 'right')
					? 'maes-disabled'
					: ''
			}
		>
			<BorderControl
				label={__(
					direction.charAt(0).toUpperCase() + direction.slice(1),
					'maes-domain',
				)}
				value={attribute}
				enableAlpha
				enableStyle
				onChange={(value) =>
					setAttributes({
						border: {
							...attributes.border,
							[direction]: value,
						},
					})
				}
				colors={colors}
			/>
		</PanelRow>
	)
}

export default BorderStyleControl
