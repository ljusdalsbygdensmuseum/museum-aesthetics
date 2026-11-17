import { __ } from '@wordpress/i18n'
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	useSettings,
} from '@wordpress/block-editor'
import { PanelBody } from '@wordpress/components'
import { BlockEditProps } from '@wordpress/blocks'

import ContainerBackgroundControl from '../../components/sidebar/maes-container-background-control'
import MAESContainer from '../../components/maes-container'

import { Color } from '@wordpress/components/build-types/palette-edit/types'

import { ContainerAttributes } from '../../types/container_types'

import './editor.scss'

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
					<ContainerBackgroundControl
						attributes={attributes}
						setAttributes={setAttributes}
						index={0}
						colorPalette={colorPalette}
						gradientPalette={gradientPalette}
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
