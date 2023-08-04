const IconButton = ({ children, onClick = undefined }) => {
  return (
    <div onClick={onClick} className='p-2 rounded-full bg-slate-100 dark:bg-slate-600 flex justify-center items-center'>
      {children}
    </div>
  )
}

export default IconButton
