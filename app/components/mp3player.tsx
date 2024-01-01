export const MP3Player = ({ src }: { src: string }) => {
  return (
    <div className='py-2'>
      <div className='space-y-2'>
        <audio controls className='w-96'>
          <source src={src} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
        <div className='text-sm italic  text-gray-600 dark:text-gray-400'>
          Voiced by AI
        </div>
      </div>
    </div>
  )
}
