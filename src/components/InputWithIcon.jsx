const InputWithIcon = ({
  type = "text",
  label,
  placeholder,
  fullWidth,
  error,
  size,
  onChange = undefined,
  icon = undefined,
  backgroundOpacity
}) => {
  const inputPaddingClass = placeholder ? 'pl-10' : 'pl-3';

  return (
    <div className="relative flex flex-col">
      {label && (
        <label
          htmlFor={label}
          className="mt-1 text-left text-slate-500 text-lg pointer-events-none block"
        >
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          {icon}
          <svg
            className="h-5 w-5 text-slate-500"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7 4a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1zm5
                4a1 1 0 0 0-1-1H8V5a3 3 0 0 1 6 0v6h.01a1 1 0 0 0 0-2H12zm-3
                6a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          id={label}
          className={
            `pl-25
            ${fullWidth ? 'w-full' : ''}
            h-25
            pr-3
            py-2
            border-slate-500
            border
            rounded-full
            focus:outline-none
            ${size}
            ${backgroundOpacity}
            ${backgroundOpacity}
            ${inputPaddingClass}`
          }
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm text-left mt-1 ml-0 ml-3">{error}</div>
      )}
    </div>
  );
};

export default InputWithIcon;

