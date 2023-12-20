import { useEffect, useState } from 'react'

export default function useWindowSize(breakpoint = 768) {
  const [windowSize, setWindowSize] = useState<{ width: undefined | number; height: undefined | number }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (windowSize.width as number) < breakpoint
}
