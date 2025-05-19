/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss'

/**
 * Internal dependencies
 */
import Edit from './edit'
import metadata from './block.json'

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	icon: {
		src: (
			<svg width='100%' height='100%' viewBox='0 0 8684 8684'>
				<path d='M659.261,3146.55l-659.261,-380.624l1596.91,-2765.93l2033.47,1174.02l-536.013,928.402l-2435.1,0l-0,1044.13Zm5263.67,-1044.13l-334.258,-1247.47l2268.04,-607.719l826.621,3084.99l-659.26,176.649l-0,-1406.46l-2101.14,0Zm1684.48,1626.42l0,1789.52l-6531.48,-0l0,-1789.52l6531.48,0Zm-6531.48,-1209.75l6531.48,-0l0,793.084l-6531.48,0l0,-793.084Zm6948.15,2317.68l659.26,380.625l-1596.91,2765.93l-2544.08,-1468.83l334.555,-579.466l3147.18,-0l-0,-1098.26Zm-3628.3,1098.26l-422.607,731.977l2231.39,1288.29l-2615.74,700.885l-729.131,-2721.16l1536.09,-0Zm-1967.45,-0l390.805,1458.51l-1021.54,589.786l-1797.59,-3113.51l659.261,-380.624l-0,1445.84l1769.06,-0Z' />
			</svg>
		),
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
})
