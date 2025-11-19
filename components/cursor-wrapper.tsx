'use client'

import CustomCursor from './custom-cursor'

export default function CursorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
}

