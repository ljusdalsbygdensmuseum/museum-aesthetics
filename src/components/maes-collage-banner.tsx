import { useState, useEffect, ReactNode } from 'react'
import apiFetch from '@wordpress/api-fetch'

import { Settings, SettingsSchema } from '../types/settings_types'
import { MAESCollage } from './maes-collage'

import type { CollageImage } from '../types/collage_banner_types'

interface Props {
	background: CollageImage
	imgs: CollageImage[]
	children: React.ReactNode
}

export function MAESCollageBanner({ background, imgs, children }: Props) {
	const defaultData: Settings = {
		site_title: '',
		site_url: '',
		slogan: '',
		logo: '',
	}
	const [data, setData] = useState(defaultData)

	//get the rest data
	useEffect(() => {
		apiFetch({ path: 'maes/v1/settings' }).then((restData) => {
			if (typeof restData == 'object' && restData != undefined) {
				if (SettingsSchema.safeParse(restData).success) {
					setData(SettingsSchema.parse(restData))
				} else {
					console.log(SettingsSchema.safeParse(restData))
				}
			}
		})
	}, [])
	return (
		<div className='maes-collage-banner'>
			<div className='maes-collage-banner-content'>
				<>{children}</>
			</div>

			{background != null || imgs.length ? (
				<MAESCollage background={background} imgs={imgs} />
			) : (
				''
			)}
		</div>
	)
}
