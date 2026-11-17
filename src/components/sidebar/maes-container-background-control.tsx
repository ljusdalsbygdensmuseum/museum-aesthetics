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

import { ContainerAttributes } from '../../types/container_types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attributes: ContainerAttributes
	setAttributes: any
	index: number
	colorPalette: Color[]
	gradientPalette: GradientObject[]
}

function ContainerBackgroundControl({
	attributes,
	setAttributes,
	index,
	colorPalette,
	gradientPalette,
}: Props) {
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
					checked={attributes.fullWidth}
					onChange={(value) => {
						setAttributes({ fullWidth: value })
					}}
				/>
				<hr />
				<Fieldset.Root>
					<Fieldset.Legend>{__('Offset', 'maes-domain')}</Fieldset.Legend>
					<Stack gap='sm'>
						<OffsetControl
							attributes={attributes}
							setAttributes={setAttributes}
							direction='top'
						/>

						<OffsetControl
							attributes={attributes}
							setAttributes={setAttributes}
							direction='bottom'
						/>
					</Stack>
					<Stack gap='sm'>
						<OffsetControl
							attributes={attributes}
							setAttributes={setAttributes}
							direction='left'
						/>

						<OffsetControl
							attributes={attributes}
							setAttributes={setAttributes}
							direction='right'
						/>
					</Stack>
				</Fieldset.Root>
				<hr />
				<AnglePickerControl
					label={__('Rotation', 'maes-domain')}
					value={attributes.rotation}
					onChange={(value) => setAttributes({ rotation: value })}
				/>
				<hr />
				<RangeControl
					label={__('Opacity', 'maes-domain')}
					value={attributes.opacity}
					onChange={(value) => {
						setAttributes({ opacity: value })
					}}
					initialPosition={100}
				/>
				<hr />
				<Fieldset.Root>
					<Fieldset.Legend>{__('Fade', 'maes-domain')}</Fieldset.Legend>
					<FadeControl
						attributes={attributes}
						setAttributes={setAttributes}
						direction='horizontal'
					/>
					<FadeControl
						attributes={attributes}
						setAttributes={setAttributes}
						direction='vertical'
					/>
				</Fieldset.Root>
				<hr />
				<Fieldset.Root>
					<Fieldset.Legend>{__('Background', 'maes-domain')}</Fieldset.Legend>
					<ToggleControl
						label={__('Gradient background')}
						checked={attributes.gradientBackground}
						onChange={(value) => {
							setAttributes({ gradientBackground: value })
						}}
					/>
					{!attributes.gradientBackground && (
						<ColorPalette
							colors={colorPalette}
							value={attributes.background}
							onChange={(value) => {
								setAttributes({ background: value })
							}}
						/>
					)}
					{attributes.gradientBackground && (
						<GradientPicker
							value={attributes.background}
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
				<Button __next40pxDefaultSize icon={trash} isDestructive>
					{__('Delete', 'maes-domain')}
				</Button>
			</CollapsibleCard.Content>
		</CollapsibleCard.Root>
	)
}

export default ContainerBackgroundControl
