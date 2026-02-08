// components/BrandingContainer.tsx
import { client } from '@/sanity/lib/client'
import Branding from './branding'
import type { BrandingData } from '@/types/branding'

export default async function BrandingContainer() {
  // Fetch data directly in Server Component
  const brandingData: BrandingData | null = await client.fetch(
    `*[_type == "branding"][0]{
      _id,
      _type,
      logos[] {
        _key,
        alt,
        logo
      },
      socialLinks[] {
        _key,
        platform,
        url,
        icon
      }
    }`
  )

  return <Branding brandingData={brandingData} />
}