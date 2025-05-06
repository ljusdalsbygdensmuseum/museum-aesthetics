import z from 'zod'

export const CollageImageSchema = z.object({
	id: z.number(),
	url: z.string().url(),
})

export const CollageBannerSchema = z.object({
	background: z.array(CollageImageSchema),
	imgs: z.array(CollageImageSchema),
})

export type CollageImage = z.infer<typeof CollageImageSchema>
export type CollageBanner = z.infer<typeof CollageBannerSchema>
