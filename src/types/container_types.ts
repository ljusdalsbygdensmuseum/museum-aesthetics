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

export const FadeAttributeSchema = z.object({
	toggle: z.boolean(),
	width: z.number(),
})

export const ContainerAttributesSchema = z.object({
	border: z.object({
		top: BorderAttributeSchema,
		bottom: BorderAttributeSchema,
		left: BorderAttributeSchema,
		right: BorderAttributeSchema,
	}),
	fade: z.object({
		horizontal: FadeAttributeSchema,
		vertical: FadeAttributeSchema,
	}),
	fullWidth: z.boolean(),
	opacity: z.number(),
	gradientBackground: z.boolean(),
	background: z.string(),
})

export type ContainerAttributes = z.infer<typeof ContainerAttributesSchema>
