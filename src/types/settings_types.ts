import z from 'zod'

export const SettingsSchema = z.object({
	site_title: z.string(),
	site_url: z.string().url(),
	slogan: z.string(),
	logo: z.string().url(),
})

export type Settings = z.infer<typeof SettingsSchema>
