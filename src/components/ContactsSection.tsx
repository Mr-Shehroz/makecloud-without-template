'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const ContactsSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        privacy: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            privacy: checked
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Dummy AJAX call
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500))

            if (response.ok) {
                setSubmitStatus('success')
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    message: '',
                    privacy: false
                })
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus('idle')
                }, 5000)
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className='mt-[7.5vh]'>
            <div className=''>
                <div className='grid md:grid-cols-2 gap-8 items-stretch'>
                    {/* Left Side - Gradient Background */}
                    <div className='hero 2xl:w-[967px] md:w-[53vw] text-white relative overflow-hidden rounded-br-[20px] rounded-tr-[20px] md:pt-[10.6vh] pt-[8vh] lg:pb-[11vh] pb-[6vh] 2xl:pl-[13.5vw] xl:pl-[9vw] md:pl-[7vw]'>
                        <Image src="/contact-vector.svg" height={100} width={100} alt='vector' className='xl:w-[199px] w-[160px] h-auto absolute -top-6 -right-6 z-10' />
                        <Image src="/contact-name-vector.svg" height={100} width={100} alt='vector' className='2xl:h-auto h-[100%] absolute top-0 left-0 z-10' />

                        {/* Content */}
                        <div className='relative z-10 2xl:w-[611px] xl:w-[520px] px-5 xl:px-0'>
                            <h2 className='font-normal h2 leading-[100%] font-archivo-black mb-6'>
                                LET`S START YOUR<br />CLOUD JOURNEY
                            </h2>

                            <p className='font-roboto font-normal text-white leading-[100%] mb-9 xl:text-[18px] text-[16px]'>
                                Ready to transform your infrastructure? Our cloud experts are here to hel you navigate your digital transformation.
                            </p>

                            {/* Contact Info */}
                            <div className='space-y-6'>
                                {/* Phone */}
                                <div className='flex items-start gap-4'>
                                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                                        <Phone className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white mb-2'>Call us directly</p>
                                        <a href='tel:+442036378933' className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white font-bold hover:underline'>
                                            +44 (0) 20 3637 8933
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex items-start gap-4'>
                                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                                        <Mail className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white mb-2'>Email us</p>
                                        <a href='mailto:hello@makecloud.com' className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white font-bold hover:underline'>
                                            hello@makecloud.com
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className='flex items-start gap-4'>
                                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                                        <MapPin className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white mb-2'>Visit our office</p>
                                        <p className='xl:text-[18px] text-[16px] font-roboto leading-[120%] text-white font-bold hover:underline'>
                                            Rothamsted Enterprises,<br />
                                            Harpenden, Hertfordshire AL5 2JQ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className='bg-[#F7F9FC] 2xl:w-[900px] md:w-[45vw] ml-auto border border-[#DADEE7] rounded-bl-[16px] rounded-tl-[16px] 2xl:pt-[5.7vh] pt-[4vh] 2xl:pl-[4.6vw] xl:pl-[3vw] md:pl-[1vw] relative overflow-hidden md:pb-0 pb-[4vh]'>
                        <Image src="/contact-vector-2.svg" height={100} width={100} alt='vector' className='xl:w-[78px] w-[65px] absolute right-0 top-1/2 -translate-y-1/2 z-10' />
                        <div className='2xl:w-[562px] xl:w-[470px] px-5 xl:px-0'>
                            <h3 className='font-normal font-archivo-black text-[22px] leading-[100%] text-black mb-6 uppercase'>
                                GET YOUR FREE CONSULTATION
                            </h3>

                            <form onSubmit={handleSubmit} className='xl:space-y-4 space-y-3 relative z-10'>
                                {/* Full Name */}
                                <div>
                                    <label htmlFor='fullName' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                                        Full Name <span className='text-red-500'>*</span>
                                    </label>
                                    <Input
                                        id='fullName'
                                        type='text'
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className='w-full xl:h-[48px] h-[40px]'
                                        placeholder=''
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Email and Phone */}
                                <div className='grid md:grid-cols-2 xl:gap-4 gap-3'>
                                    <div>
                                        <label htmlFor='email' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                                            Email <span className='text-red-500'>*</span>
                                        </label>
                                        <Input
                                            id='email'
                                            type='email'
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className='w-full xl:h-[48px] h-[40px]'
                                            placeholder=''
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='phone' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                                            Phone Number
                                        </label>
                                        <Input
                                            id='phone'
                                            type='tel'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className='w-full xl:h-[48px] h-[40px]'
                                            placeholder=''
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor='message' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                                        Message <span className='text-red-500'>*</span>
                                    </label>
                                    <Textarea
                                        id='message'
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className='w-full resize-none h-[150px]'
                                        placeholder=''
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg'>
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg'>
                                        Oops! Something went wrong. Please try again.
                                    </div>
                                )}

                                {/* Submit Button */}
                                <Button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='bg-[#345CA7] hover:bg-blue-700 text-white font-bold font-roboto 2xl:w-[562px] xl:w-[470px] w-full h-[43px] rounded-full xl:text-[18px] text-[16px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </Button>

                                {/* Privacy Policy Checkbox */}
                                <div className='flex items-center gap-3 mt-[1vh] pb-3'>
                                    <Checkbox
                                        id='privacy'
                                        checked={formData.privacy}
                                        onCheckedChange={handleCheckboxChange}
                                        className='accent-[#345CA7] shadow-inner border border-[#DADEE7]'
                                        style={{ boxShadow: 'inset 0 2px 6px rgba(52, 92, 167, 0.15)' }}
                                        disabled={isSubmitting}
                                    />
                                    <label htmlFor='privacy' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] text-black'>
                                        By submitting this form, you agree to our Privacy Policy.
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactsSection