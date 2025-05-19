import domReady from '@wordpress/dom-ready'
import { createRoot } from '@wordpress/element'

import { MAESCollageBanner } from '../../components/maes-collage-banner'

domReady(() => {
	const elements = document.querySelectorAll('.wp-block-maes-collage-banner')
	elements.forEach((element) => {
		const root = createRoot(element!)
		// needs to fix typesafety
		let attributes = JSON.parse(element.dataset.attributes)

		root.render(
			<>
				<MAESCollageBanner
					imgs={attributes.imgs}
					background={attributes.background[0]}
				/>
			</>
		)
	})
})
