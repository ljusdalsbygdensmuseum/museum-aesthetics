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
import { InspectorControls, useBlockProps } from '@wordpress/block-editor'
import type { BlockEditProps } from '@wordpress/blocks'

import type {
	CollageBanner,
	CollageImage,
} from '../../types/collage_banner_types'

import { MediaPlaceholder } from '@wordpress/block-editor'
import { BaseControl, PanelBody } from '@wordpress/components'

import { MAESImageGrid } from '../../components/maes-image-grid'
import { MAESBanner } from '../../components/maes-display-banner'
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'

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
}: BlockEditProps<CollageBanner>) {
	console.log(attributes)
	return (
		<>
			<InspectorControls>
				<PanelBody title='Images'>
					<BaseControl
						__nextHasNoMarginBottom
						label={__('Background Image', 'maes-domain')}
					>
						<MAESImageGrid />

						<MediaPlaceholder
							onSelect={(el) => {
								const image: CollageImage = {
									id: el.id,
									url: el.url,
								}
								setAttributes({ background: [image] })
							}}
							allowedTypes={['image']}
							multiple={false}
							labels={{ title: __('Image', 'maes-domain') }}
						></MediaPlaceholder>
					</BaseControl>
					<BaseControl
						__nextHasNoMarginBottom
						label={__('Collage images', 'maes-domain')}
					>
						<MAESImageGrid />
						<MediaPlaceholder
							onSelect={(el) => {
								const images: CollageImage[] = el.map((single) => {
									const image: CollageImage = {
										id: single.id,
										url: single.url,
									}
									return image
								})
								setAttributes({ imgs: [...images] })
							}}
							allowedTypes={['image']}
							multiple={true}
							labels={{ title: __('Images', 'maes-domain') }}
						></MediaPlaceholder>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<MAESBanner />
			</div>
		</>
	)
}
