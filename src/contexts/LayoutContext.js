import React, { useMemo, useContext } from 'react'
import Dimensions from '../libs/Dimensions'
import { useDimensions } from '../hooks/use-dimensions'
export const BREAKPOINTS = {
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
}

export function getAppLayout(dimensions) {
  const { width, height } = dimensions || Dimensions.get('window')
  let sizename
  if (width <= BREAKPOINTS.SM) {
    sizename = '1-xs'
  } else if (width <= BREAKPOINTS.MD) {
    sizename = '2-sm'
  } else if (width <= BREAKPOINTS.LG) {
    sizename = '3-md'
  } else if (width <= BREAKPOINTS.XL) {
    sizename = '4-lg'
  } else {
    sizename = '5-xl'
  }
  const deviceOrientation = width > height ? 'landscape' : 'portrait'
  const appOrientation = deviceOrientation === 'landscape' || sizename >= '3-md' ? 'landscape' : 'portrait'
  return {
    appOrientation,
    deviceOrientation,
    sizename,
    dimensions,
  }
}

export const LayoutContext = React.createContext(getAppLayout())
export function LayoutProvider({ children }) {
  const dimensions = useDimensions()
  const _appLayout = getAppLayout(dimensions)
  const appLayout = useMemo(() => getAppLayout(dimensions), [
    _appLayout.deviceOrientation,
    _appLayout.sizename,
  ])

  return (
    <LayoutContext.Provider value={appLayout}>
      {children}
    </LayoutContext.Provider>
  )
}

export const LayoutConsumer = LayoutContext.Consumer
export function useLayout() {
  return useContext(LayoutContext)
}
