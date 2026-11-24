import { __ } from '@wordpress/i18n'
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	useSettings,
} from '@wordpress/block-editor'
import { Button, PanelBody } from '@wordpress/components'
import { create } from '@wordpress/icons'
import { BlockEditProps } from '@wordpress/blocks'

import ContainerBackgroundControl from '../../components/sidebar/maes-container-background-control'
import MAESContainer from '../../components/maes-container'

import { Color } from '@wordpress/components/build-types/palette-edit/types'

import {
	ContainerAttributes,
	ContainerBackground,
} from '../../types/container_types'

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

	const setBackground = (item: ContainerBackground, index: number) => {
		setAttributes((oldAttributes) => {
			const newAttributes = structuredClone(oldAttributes)

			newAttributes.backgrounds[index] = {
				...newAttributes.backgrounds[index],
				...item,
			}

			return newAttributes
		})
	}

	const removeBackground = (index: number) => {
		setAttributes((oldAttributes) => {
			const newAttributes = structuredClone(oldAttributes)

			newAttributes.backgrounds.splice(index, 1)

			return newAttributes
		})
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Style', 'maes-domain')}>
					{attributes.backgrounds.map((item, index) => {
						return (
							<ContainerBackgroundControl
								attributes={attributes}
								setAttributes={setAttributes}
								setBackground={setBackground}
								removeBackground={removeBackground}
								index={index}
								colorPalette={colorPalette}
								gradientPalette={gradientPalette}
							/>
						)
					})}

					<Button
						icon={create}
						variant='tertiary'
						onClick={() => {
							setAttributes((oldAttributes) => {
								const newAttributes = structuredClone(oldAttributes)

								newAttributes.backgrounds.push({
									border: {
										top: {
											width: undefined,
											color: undefined,
											style: undefined,
										},
										bottom: {
											width: undefined,
											color: undefined,
											style: undefined,
										},
										left: {
											width: undefined,
											color: undefined,
											style: undefined,
										},
										right: {
											width: undefined,
											color: undefined,
											style: undefined,
										},
									},
									offset: {
										top: undefined,
										bottom: undefined,
										left: undefined,
										right: undefined,
									},
									fade: {
										horizontal: {
											toggle: false,
											width: 15,
										},
										vertical: {
											toggle: false,
											width: 15,
										},
									},
									shadow: {
										toggle: false,
										horizontal: '0px',
										vertical: '0px',
										size: '0px',
										color: '#000',
									},
									fullWidth: false,
									opacity: 100,
									rotation: 0,
									gradientBackground: false,
									background: '',
								})

								return newAttributes
							})
						}}
					>
						{__('Add More', 'maes-domain')}
					</Button>
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
