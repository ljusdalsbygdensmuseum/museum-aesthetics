import { __experimentalUnitControl as UnitControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { ContainerAttributes } from '../../types/container_types'

//set attributes being any is not right but I can't find a better way
interface Props {
	attributes: ContainerAttributes
	setAttributes: any
	direction: 'top' | 'bottom' | 'left' | 'right'
}

function OffsetControl({ attributes, setAttributes, direction }: Props) {
	const attribute = attributes.offset[direction]
	return (
		<>
			<UnitControl
				label={__(
					direction.charAt(0).toUpperCase() + direction.slice(1),
					'maes-domain',
				)}
				value={attribute}
				onChange={(value) =>
					setAttributes({
						border: {
							...attributes.offset,
							[direction]: value,
						},
					})
				}
				className={
					attributes.fullWidth &&
					(direction === 'left' || direction === 'right')
						? 'maes-disabled'
						: ''
				}
			/>
		</>
	)
}

export default OffsetControl
