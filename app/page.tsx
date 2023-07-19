import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center h-screen items-center'>
      <div className='text-6xl font-bold tracking-wider text-accent dark:text-dark_accent'>
        Accent
      </div>
      <div className='text-6xl font-bold tracking-wider text-secondary dark:text-dark_secondary'>
        Secondary
      </div>
      <div className='text-6xl font-bold tracking-wider text-primary_text dark:text-dark_primary_text'>
        Primary
      </div>
    </div>
  )
}
