import {
	ColorPalette,
	PanelRow,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components'
import { Fieldset } from '@wordpress/ui'
import { __ } from '@wordpress/i18n'

import { Color } from '@wordpress/components/build-types/palette-edit/types'
import {
	ContainerAttributes,
	ContainerBackground,
} from '../../types/container_types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attribute: ContainerBackground
	setBackground: (item: ContainerBackground, index: number) => void
	index: number
	colors: Color[]
}

function DropShadowControl({ attribute, setBackground, index, colors }: Props) {
	const shadow = attribute.shadow

	// first unit control inside a div to remove programicaly added margin bottom, bit of a hack but works
	return (
		<Fieldset.Root>
			<Fieldset.Legend>{__('Drop Shadow', 'maes-domain')}</Fieldset.Legend>
			<ToggleControl
				label={__('Use drop shadow', 'maes-domain')}
				checked={shadow.toggle}
				onChange={(value) =>
					setBackground(
						{
							...attribute,
							shadow: {
								...shadow,
								toggle: value,
							},
						},
						index,
					)
				}
			/>
			{shadow.toggle && (
				<>
					<PanelRow>
						<div>
							<UnitControl
								label={__('Horizontal', 'maes-domain')}
								value={shadow.horizontal}
								onChange={(value) =>
									setBackground(
										{
											...attribute,
											shadow: {
												...shadow,
												horizontal: value,
											},
										},
										index,
									)
								}
								style={{
									marginRight: '3px',
								}}
							/>
						</div>
						<UnitControl
							label={__('Vertical', 'maes-domain')}
							value={shadow.vertical}
							onChange={(value) =>
								setBackground(
									{
										...attribute,
										shadow: {
											...shadow,
											vertical: value,
										},
									},
									index,
								)
							}
						/>
					</PanelRow>

					<UnitControl
						label={__('Blur', 'maes-domain')}
						value={shadow.size}
						onChange={(value) =>
							setBackground(
								{
									...attribute,
									shadow: {
										...shadow,
										size: value,
									},
								},
								index,
							)
						}
					/>
					<ColorPalette
						colors={colors}
						value={shadow.color}
						onChange={(value) =>
							setBackground(
								{
									...attribute,
									shadow: {
										...shadow,
										color: value,
									},
								},
								index,
							)
						}
					/>
				</>
			)}
		</Fieldset.Root>
	)
}

export default DropShadowControl
