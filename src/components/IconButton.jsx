const IconButton = ({ children, onClick = undefined, disabled }) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className='p-2 rounded-full bg-slate-100 dark:bg-slate-600 flex justify-center items-center cursor-pointer'
    >
      {children}
    </div>
  )
}

export default IconButton
