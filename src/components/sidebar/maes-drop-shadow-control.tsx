import {
	ColorPalette,
	PanelRow,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components'
import { Fieldset } from '@wordpress/ui'
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
	const shadow = attributes.shadow

	// first unit control inside a div to remove programicaly added margin bottom, bit of a hack but works
	return (
		<Fieldset.Root>
			<Fieldset.Legend>{__('Drop Shadow', 'maes-domain')}</Fieldset.Legend>
			<ToggleControl
				label={__('Use drop shadow')}
				checked={shadow.toggle}
				onChange={(value) =>
					setAttributes({
						shadow: {
							...shadow,
							toggle: value,
						},
					})
				}
			/>
			{shadow.toggle && (
				<>
					<PanelRow>
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
								style={{
									marginRight: '3px',
								}}
							/>
						</div>
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
					</PanelRow>

					<UnitControl
						label={__('Blur', 'maes-domain')}
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
				</>
			)}
		</Fieldset.Root>
	)
}

export default DropShadowControl
