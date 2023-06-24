import React, { useRef, useEffect } from 'react'

const ClickAwayListener = ({ children, setValue }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setValue((prev) => prev ? !prev : prev)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  )
}

export default ClickAwayListener
