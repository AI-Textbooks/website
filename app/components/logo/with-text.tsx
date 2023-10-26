import Image from 'next/image'
import './styles.css'

/** @returns A logo with text colored based on the pref */
export default function LogoWithText() {
  return (
    <div className='mb-3 text-center'>
      <Image
        className='mx-auto'
        src='/logo.svg'
        alt='AI Textbooks logo'
        width={100}
        height={100}
      />
      <h1 className='font-serif text-6xl mt-4'>AI Textbooks</h1>
    </div>
  )
}
