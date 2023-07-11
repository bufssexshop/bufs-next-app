const buttonHeights = {
  small: 'h-6 p-1',
  medium: 'h-9 p-2',
  large: 'h-12 p-3'
}

const buttonVariants = {
  primary: 'text-sm bg-customPink text-white hover:opacity-80 duration-500',
  secondary: 'text-sm bg-white text-slate-500 border border-slate-500 hover:bg-slate-200 duration-500',
  tertiary: 'text-sm text-slate-500 hover:bg-slate-200 border border-slate-50 hover:border hover:border-slate-500 duration-500'
}

const disabledStyles = 'bg-slate-500 hover:opacity-100'

const Button = ({
  size = 'medium',
  label = 'button',
  variant = 'primary',
  fullWidth,
  className,
  disabled,
  onClick,
  icon
}) => {
  return (
    <button
      disabled={disabled}
      className={
        `rounded-full
        flex justify-center items-center ${icon ? 'gap-2' : ''}
        ${className}
        ${buttonHeights[size]}
        ${buttonVariants[variant]}
        ${fullWidth ? 'w-full' : undefined}
        ${disabled ? disabledStyles : ''}
        leading-none`
      }
      onClick={disabled ? undefined : onClick}
    >
      {(icon && !disabled) && icon} {label}
    </button>
  )
}

export default Button
