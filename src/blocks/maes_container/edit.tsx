/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	useSettings,
} from '@wordpress/block-editor'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'
import {
	AnglePickerControl,
	ColorPalette,
	GradientPicker,
	PanelBody,
	PanelRow,
	RangeControl,
	ToggleControl,
} from '@wordpress/components'
import { Fieldset } from '@wordpress/ui'
import { BlockEditProps } from '@wordpress/blocks'
import { ContainerAttributes } from '../../types/container_types'
import BorderStyleControl from '../../components/sidebar/maes-border-style-control'
import MAESContainer from '../../components/maes-container'
import FadeControl from '../../components/sidebar/maes-fade-control'
import { Color } from '@wordpress/components/build-types/palette-edit/types'
import DropShadowControl from '../../components/sidebar/maes-drop-shadow-control'
import OffsetControl from '../../components/sidebar/maes-offset-control'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({
	attributes,
	setAttributes,
}: BlockEditProps<ContainerAttributes>) {
	// could be refactored to work with multiple palettes
	const colorPalette: Color[] = useSettings('color.palette.theme')[0]

	const gradientPalette = colorPalette.map((color) => {
		return {
			name: color.name,
			slug: color.slug + '-gradient',
			gradient: `linear-gradient(0deg, ${color.color} 0%, transparent 100%)`,
		}
	})

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Style', 'maes-domain')}>
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
						<PanelRow>
							<div
								style={{
									marginRight: '3px',
								}}
							>
								<OffsetControl
									attributes={attributes}
									setAttributes={setAttributes}
									direction='top'
								/>
							</div>
							<OffsetControl
								attributes={attributes}
								setAttributes={setAttributes}
								direction='bottom'
							/>
						</PanelRow>
						<PanelRow>
							<div
								style={{
									marginRight: '3px',
								}}
							>
								<OffsetControl
									attributes={attributes}
									setAttributes={setAttributes}
									direction='left'
								/>
							</div>
							<OffsetControl
								attributes={attributes}
								setAttributes={setAttributes}
								direction='right'
							/>
						</PanelRow>
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
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<MAESContainer attributes={attributes}>
					<InnerBlocks />
				</MAESContainer>
			</div>
		</>
	)
}
