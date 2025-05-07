import { useState } from 'react'

import type {
	CollageImage,
	CollageImageTransform,
} from '../types/collage_banner_types'

interface Props {
	imgs: CollageImage[]
}

export function MAESCollage({ imgs }: Props) {
	const [positions, setPositions] = useState<CollageImageTransform[]>([])

	const rotationRange = 60

	const displayImgs = imgs.map((item, index) => {
		if (!positions[index]) {
			setPositions((oldPositions) => {
				const newPositions = oldPositions.concat([])

				const top = Math.random()
				const left = Math.random() // "rerole if to close to the middle"

				const rotation = rotationRange

				let rotationByPlace: number = (left * 2 - 1) * (top * 2 - 1) * rotation

				if (!item.isVertical && top >= 0.5) {
					rotationByPlace = rotationByPlace * -1
				}

				newPositions[index] = {
					rotation: rotationByPlace,
					top: top * 120 - 10,
					left: left * 120 - 10,
					zIndex: 1, // TODO: the closer to the middle the lower it should be
				}

				return newPositions
			})
		}

		return (
			<img
				src={item.url}
				style={
					positions[index]
						? {
								transform: `
                                    translate(-50%, -50%)
                                    scale(.1)
                                    rotate(${positions[index].rotation}deg)
                                `,
								top: `${positions[index].top}%`,
								left: `${positions[index].left}%`,
								zIndex: positions[index].zIndex,
						  }
						: {}
				}
			/>
		)
	})
	return <div className='maes-collage'>{displayImgs}</div>
}
