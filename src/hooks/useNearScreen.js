import { useEffect, useState } from 'react'

export const useNearScreen = ({ once = false, externalRef }) => {
  const [isNearScreen, setIsNearScreen] = useState(false)

  const callbackFunction = (entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && once) {
      setIsNearScreen(true)
    }
  }

  useEffect(() => {
    let element = externalRef.current

    let observer = new IntersectionObserver(callbackFunction, {
      root: null,
      threshold: 0.5,
    })

    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once, externalRef])

  return { isNearScreen }
}
