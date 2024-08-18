const Exclamations = ({ setIsPopOverVisible }) => {
  return (
    <svg
      onMouseEnter={() => {
        setIsPopOverVisible(true)
      }}
      onMouseLeave={() => {
        setIsPopOverVisible(false)
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-6 w-6 text-white p-1 bg-neutral-900/80 rounded-full'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 19v.01' />
      <path d='M12 15v-10' />
    </svg>
  )
}

export default Exclamations
