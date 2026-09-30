import {
	BorderControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components'
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
			border: __('Top border', 'maes-domain'),
		},
		bottom: {
			border: __('Bottom border', 'maes-domain'),
		},
		left: {
			border: __('Left border', 'maes-domain'),
		},
		right: {
			border: __('Right border', 'maes-domain'),
		},
	}

	return (
		<div>
			<BorderControl
				label={labels[direction].border}
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
			<UnitControl
				label={__('Offset', 'maes-domain')}
				value={attribute.offset}
				onChange={(value) =>
					setAttributes({
						border: {
							...attributes.border,
							[direction]: { ...attribute, offset: value },
						},
					})
				}
			/>
		</div>
	)
}

export default BorderStyle
