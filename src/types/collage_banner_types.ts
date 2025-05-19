import z from 'zod'

export const CollageImageSchema = z.object({
	id: z.number(),
	url: z.string().url(),
	isVertical: z.boolean(),
})

export const CollageImageTransformSchema = z.object({
	rotation: z.number(),
	top: z.number(),
	left: z.number(),
	zIndex: z.number(),
	blur: z.number(),
	brightness: z.number(),
})

export const CollageBannerSchema = z.object({
	background: z.array(CollageImageSchema),
	imgs: z.array(CollageImageSchema),
})

export type CollageImage = z.infer<typeof CollageImageSchema>
export type CollageImageTransform = z.infer<typeof CollageImageTransformSchema>
export type CollageBanner = z.infer<typeof CollageBannerSchema>
