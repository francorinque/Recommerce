import { createContext, useState } from 'react'

export const RectContext = createContext()

const RectProvider = ({ children }) => {
  const [rect, setRect] = useState(null)

  const value = {
    rect,
    setRect
  }
  return <RectContext.Provider value={value}>{children}</RectContext.Provider>
}

export default RectProvider
