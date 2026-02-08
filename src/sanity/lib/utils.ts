// lib/utils.ts

// Format ISO date to "MMM DD, YYYY" format
export const formatDate = (isoDate: string): string => {
  try {
    const date = new Date(isoDate)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).toUpperCase()
  } catch (error) {
    console.error('Error formatting date:', error)
    return isoDate
  }
}