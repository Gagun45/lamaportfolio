'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Homepage() {
  return (
    <motion.div className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0' }}
      transition={{ duration: 2 }}>

      <div className='flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>

        {/* IMAGE CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative '>
          <Image src='/hero.png' alt='' fill className='object-contain' />
        </div>

        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 sm:gap-8 justify-center items-center'>
          {/* TITLE */}
          <h1 className='text-4xl font-bold w-full'>
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/* DESCRIPTION */}
          <p className='md:text-xl text-sm sm:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod magnam officia sapiente provident corrupti dicta laudantium deserunt itaque explicabo nulla ea quae sequi minus numquam veritatis obcaecati, veniam vitae iste.
          </p>
          {/* BUTTONS */}
          <div className='flex gap-4 w-full'>
            <Link href={'/portfolio'} className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</Link>
            <Link href={'/contact'} className='p-4 rounded-lg ring-1 ring-black bg-white text-black'>Contact Me</Link>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

