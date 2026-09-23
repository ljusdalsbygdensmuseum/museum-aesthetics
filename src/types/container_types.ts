import z from 'zod'

export const BorderSchema = z.object({
	toggled: z.boolean(),
	color: z.string(),
	opacity: z.number(),
	width: z.string(),
	offset: z.string(),
})

export const ContainerAttributesSchema = z.object({
	border: z.object({
		top: BorderSchema,
		bottom: BorderSchema,
		left: BorderSchema,
		right: BorderSchema,
	}),
})

export type ContainerAttributes = z.infer<typeof ContainerAttributesSchema>
