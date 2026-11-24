import { __experimentalUnitControl as UnitControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { ContainerBackground } from '../../types/container_types'

interface Props {
	attribute: ContainerBackground
	setBackground: (item: ContainerBackground, index: number) => void
	index: number
	direction: 'top' | 'bottom' | 'left' | 'right'
}

function OffsetControl({ attribute, setBackground, index, direction }: Props) {
	const offset = attribute.offset[direction]
	return (
		<>
			<UnitControl
				label={__(
					direction.charAt(0).toUpperCase() + direction.slice(1),
					'maes-domain',
				)}
				value={offset}
				onChange={(value) =>
					setBackground(
						{
							...attribute,
							offset: {
								...attribute.offset,
								[direction]: value,
							},
						},
						index,
					)
				}
				className={
					attribute.fullWidth && (direction === 'left' || direction === 'right')
						? 'maes-disabled'
						: ''
				}
			/>
		</>
	)
}

export default OffsetControl
