import throttle from 'lodash.throttle'
import Dimensions from '../libs/Dimensions'
import { useEffect, useRef } from 'react'
import { useForceRerender } from './use-force-renderer'

export function useDimensions(only) {
  const dimensionsRef = useRef({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  })
  const forceRerender = useForceRerender()

  function hasChanged(width, height) {
    return !!(
      (only !== 'height' && width !== dimensionsRef.current.width) ||
      (only !== 'width' && height !== dimensionsRef.current.height)
    )
  }

  const setDimensions = throttle((width, height) => {
    if (!hasChanged(width, height)) return
    dimensionsRef.current.width = width
    dimensionsRef.current.height = height
    forceRerender()
  }, 50)

  useEffect(() => {
    const handler = ({ window }) => {
      const { width, height } = window
      setDimensions(width, height)
    }

    Dimensions.addEventListener('change', handler)

    return () => {
      Dimensions.removeEventListener('change', handler)
    }
  }, [])
  return dimensionsRef.current
}
