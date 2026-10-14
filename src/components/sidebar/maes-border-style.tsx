import {
	BorderControl,
	PanelRow,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components'
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

function BorderStyle({ attributes, setAttributes, direction, colors }: Props) {
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
		<PanelRow
			className={
				attributes.fullWidth && (direction === 'left' || direction === 'right')
					? 'maes-disabled'
					: ''
			}
		>
			<BorderControl
				label={labels[direction].border}
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

export default BorderStyle
