const inputHeights = {
  small: 'h-6 p-1',
  medium: 'h-9 p-2',
  large: 'h-12 p-3'
}

const InputText = ({
  type = 'text',
  label,
  placeholder,
  fullWidth,
  error,
  size,
  onChange = undefined,
  icon = undefined,
  opacity,
  id
}) => {
  const inputPaddingClass = placeholder ? 'pl-10' : 'pl-3'

  return (
    <div
      className={
        `relative flex flex-col
        opacity-${opacity || '0'}
        ${inputHeights[size]}`
      }
      id={id}
    >
      {label && (
        <label
          htmlFor={label}
          className='mt-1 ml-3 text-left text-slate-500 text-lg pointer-events-none block'
        >
          {label}
        </label>
      )}
      <div className={
        `relative mt-1 ${fullWidth ? '' : 'inline-flex'}
        opacity:${opacity}`
      }>
        <span className='absolute inset-y-0 left-0 pl-3 flex items-center mr-2'>
          {icon}
        </span>
        <input
          id={label}
          className={
            `pl-35
            ${fullWidth ? 'w-full' : ''}
            h-25
            pr-3
            py-2
            border-slate-500
            border
            rounded-full
            focus:outline-none
            ${inputPaddingClass}`
          }
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {error && (
        <div className='mt-1 ml-3 text-left text-red-600 text-xs'>{error}</div>
      )}
    </div>
  );
};

export default InputText;

