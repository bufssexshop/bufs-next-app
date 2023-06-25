'use client'
import { useState, useEffect } from 'react'

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767)

  useEffect(() => {
    const handleResize = () => {
      const isMobileValue = window.innerWidth <= 767
      const isDesktopValue = window.innerWidth > 767

      setIsMobile(isMobileValue)
      setIsDesktop(isDesktopValue)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile, isDesktop }
}

export default useResponsive
