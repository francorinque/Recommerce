import { useEffect, useState } from 'react'

export const useNav = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScrolled = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(function () {
    window.addEventListener('scroll', handleScrolled)

    return () => window.removeEventListener('scroll', handleScrolled)
  }, [])

  return {
    scrolled,
  }
}
