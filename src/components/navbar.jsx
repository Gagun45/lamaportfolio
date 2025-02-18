'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink'
import { motion } from 'framer-motion'

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: 'rgb(255,255,255)'
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: 'rgb(255,255,255)'
        }
    }

    const listVariants = {
        closed: {
            height: 0,
            width: 0,
            visibility: 'hidden',
            transition: {
                duration: 0.3
            }
        },
        opened: {
            height: '100vh',
            width: '100vw',
            visibility: 'visible',
            transition: {
                duration: 0.3,
                when: 'beforeChildren',
                staggerChildren: 0.3
            }
        }
    }
    const listItemVariants = {
        closed: {
            x: -50,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-lg'>

            {/* LINKS */}
            <div className='hidden md:flex gap-4 flex-1'>
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>

            {/* LOGO */}
            <div className='md:hidden lg:flex lg:flex-1 lg:justify-center'>
                <Link href='/' className='text-sm bg-black rounded-md font-semibold p-1 flex items-center gap-1 justify-center'>
                    <span className='text-white'>Lama</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
                </Link>
            </div>

            {/* ICONS */}
            <div className='hidden md:flex gap-4 flex-1 justify-end'>
                <Link href='#'>
                    <Image src='/github.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/dribbble.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/instagram.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/facebook.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/pinterest.png' alt='' width={24} height={24} />
                </Link>
                <Link href='#'>
                    <Image src='/linkedin.png' alt='' width={24} height={24} />
                </Link>
            </div>

            {/* RESPONSIVE MENU */}
            <div className='md:hidden'>
                {/* MENU BUTTON */}
                <button
                    className='w-10 h-8 flex flex-col justify-between z-[60] relative'
                    onClick={() => setOpen(prev => !prev)}>
                    <motion.div variants={topVariants} animate={open ? 'opened' : 'closed'} className='w-10 h-1 origin-left bg-black rounded'></motion.div>
                    <motion.div variants={centerVariants} animate={open ? 'opened' : 'closed'} className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? 'opened' : 'closed'} className='w-10 h-1 origin-left bg-black rounded'></motion.div>
                </button>
                {/* MENU LIST */}
                {
                    <motion.div variants={listVariants}
                        initial={{ width: 0, height: 0, visibility: 'hidden' }}
                        animate={open ? 'opened' : 'closed'}
                        className='absolute top-0 right-0 w-0 h-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-50'>
                        {
                            links.map(link => (
                                <motion.div variants={listItemVariants} key={link.title} onClick={() => setOpen(prev => !prev)} >
                                    <Link href={link.url} >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                }
            </div>
        </div >
    )
}
