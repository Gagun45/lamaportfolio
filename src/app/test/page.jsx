'use client'

import { easeInOut, motion } from 'framer-motion'

export default function TestPage() {
    const variants = {
        variant1: {
            x: 100, y: 300, opacity: 0.5
        },
        variant2: {
            x: 100, rotate: 90
        }
    }
    return (
        <div className='flex items-center justify-center h-full'>
            <motion.div className='h-96 w-96 bg-red-400 rounded'
                initial={{ x: -100 }}
                variants={variants}
                animate='variant2'
                transition={{ duration: 2, ease: easeInOut }}>

            </motion.div>
        </div>
    )
}
