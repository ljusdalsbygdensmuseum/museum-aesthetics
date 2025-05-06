import type { CollageImage } from '../types/collage_banner_types'

interface Props {
	images: CollageImage[]
}

export function MAESImageGrid({ images }: Props) {
	const display = images.map((image) => {
		return <img className='maes-image-grid-small' src={image.url} />
	})
	return (
		<>
			{images.length ? (
				<div className='maes-image-grid-container'>{display}</div>
			) : (
				''
			)}
		</>
	)
}
