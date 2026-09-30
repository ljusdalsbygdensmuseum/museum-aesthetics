import z from 'zod'

// from wp components border
export const BorderSchema = z.union([
	z.object({
		color: z.union([z.string(), z.undefined()]),
		width: z.union([z.string(), z.undefined()]),
		style: z.union([z.string(), z.undefined()]),
	}),
	z.undefined(),
])

export const BorderAttributeSchema = z.object({
	border: BorderSchema,
	offset: z.union([z.string(), z.number(), z.undefined()]),
})

export const ContainerAttributesSchema = z.object({
	border: z.object({
		top: BorderAttributeSchema,
		bottom: BorderAttributeSchema,
		left: BorderAttributeSchema,
		right: BorderAttributeSchema,
	}),
})

export type ContainerAttributes = z.infer<typeof ContainerAttributesSchema>
