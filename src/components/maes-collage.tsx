import { useRef, useState, useEffect } from 'react'

import type {
	CollageImage,
	CollageImageTransform,
} from '../types/collage_banner_types'

interface Props {
	background: CollageImage
	imgs: CollageImage[]
}

export function MAESCollage({ background, imgs }: Props) {
	const containerRef = useRef(null)
	const [isWide, setIsWide] = useState(false)

	const rotationRange = 60

	function rollPosition(item: CollageImage) {
		let top = Math.random()
		let left = Math.random()

		// reroll position if it is in the middle (top > 0.2 && top < 0.8 && left > 0.2 && left < 0.8)
		// side pref only works with bottom top right at the moment should be changed in future
		// shuld be random throug log scaling and stuff
		// temporary for banner only

		while (
			(top > 0.2 && top < 0.6 && left < 0.8 && left > 0.2) ||
			(left < 0.4 && !isWide) ||
			(left < 0.7 && item.isVertical) ||
			(top < 0.7 && item.sidePref?.bottom) ||
			(top > 0.3 && item.sidePref?.top) ||
			(left < 0.8 && item.sidePref?.right)
		) {
			top = Math.random()
			left = Math.random()
		}
		const rotation = rotationRange

		let rotationByPlace: number = (left * 2 - 1) * (top * 2 - 1) * rotation

		if (!item.isVertical) {
			// invert rotation if image is horizontal
			rotationByPlace = rotationByPlace * -1

			// flip upside down if horizontal image is in the top of area
			// if (top < 0.5) {
			// 	rotationByPlace = rotationByPlace - 180
			// }
		}

		const fromCenter =
			(left * 2 - 1 < 0 ? (left * 2 - 1) * -1 : left * 2 - 1) *
			(top * 2 - 1 < 0 ? (top * 2 - 1) * -1 : top * 2 - 1)

		const position = {
			rotation: rotationByPlace,
			top: top * 120 - 10,
			left: left * 120 - 10,
			zIndex: Math.floor(fromCenter * 100),
			blur: (fromCenter * -1 + 0.6) * 4,
			brightness: fromCenter + 0.6,
		}
		return position
	}

	function theImages() {
		const theImgs = imgs.map((item, index) => {
			const position = rollPosition(item)

			return (
				// change to div with background insted of img
				<img
					src={item.url}
					style={{
						transform: `
                            translate(-50%, -50%)
							scale(.6)
                            rotate(${position.rotation}deg)
                        `,
						top: `${position.top}%`,
						left: `${position.left}%`,
						zIndex: position.zIndex,
						filter: `blur(${position.blur}px) 
							drop-shadow(0 0 2rem black) 
							brightness(${position.brightness})`,
					}}
				/>
			)
		})
		return theImgs
	}

	useEffect(() => {
		if (containerRef.current) {
			const observer = new ResizeObserver((entries) => {
				for (let entry of entries) {
					if (entry.contentRect.width > 2560) {
						setIsWide(true)
					} else {
						setIsWide(false)
					}
				}
			})

			observer.observe(containerRef.current)

			return () => {
				observer.disconnect()
			}
		}
	}, [])

	const displayImgs = theImages()

	return (
		<div className='maes-collage' ref={containerRef}>
			<div
				className='maes-collage-background'
				style={{
					backgroundImage: `linear-gradient(to left, transparent , #2E0F08), 
						radial-gradient(transparent 75%, #2E0F08), 
						url(${background.url})`,
				}}
			></div>
			{displayImgs}
		</div>
	)
}
