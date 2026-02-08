// sanity/lib/client.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// Image URL builder
const builder = imageUrlBuilder(client)

// Helper function to get file URL from Sanity asset
export const getFileUrl = (asset: any): string => {
  if (!asset?.asset?._ref) return ''
  
  const ref = asset.asset._ref
  
  // Format: file-{id}-{extension} or image-{id}-{dimensions}-{format}
  const parts = ref.split('-')
  
  // Handle file assets (SVG, etc.)
  if (ref.startsWith('file-')) {
    // file-{assetId}-{extension}
    const assetId = parts.slice(1, -1).join('-')
    const extension = parts[parts.length - 1]
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${assetId}.${extension}`
  }
  
  // Handle image assets (PNG, JPG, WebP)
  if (ref.startsWith('image-')) {
    // Use the image URL builder for proper transformations
    return builder.image(asset).url() || ''
  }
  
  return ''
}