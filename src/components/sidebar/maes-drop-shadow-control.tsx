import {
	ColorPalette,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components'
import { __ } from '@wordpress/i18n'

import { Color } from '@wordpress/components/build-types/palette-edit/types'
import { ContainerAttributes } from '../../types/container_types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attributes: ContainerAttributes
	setAttributes: any
	colors: Color[]
}

function DropShadowControl({ attributes, setAttributes, colors }: Props) {
	return (
		<div>
			<UnitControl
				label={__('Horizontal', 'maes-domain')}
				value={attributes.shadow.horizontal}
				onChange={(value) =>
					setAttributes({
						shadow: {
							...attributes.shadow,
							horizontal: value,
						},
					})
				}
			/>
			<UnitControl
				label={__('Vertical', 'maes-domain')}
				value={attributes.shadow.vertical}
				onChange={(value) =>
					setAttributes({
						shadow: {
							...attributes.shadow,
							vertical: value,
						},
					})
				}
			/>
			<UnitControl
				label={__('Size', 'maes-domain')}
				value={attributes.shadow.size}
				onChange={(value) =>
					setAttributes({
						shadow: {
							...attributes.shadow,
							size: value,
						},
					})
				}
			/>
			<ColorPalette
				colors={colors}
				value={attributes.shadow.color}
				onChange={(value) =>
					setAttributes({
						shadow: {
							...attributes.shadow,
							color: value,
						},
					})
				}
			/>
		</div>
	)
}

export default DropShadowControl
