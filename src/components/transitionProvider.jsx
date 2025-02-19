'use client'

import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./navbar"
import { usePathname } from "next/navigation"

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
]

export default function TransitionProvider({ children }) {
    const pathname = usePathname()


    return (
        <AnimatePresence mode='wait' initial={false}>
            <div key={pathname} className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 relative' >
                <motion.div className="hidden md:flex w-screen bg-black fixed justify-center rounded-b-[200px] top-0 items-center z-40 text-white"
                    animate={{ height: '0vh' }}
                    exit={{ height: '120vh' }}
                    transition={{ duration: 0.5 }}
                />
                <motion.div className='hidden md:flex text-white w-fit h-fit z-50 cursor-default fixed bottom-0 right-0 left-0 top-0 text-8xl m-auto'
                    initial={{ opacity: 1, visibility: "visible" }}
                    animate={{ opacity: 0, visibility: 'hidden' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}>
                    {links.find(link => link.url == pathname)?.title || ''}
                </motion.div>
                <motion.div className="hidden md:flex w-screen bg-black fixed bottom-0 rounded-t-[200px] justify-center items-center z-30 text-white"
                    initial={{ height: '120vh' }}
                    animate={{ height: '0vh' }}
                    transition={{ duration: 0.5, delay: 1 }}
                />
                <div className='h-24'>
                    <Navbar />
                </div>
                
                <div className="h-[calc(100vh-96px)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}
