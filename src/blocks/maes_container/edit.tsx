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
import { BlockEditProps } from '@wordpress/blocks'
import { ContainerAttributes } from '../../types/container_types'

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
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Style', 'maes-domain')}>
					<Field.Root>
						<ToggleControl
							label={__('Top border')}
							checked={
								attributes.border.top.toggled
									? attributes.border.top.toggled
									: false
							}
							onChange={(value) =>
								setAttributes({
									border: {
										...attributes.border,
										top: { ...attributes.border.top, toggled: value },
									},
								})
							}
						/>
						<ToggleControl
							label={__('Bottom border')}
							checked={
								attributes.border.bottom.toggled
									? attributes.border.bottom.toggled
									: false
							}
							onChange={(value) =>
								setAttributes({
									border: {
										...attributes.border,
										bottom: { ...attributes.border.bottom, toggled: value },
									},
								})
							}
						/>
						<ToggleControl
							label={__('Left border')}
							checked={
								attributes.border.left.toggled
									? attributes.border.left.toggled
									: false
							}
							onChange={(value) =>
								setAttributes({
									border: {
										...attributes.border,
										left: { ...attributes.border.left, toggled: value },
									},
								})
							}
						/>
						<ToggleControl
							label={__('Right border')}
							checked={
								attributes.border.right.toggled
									? attributes.border.right.toggled
									: false
							}
							onChange={(value) =>
								setAttributes({
									border: {
										...attributes.border,
										right: { ...attributes.border.right, toggled: value },
									},
								})
							}
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
