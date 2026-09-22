import domReady from '@wordpress/dom-ready'
import { createRoot } from '@wordpress/element'

import DOMPurify from 'dompurify'

domReady(() => {
	const elements = document.querySelectorAll('.wp-block-maes-collage-banner')
	elements.forEach((element) => {
		const root = createRoot(element!)
		// needs to fix typesafety
		const nested = DOMPurify.sanitize(element.innerHTML)

		root.render(
			<>
				<div
					dangerouslySetInnerHTML={{
						__html: nested,
					}}
				></div>
			</>,
		)
	})
})
