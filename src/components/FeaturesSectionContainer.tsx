// components/FeaturesSectionContainer.tsx
import { client } from '@/sanity/lib/client'
import FeaturesSection from './FeaturesSection'
import type { FeaturesData } from '@/types/features'

export default async function FeaturesSectionContainer() {
  // Fetch features data from Sanity
  const featuresData: FeaturesData | null = await client.fetch(
    `*[_type == "features"][0]{
      _id,
      _type,
      heading,
      tickIcon,
      featuresList[] {
        _key,
        title,
        description,
        column,
        order
      } | order(column asc, order asc)
    }`
  )

  return <FeaturesSection featuresData={featuresData} />
}