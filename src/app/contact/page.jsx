'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const text = 'Say Hello'

export default function ContactPage() {
  const ref = useRef()

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const refIsInView = useInView(ref)

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)
    const formData = new FormData(form.current)
    const user_message = formData.get('user_message')
    const user_email = formData.get('user_email')

    if (!user_message) {
      setError('Enter a message please')
      return
    }
    if (!user_email) {
      setError('Enter an email please')
      return
    }

    if (user_message && user_message.length > 500) {
      setError('Message is exceeding the limit (500 symbols max)')
      return
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          console.log(error)
          setError(true)
        }
      )
  }

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0' }}
      transition={{ duration: 2 }}
      ref={ref}
    >
      <div className='h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>        {/* TEXT CONTAINER */}
        {/* TEXT CONTAINER */}
        <div className='flex-1 lg:h-full lg:w-1/2 lg:flex-none flex items-center justify-center flex-wrap text-6xl'>
          <div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={refIsInView ? { opacity: [1, 0] } : {}}
                transition={{
                  times: [0.9, 1],
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 0.3 * text.length,
                  delay: index * 0.3,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          😊
        </div>
        {/* FORM CONTAINER */}
        <form ref={form} onSubmit={sendEmail} className='flex-1 lg:flex-none lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center p-4 sm:p-12 lg:p-24 bg-red-50 rounded-xl text-xl'>
          <span>Dear Lama dev, </span>
          <textarea rows={6}
            placeholder='Type here...'
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name='user_message' />

          <span>My mail adderss is:</span>
          <input name='user_email' type='email' className='bg-transparent border-b-2 border-b-black outline-none' />
          <span>Regards</span>
          <button className='bg-purple-200 font-semibold text-gray-600 rounded hover:bg-purple-400 hover:text-black'>Send</button>
          {success && <motion.span animate={{display: 'none'}} transition={{delay: 5, duration: 1}} className='text-green-600 font-semibold'>Your message has been sent successfully!</motion.span>}
          {error && <span className='text-red-600 font-semibold'>{error ? error : 'Something went wrong'}</span>}
        </form>
      </div>
    </motion.div >
  )
}
