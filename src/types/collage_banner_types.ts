import z from 'zod'

export const SidePrefSchema = z.object({
	side_pref: z
		.object({
			top: z.boolean(),
			bottom: z.boolean(),
			left: z.boolean(),
			right: z.boolean(),
		})
		.nullish(),
})

export const CollageImageSchema = z.object({
	id: z.number(),
	url: z.string().url(),
	isVertical: z.boolean(),
	SidePrefSchema,
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
