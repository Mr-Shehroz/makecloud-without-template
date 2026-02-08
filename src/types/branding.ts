// types/branding.ts

// Partner Logo Type
export interface BrandingLogo {
  _key: string
  alt: string
  logo: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

// Social Link Type
export interface SocialLink {
  _key: string
  platform: string
  url: string
  icon: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

// Main Branding Data Type
export interface BrandingData {
  _id: string
  _type: 'branding'
  logos: BrandingLogo[]
  socialLinks: SocialLink[]
}