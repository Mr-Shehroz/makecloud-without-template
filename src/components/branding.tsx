// components/Branding.tsx
'use client'

import Link from 'next/link'
import { getFileUrl } from '@/sanity/lib/client'
import type { BrandingData } from '@/types/branding'

interface BrandingProps {
  brandingData: BrandingData | null
}

const Branding = ({ brandingData }: BrandingProps) => {
  if (!brandingData) return null

  const { logos = [], socialLinks = [] } = brandingData

  return (
    <section className='bg-white py-[1vh]'>
      <div className='max-w-[1490px] mx-auto px-4 xl:px-10 flex justify-between items-center'>
        {/* Partner Logos */}
        <div className='flex justify-center items-center md:gap-3 gap-1.5'>
          {logos.map((logo) => (
            <img
              key={logo._key}
              src={getFileUrl(logo.logo)}
              alt={logo.alt || ''}
              className='xl:w-[69px] md:w-[50px] w-[35px] h-auto'
            />
          ))}
        </div>

        {/* Social Links */}
        <div className='flex items-center justify-center md:gap-3 gap-1.5'>
          {socialLinks.map((link) => (
            <Link
              key={link._key}
              className='bg-[#E53023] xl:w-10 xl:h-10 md:w-8 md:h-8 w-6 h-6 rounded-full flex justify-center items-center hover:opacity-80 transition-opacity duration-200'
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.platform}
            >
              <img
                src={getFileUrl(link.icon)}
                alt={link.platform}
                className='xl:w-[19px] md:w-[15px] w-[12px] h-auto object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Branding