const buttonHeights = {
  small: 'h-6 p-1',
  medium: 'h-9 p-2',
  large: 'h-12 p-3'
}

const buttonVariants = {
  primary: 'text-xs bg-pink text-white',
  secondary: 'text-sm bg-pink text-white',
  tertiary: 'text-base bg-pink text-white'
}

const Button = ({
  size = 'medium',
  label = 'button',
  variant = 'primary',
  fullWidth,
  className,
  onClick
}) => {
  return (
    <button
      className={
        `rounded-full
        ${className}
        ${buttonHeights[size]}
        ${buttonVariants[variant]}
        ${fullWidth ? 'w-full' : undefined}`
      }
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
