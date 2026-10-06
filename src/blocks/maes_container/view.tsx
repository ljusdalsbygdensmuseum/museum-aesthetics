import domReady from '@wordpress/dom-ready'
import { createRoot } from '@wordpress/element'

import DOMPurify from 'dompurify'
import MAESContainer from '../../components/maes-container'

domReady(() => {
	const elements = document.querySelectorAll('.wp-block-maes-container')
	elements.forEach((element) => {
		const root = createRoot(element!)
		// needs to fix typesafety
		let attributes = JSON.parse(element.dataset.attributes)
		const nested = DOMPurify.sanitize(element.innerHTML)

		root.render(
			<>
				<MAESContainer attributes={attributes}>
					<div
						dangerouslySetInnerHTML={{
							__html: nested,
						}}
					></div>
				</MAESContainer>
			</>,
		)
	})
})
