'use-client'

const inputSize = {
  small: 'w-[258px] h-6 p-1',
  medium: 'w-[274px] h-8 p-2',
  large: 'w-[286px] h-9 p-3'
}

const SelectInput = ({
  title,
  options,
  onChange,
  size = 'medium',
  fullWidth
}) => {
  return (
    <div className={`${fullWidth ? 'w-full' : ''} flex flex-col`}>
      <label>{title}</label>
      <select
        className={`
          ${fullWidth ? 'w-full p-3' : inputSize[size]}
          rounded-full border border-slate-500 outline-none
          h-full pl-2 text-slate-500
          h-full
        `}
        onChange={onChange}
      >
        <option />
        {
          options
            ? options.map((option, index) => (
              <option
                className='border-none rounded-md px-3 py-2 bg-white outline-none'
                key={index}
                value={option.value}
              >
                {option.label}
              </option>
            ))
            : 'No hay opciones'
        }
      </select>
    </div>
  )
}

export default SelectInput
