const data = [
  {
    id: 1,
    title: '1er dígito',
    description: '"A" mayúscula o minúscula.'
  },
  {
    id: 2,
    title: '2do dígito',
    description: 'Cualquier número o letra.'
  },
  {
    id: 3,
    title: '3er dígito',
    description: 'El número 5.'
  },
  {
    id: 4,
    title: '4to dígito',
    description: 'Cualquier número o letra.'
  },
  {
    id: 5,
    title: '5to dígito',
    description: 'Cualquier número o letra.'
  },
  {
    id: 6,
    title: '6to dígito',
    description: 'El número 1, 3 o 9.'
  }
]

function PopOver ({ isPopOverVisible }) {
  return (
    <div
      className={`absolute z-50 ${
        isPopOverVisible ? 'block' : 'hidden'
      } w-72 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm`}
    >
      <div className='px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700'>
        <h3 className='font-semibold text-gray-900 dark:text-white'>
          Formato de carnets
        </h3>
      </div>
      <ul className='px-3 py-2'>
        {data.map((item) => (
          <li key={item.id} className='flex justify-start items-center gap-x-1'>
            <span className='font-bold text-neutral-800'>{item.title}</span>
            <span className='text-neutral-500'>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopOver
