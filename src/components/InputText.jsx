const inputHeights = {
  small: 'h-7 p-1',
  medium: 'h-9 p-2',
  large: 'h-12 p-3'
}

const iconWidths = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-7 h-7'
}

const InputText = ({
  id,
  label,
  fullWidth,
  placeholder,
  handleChange,
  type = 'text',
  size = 'medium',
  icon = undefined,
  opacity,
  error
}) => {
  const iconCustom = icon ? <span className={`${iconWidths[size]} ${error ? 'text-red-600' : 'text-slate-500'}`}>{icon}</span> : null

  return (
    <div
      className={`flex flex-col ${fullWidth ? 'w-full' : ''}`}
      id={id}
    >
      {label && (
        <label
          htmlFor={id}
          className='mt-1 pl-4 xs:text-sm text-slate-500 text-lg pointer-events-none block'
        >
          {label}
        </label>
      )}

      <div
        className={`
          flex
          ${opacity ? 'opacity-70' : ''}
          ${inputHeights[size]}
          bg-white
          border
          ${error ? 'border-red-600' : 'border-slate-500'}
          rounded-full
        `}
      >
        <span className='flex justify-center items-center'>
          {iconCustom}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          className='h-full pl-2 bg-white focus:outline-none text-slate-500'
        />
      </div>

      {error && (
        <div className='mt-1 pl-4 text-left text-red-600 text-xs'>{error}</div>
      )}
    </div>
  )
}

export default InputText
