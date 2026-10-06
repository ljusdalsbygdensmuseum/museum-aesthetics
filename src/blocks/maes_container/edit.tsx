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
import { PanelBody, ToggleControl } from '@wordpress/components'
import { Field } from '@wordpress/ui'
import { BlockEditProps } from '@wordpress/blocks'
import { ContainerAttributes } from '../../types/container_types'
import BorderStyle from '../../components/sidebar/maes-border-style'
import MAESContainer from '../../components/maes-container'
import FadeControl from '../../components/sidebar/maes-fade-control'
import { Color } from '@wordpress/components/build-types/palette-edit/types'

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

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Style', 'maes-domain')}>
					<Field.Root>
						<ToggleControl
							label={__('Full width', 'maes-domain')}
							checked={attributes.fullWidth}
							onChange={(value) => {
								setAttributes({ fullWidth: value })
							}}
						/>
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

						<BorderStyle
							attributes={attributes}
							setAttributes={setAttributes}
							direction='top'
							colors={colorPalette}
						/>
						<BorderStyle
							attributes={attributes}
							setAttributes={setAttributes}
							direction='bottom'
							colors={colorPalette}
						/>
						<BorderStyle
							attributes={attributes}
							setAttributes={setAttributes}
							direction='left'
							colors={colorPalette}
						/>
						<BorderStyle
							attributes={attributes}
							setAttributes={setAttributes}
							direction='right'
							colors={colorPalette}
						/>
					</Field.Root>
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
