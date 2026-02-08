// schemas/branding.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'branding',
  title: 'Branding',
  type: 'document',
  fields: [
    // Partner Logos Section
    defineField({
      name: 'logos',
      title: 'Partner Logos',
      type: 'array',
      description: 'Upload partner/company logos (SVG, PNG, JPG, WebP)',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Logo Item',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required().min(2).max(100),
            }),
            defineField({
              name: 'logo',
              title: 'Logo File',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // Social Links Section
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      description: 'Add unlimited social media links with custom icons',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              description: 'e.g., Twitter, LinkedIn, Facebook, Instagram, etc.',
              validation: (Rule) => Rule.required().min(2).max(50),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
            }),
            defineField({
              name: 'icon',
              title: 'Icon (SVG/PNG/JPG/WebP)',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})