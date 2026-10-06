import { RangeControl, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { ContainerAttributes } from '../../types/container_types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attributes: ContainerAttributes
	setAttributes: any
	direction: 'horizontal' | 'vertical'
}

function FadeControl({ attributes, setAttributes, direction }: Props) {
	const attribute =
		direction === 'horizontal'
			? attributes.fade.horizontal
			: attributes.fade.vertical
	const title =
		direction === 'horizontal'
			? __('Fade horizontal', 'maes-domain')
			: __('Fade vertical', 'maes-domain')

	return (
		<>
			<ToggleControl
				className={
					attributes.fullWidth && direction === 'vertical'
						? 'maes-disabled'
						: ''
				}
				label={title}
				checked={attribute.toggle ? attribute.toggle : false}
				onChange={(value) => {
					setAttributes({
						fade: {
							...attributes.fade,
							[direction]: { ...attribute, toggle: value },
						},
					})
				}}
			/>
			{attribute.toggle && (
				<RangeControl
					label={__('Fade amount', 'maes-domain')}
					withInputField={false}
					value={attribute.width}
					onChange={(value) => {
						setAttributes({
							fade: {
								...attributes.fade,
								[direction]: { ...attribute, width: value },
							},
						})
					}}
				/>
			)}
		</>
	)
}

export default FadeControl
