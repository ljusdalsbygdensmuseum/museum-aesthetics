import { CollapsibleCard, Card, Fieldset, Stack } from '@wordpress/ui'
import {
	Button,
	RangeControl,
	ToggleControl,
	AnglePickerControl,
	ColorPalette,
	GradientPicker,
} from '@wordpress/components'
import { trash } from '@wordpress/icons'
import { __ } from '@wordpress/i18n'

import FadeControl from '../../components/sidebar/maes-fade-control'
import DropShadowControl from '../../components/sidebar/maes-drop-shadow-control'
import OffsetControl from '../../components/sidebar/maes-offset-control'
import BorderStyleControl from '../../components/sidebar/maes-border-style-control'

import { Color } from '@wordpress/components/build-types/palette-edit/types'
import { GradientObject } from '@wordpress/components/build-types/gradient-picker/types'

import {
	ContainerAttributes,
	ContainerBackground,
} from '../../types/container_types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attributes: ContainerAttributes
	setAttributes: (attrs: Partial<ContainerAttributes>) => void
	setBackground: (item: ContainerBackground, index: number) => void
	removeBackground: (index: number) => void
	index: number
	colorPalette: Color[]
	gradientPalette: GradientObject[]
}

function ContainerBackgroundControl({
	attributes,
	setAttributes,
	setBackground,
	removeBackground,
	index,
	colorPalette,
	gradientPalette,
}: Props) {
	const attribute = attributes.backgrounds[index]

	return (
		<CollapsibleCard.Root>
			<CollapsibleCard.Header>
				<Card.Title>
					{__('Background', 'maes-domain')} {index + 1}
				</Card.Title>
			</CollapsibleCard.Header>
			<CollapsibleCard.Content>
				<ToggleControl
					label={__('Full width', 'maes-domain')}
					checked={attribute.fullWidth}
					onChange={(value) => {
						setBackground({ ...attribute, fullWidth: value }, index)
						//setAttributes({ fullWidth: value })
					}}
				/>
				<hr />
				<Fieldset.Root>
					<Fieldset.Legend>{__('Offset', 'maes-domain')}</Fieldset.Legend>
					<Stack gap='sm'>
						<OffsetControl
							attribute={attribute}
							setBackground={setBackground}
							index={index}
							direction='top'
						/>

						<OffsetControl
							attribute={attribute}
							setBackground={setBackground}
							index={index}
							direction='bottom'
						/>
					</Stack>
					<Stack gap='sm'>
						<OffsetControl
							attribute={attribute}
							setBackground={setBackground}
							index={index}
							direction='left'
						/>

						<OffsetControl
							attribute={attribute}
							setBackground={setBackground}
							index={index}
							direction='right'
						/>
					</Stack>
				</Fieldset.Root>
				<hr />
				<AnglePickerControl
					label={__('Rotation', 'maes-domain')}
					value={attribute.rotation}
					onChange={(value) =>
						setBackground({ ...attribute, rotation: value }, index)
					}
				/>
				<hr />
				<RangeControl
					label={__('Opacity', 'maes-domain')}
					value={attribute.opacity}
					onChange={(value) =>
						setBackground({ ...attribute, opacity: value ? value : 100 }, index)
					}
					initialPosition={100}
				/>
				<hr />
				<Fieldset.Root>
					<Fieldset.Legend>{__('Fade', 'maes-domain')}</Fieldset.Legend>
					<FadeControl
						attribute={attribute}
						setBackground={setBackground}
						index={index}
						direction='horizontal'
					/>
					<FadeControl
						attribute={attribute}
						setBackground={setBackground}
						index={index}
						direction='vertical'
					/>
				</Fieldset.Root>
				<hr />
				<Button
					__next40pxDefaultSize
					icon={trash}
					isDestructive
					onClick={() => {
						removeBackground(index)
					}}
				>
					{__('Delete', 'maes-domain')}
				</Button>
			</CollapsibleCard.Content>
		</CollapsibleCard.Root>
	)

	/*
	
				
				
				<Fieldset.Root>
					<Fieldset.Legend>{__('Background', 'maes-domain')}</Fieldset.Legend>
					<ToggleControl
						label={__('Gradient background')}
						checked={attribute.gradientBackground}
						onChange={(value) => {
							setAttributes({ gradientBackground: value })
						}}
					/>
					{!attribute.gradientBackground && (
						<ColorPalette
							colors={colorPalette}
							value={attribute.background}
							enableAlpha
							onChange={(value) => {
								setAttributes({ background: value })
							}}
						/>
					)}
					{attribute.gradientBackground && (
						<GradientPicker
							value={attribute.background}
							onChange={(value) => {
								setAttributes({ background: value })
							}}
							gradients={gradientPalette}
						/>
					)}
				</Fieldset.Root>
				<hr />
				<Fieldset.Root>
					<Fieldset.Legend>{__('Border', 'maes-domain')}</Fieldset.Legend>
					<BorderStyleControl
						attributes={attributes}
						setAttributes={setAttributes}
						direction='top'
						colors={colorPalette}
					/>
					<BorderStyleControl
						attributes={attributes}
						setAttributes={setAttributes}
						direction='bottom'
						colors={colorPalette}
					/>
					<BorderStyleControl
						attributes={attributes}
						setAttributes={setAttributes}
						direction='left'
						colors={colorPalette}
					/>
					<BorderStyleControl
						attributes={attributes}
						setAttributes={setAttributes}
						direction='right'
						colors={colorPalette}
					/>
				</Fieldset.Root>
				<hr />
				<DropShadowControl
					attributes={attributes}
					setAttributes={setAttributes}
					colors={colorPalette}
				/>
				<hr />
	*/
}

export default ContainerBackgroundControl
