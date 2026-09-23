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
} from '@wordpress/block-editor'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { Field, Tabs } from '@wordpress/ui'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Style', 'maes-domain')}>
					<Field.Root>
						<ToggleControl
							label={__('Top border')}
							onChange={(value) => console.log(value)}
						/>
						<ToggleControl
							label={__('Bottom border')}
							onChange={(value) => console.log(value)}
						/>
						<ToggleControl
							label={__('Left border')}
							onChange={(value) => console.log(value)}
						/>
						<ToggleControl
							label={__('Right border')}
							onChange={(value) => console.log(value)}
						/>
					</Field.Root>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<InnerBlocks />
			</div>
		</>
	)
}
