import { RangeControl, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import {
	ContainerAttributes,
	ContainerBackground,
} from '../../types/container_types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attribute: ContainerBackground
	setBackground: (item: ContainerBackground, index: number) => void
	index: number
	direction: 'horizontal' | 'vertical'
}

function FadeControl({ attribute, setBackground, index, direction }: Props) {
	const fade =
		direction === 'horizontal'
			? attribute.fade.horizontal
			: attribute.fade.vertical
	return (
		<>
			<ToggleControl
				label={__(
					direction.charAt(0).toUpperCase() + direction.slice(1),
					'maes-domain',
				)}
				checked={fade.toggle ? fade.toggle : false}
				onChange={(value) => {
					setBackground(
						{
							...attribute,
							fade: {
								...attribute.fade,
								[direction]: { ...fade, toggle: value },
							},
						},
						index,
					)
				}}
			/>
			{fade.toggle && (
				<RangeControl
					label={__('Fade size', 'maes-domain')}
					withInputField={false}
					value={fade.width}
					onChange={(value) => {
						setBackground(
							{
								...attribute,
								fade: {
									...attribute.fade,
									[direction]: { ...fade, width: value },
								},
							},
							index,
						)
					}}
				/>
			)}
		</>
	)
}

export default FadeControl
