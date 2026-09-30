import { BorderControl, ToggleControl } from '@wordpress/components'
import { ContainerAttributes } from '../../types/container_types'
import { __ } from '@wordpress/i18n'

//set attributes being any is not right but I can't find a better way
interface Props {
	attributes: ContainerAttributes
	setAttributes: any
	direction: 'top' | 'bottom' | 'left' | 'right'
}

function BorderStyle({ attributes, setAttributes, direction }: Props) {
	const attribute = attributes.border[direction]

	const labels = {
		top: {
			toggle: __('Top border', 'maes-domain'),
		},
		bottom: {
			toggle: __('Bottom border', 'maes-domain'),
		},
		left: {
			toggle: __('Left border', 'maes-domain'),
		},
		right: {
			toggle: __('Right border', 'maes-domain'),
		},
	}

	return (
		<div>
			<BorderControl
				label={labels[direction].toggle}
				value={attribute.border}
				enableAlpha
				enableStyle
				onChange={(value) =>
					setAttributes({
						border: {
							...attributes.border,
							[direction]: { ...attribute, border: value },
						},
					})
				}
			/>
		</div>
	)
}

export default BorderStyle
