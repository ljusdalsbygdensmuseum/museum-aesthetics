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

export const FadeAttributeSchema = z.object({
	toggle: z.boolean(),
	width: z.number(),
})

export const ContainerAttributesSchema = z.object({
	border: z.object({
		top: BorderSchema,
		bottom: BorderSchema,
		left: BorderSchema,
		right: BorderSchema,
	}),
	offset: z.object({
		top: z.union([z.string(), z.undefined()]),
		bottom: z.union([z.string(), z.undefined()]),
		left: z.union([z.string(), z.undefined()]),
		right: z.union([z.string(), z.undefined()]),
	}),
	fade: z.object({
		horizontal: FadeAttributeSchema,
		vertical: FadeAttributeSchema,
	}),
	shadow: z.object({
		toggle: z.boolean(),
		horizontal: z.union([z.string(), z.undefined()]),
		vertical: z.union([z.string(), z.undefined()]),
		size: z.union([z.string(), z.undefined()]),
		color: z.union([z.string(), z.undefined()]),
	}),
	fullWidth: z.boolean(),
	rotation: z.number(),
	opacity: z.number(),
	gradientBackground: z.boolean(),
	background: z.string(),
})

export type ContainerAttributes = z.infer<typeof ContainerAttributesSchema>
