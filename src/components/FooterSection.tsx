'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const FooterSection = () => {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const quickLinks = [
        { name: 'Service', href: '/service' },
        { name: 'Partner', href: '/partner' },
        { name: 'Case Study', href: '/case-study' },
        { name: 'Contact', href: '/contact' },
    ]

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Dummy AJAX call
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000))

            if (response.ok) {
                setSubmitStatus('success')
                setEmail('')
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus('idle')
                }, 5000)
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className='mt-[11vh]'>
            <div className='bg-[#0F1F3D] md:py-16 py-12'>
                <div className='max-w-[1480px] mx-auto px-4 xl:px-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8'>
                        {/* Logo and Certifications */}
                        <div>
                            <div className='mb-6'>
                                <Image
                                    src='/logo.svg'
                                    alt='MakeCloud'
                                    width={180}
                                    height={40}
                                    className='xl:w-[296px] w-[200px] h-auto'
                                />
                            </div>

                            {/* Certification Badges */}
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src='/footer-aws.svg'
                                        alt='AWS Partner'
                                        width={80}
                                        height={40}
                                        className='2xl:w-[114px] w-[90px] h-auto'
                                    />
                                    <Image
                                        src='/footer-cloud.svg'
                                        alt='Google Cloud Partner'
                                        width={80}
                                        height={40}
                                        className='2xl:w-[132px] w-[110px] h-auto'
                                    />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src='/footer-datadog.svg'
                                        alt='Advanced Partner'
                                        width={80}
                                        height={40}
                                        className='2xl:w-[105px] w-[80px] h-auto'
                                    />
                                    <Image
                                        src='/footer-hm.svg'
                                        alt='Gartner'
                                        width={80}
                                        height={40}
                                        className='2xl:w-[90px] w-[70px] h-auto'
                                    />  
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className='flex gap-3 mt-[2vh]'>
                                <a
                                    href='https://twitter.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-red-500 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors'
                                >
                                    <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                                    </svg>
                                </a>
                                <a
                                    href='https://linkedin.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='bg-red-500 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors'
                                >
                                    <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className='ml-[2.4vw]'>
                            <h3 className='text-white font-normal font-archivo-black xl:text-[22px] lg:text-[20px] text-[18px] mb-5 uppercase'>
                                Quick Links
                            </h3>
                            <ul className='space-y-3'>
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className='text-white font-roboto font-normal xl:text-[18px] text-[16px] hover:opacity-90 transition-colors flex items-center gap-2 group'
                                        >
                                            <span className='text-red-500 group-hover:translate-x-1 transition-transform'>›</span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className='xl:ml-[-2vw]'>
                            <h3 className='text-white font-normal font-archivo-black xl:text-[22px] lg:text-[20px] text-[18px] mb-5 uppercase'>
                                Contact Us
                            </h3>
                            <ul className='space-y-4'>
                                <li>
                                    <a
                                        href='tel:+442036378933'
                                        className='flex items-start gap-3 text-white font-roboto font-normal xl:text-[18px] text-[16px] hover:opacity-90 transition-colors group'
                                    >
                                        <div className='bg-red-500 w-8 h-8 rounded-full flex justify-center items-center'>
                                            <Phone className='w-4 h-4 text-white' />
                                        </div>
                                        <span className='pt-1'>+44 (0) 20 3637 8933</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='mailto:hello@makecloud.com'
                                        className='flex items-start gap-3 text-white font-roboto font-normal xl:text-[18px] text-[16px] hover:opacity-90 transition-colors group'
                                    >
                                        <div className='bg-red-500 w-8 h-8 rounded-full flex justify-center items-center'>
                                            <Mail className='w-4 h-4 text-white' />
                                        </div>
                                        <span className='pt-1'>hello@makecloud.com</span>
                                    </a>
                                </li>
                                <li>
                                    <div className='flex items-start gap-3 text-white font-roboto font-normal xl:text-[18px] text-[16px] hover:opacity-90'>
                                        <div className='bg-red-500 w-8 h-8 rounded-full flex justify-center items-center'>
                                            <MapPin className='w-4 h-4 text-white' />
                                        </div>
                                        <span className='pt-1'>
                                            Rothamsted Enterprises, Harpenden,<br />
                                            Hertfordshire AL5 2JQ
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className='xl:ml-[2.4vw]'>
                            <h3 className='text-white font-normal font-archivo-black xl:text-[22px] lg:text-[20px] text-[18px] mb-6 uppercase'>
                                Newsletter
                            </h3>
                            <form onSubmit={handleSubscribe} className='space-y-3'>
                                <Input
                                    type='email'
                                    placeholder='Email here'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isSubmitting}
                                    className='bg-white border-none rounded-full px-6 py-6 text-gray-800 font-roboto placeholder:font-roboto placeholder:text-black placeholder:text-[18px] xl:text-[18px] text-[16px] placeholder:text-normal leading-[100%] xl:w-[268px] lg:w-[200px] w-full h-[43px]'
                                />
                                
                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <p className='text-green-400 text-sm font-roboto'>
                                        Successfully subscribed!
                                    </p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className='text-red-400 text-sm font-roboto'>
                                        Something went wrong. Try again.
                                    </p>
                                )}
                                
                                <Button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full xl:w-[268px] lg:w-[200px] w-full h-[43px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='bg-white h-[60px] text-center flex justify-center items-center'>
                <h5 className='font-roboto font-normal xl:text-[18px] text-[16px] text-black'>
                    © 2026 MakeCloud. All rights reserved.
                </h5>
            </div>
        </section>
    )
}

export default FooterSection