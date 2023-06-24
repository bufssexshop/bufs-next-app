const IconButton = ({ children, w = '10', onClick = undefined }) => {
  return (
    <div onClick={onClick} className={`w-${w} h-${w} bg-slate-100 rounded-full flex justify-center items-center`}>
      {children}
    </div>
  )
}

export default IconButton
