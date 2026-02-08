'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [serviceOpen, setServiceOpen] = useState(false)
    const [partnerOpen, setPartnerOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setServiceOpen(false)
        setPartnerOpen(false)
    }

    return (
        <header className='py-[2vh]'>
            <div className='flex justify-between items-center max-w-[1480px] mx-auto px-4 xl:px-10'>
                {/* Desktop Navigation - Hidden on Mobile and md to lg, visible from lg */}
                <nav className='hidden xl:flex items-center lg:gap-6 gap-6 links'>
                    <Link href="#" className='hover:text-gray-300 transition-colors'>
                        Home
                    </Link>
                    
                    {/* Service with Dropdown */}
                    <div className='relative group'>
                        <Link href="#" className='cursor-pointer flex items-center gap-2 group hover:text-gray-300 transition-colors'>
                            Service
                            <span><img src="/dropdown.png" alt="dropdown-arrow" className='h-auto mt-1 group-hover:rotate-180 transition-transform duration-300' /></span>
                        </Link>
                        {/* Dropdown Menu */}
                        <div className='absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                            <Link href="#" className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'>
                                Service 1
                            </Link>
                            <Link href="#" className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'>
                                Service 2
                            </Link>
                            <Link href="#" className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'>
                                Service 3
                            </Link>
                        </div>
                    </div>
                    
                    {/* Partner with Dropdown */}
                    <div className='relative group'>
                        <Link href="#" className='cursor-pointer flex items-center gap-2 group hover:text-gray-300 transition-colors'>
                            Partner
                            <span><img src="/dropdown.png" alt="dropdown-arrow" className='h-auto mt-1 group-hover:rotate-180 transition-transform duration-300' /></span>
                        </Link>
                        {/* Dropdown Menu */}
                        <div className='absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                            <Link href="#" className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'>
                                Partner 1
                            </Link>
                            <Link href="#" className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'>
                                Partner 2
                            </Link>
                            <Link href="#" className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'>
                                Partner 3
                            </Link>
                        </div>
                    </div>
                    
                    <Link href="#" className='hover:text-gray-300 transition-colors'>
                        Case Study
                    </Link>
                    <Link href="#" className='hover:text-gray-300 transition-colors'>
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button for md to lg - Visible only md to lg */}
                <button 
                    onClick={toggleMenu}
                    className='hidden md:block xl:hidden text-white z-50 relative'
                    aria-label='Toggle menu'
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Logo - Left on Mobile, Centered on Desktop */}
                <div className='flex items-center md:absolute md:left-1/2 md:-translate-x-[50%]'>
                    <Link href="/">
                        <Image 
                            src="/logo.svg" 
                            alt="logo" 
                            height={100} 
                            width={100} 
                            className='2xl:w-[292px] xl:w-[250px] lg:w-[220px] md:w-[180px] w-[140px] h-auto' 
                        />
                    </Link>
                </div>

                {/* Contact Info - Hidden on Mobile */}
                <div className='hidden md:flex flex-col gap-0'>
                    <h5 className='links'>+91-234-567-8900</h5>
                    <h4 className='font-normal lg:text-[20px] text-[18px] font-archivo-black text-white'>Free Consultant</h4>
                </div>

                {/* Mobile Menu Button - Visible only on Mobile */}
                <button 
                    onClick={toggleMenu}
                    className='md:hidden text-white z-50 relative'
                    aria-label='Toggle menu'
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay & Sidebar */}
            <>
                {/* Backdrop */}
                {isMenuOpen && (
                    <div 
                        className='xl:hidden fixed inset-0 bg-black/50 z-40'
                        onClick={toggleMenu}
                    />
                )}

                {/* Sidebar */}
                <div className={`xl:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] hero z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Close Button */}
                    <div className='flex justify-end p-6'>
                        <button 
                            onClick={toggleMenu}
                            className='text-white hover:text-gray-300 transition-colors'
                            aria-label='Close menu'
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Logo in Sidebar */}
                    <div className='flex justify-center px-6 mb-8'>
                        <Link href="/" onClick={toggleMenu}>
                            <Image 
                                src="/logo.svg" 
                                alt="logo" 
                                height={100} 
                                width={100} 
                                className='w-[160px] h-auto' 
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className='flex flex-col px-6 gap-4 links text-lg'>   
                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white/30 hover:border-white transition-colors text-white hover:text-gray-300'
                        >
                            Home
                        </Link>
                        
                        {/* Service with Accordion */}
                        <div className='border-b border-white/30'>
                            <button
                                onClick={() => setServiceOpen(!serviceOpen)}
                                className='w-full py-3 flex items-center justify-between text-white hover:text-gray-300 transition-colors'
                            >
                                <span>Service</span>
                                <ChevronDown 
                                    size={20} 
                                    className={`transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${serviceOpen ? 'max-h-96 mb-3' : 'max-h-0'}`}>
                                <div className='pl-4 flex flex-col gap-2'>
                                    <Link 
                                        href="#" 
                                        onClick={toggleMenu}
                                        className='py-2 text-white/80 hover:text-white transition-colors text-base'
                                    >
                                        Service 1
                                    </Link>
                                    <Link 
                                        href="#" 
                                        onClick={toggleMenu}
                                        className='py-2 text-white/80 hover:text-white transition-colors text-base'
                                    >
                                        Service 2
                                    </Link>
                                    <Link 
                                        href="#" 
                                        onClick={toggleMenu}
                                        className='py-2 text-white/80 hover:text-white transition-colors text-base'
                                    >
                                        Service 3
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Partner with Accordion */}
                        <div className='border-b border-white/30'>
                            <button
                                onClick={() => setPartnerOpen(!partnerOpen)}
                                className='w-full py-3 flex items-center justify-between text-white hover:text-gray-300 transition-colors'
                            >
                                <span>Partner</span>
                                <ChevronDown 
                                    size={20} 
                                    className={`transition-transform duration-300 ${partnerOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${partnerOpen ? 'max-h-96 mb-3' : 'max-h-0'}`}>
                                <div className='pl-4 flex flex-col gap-2'>
                                    <Link 
                                        href="#" 
                                        onClick={toggleMenu}
                                        className='py-2 text-white/80 hover:text-white transition-colors text-base'
                                    >
                                        Partner 1
                                    </Link>
                                    <Link 
                                        href="#" 
                                        onClick={toggleMenu}
                                        className='py-2 text-white/80 hover:text-white transition-colors text-base'
                                    >
                                        Partner 2
                                    </Link>
                                    <Link 
                                        href="#" 
                                        onClick={toggleMenu}
                                        className='py-2 text-white/80 hover:text-white transition-colors text-base'
                                    >
                                        Partner 3
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white/30 hover:border-white transition-colors text-white hover:text-gray-300'
                        >
                            Case Study
                        </Link>
                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white/30 hover:border-white transition-colors text-white hover:text-gray-300'
                        >
                            Contact
                        </Link>
                        
                        {/* Contact Info in Mobile Menu */}
                        <div className='flex flex-col gap-2 mt-4'>
                            <h5 className='links text-base text-white'>+91-234-567-8900</h5>
                            <h4 className='font-normal text-sm font-archivo-black text-white'>Free Consultant</h4>
                        </div>
                    </nav>
                </div>
            </>
        </header>
    )
}

export default Header