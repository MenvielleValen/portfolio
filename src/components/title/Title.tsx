import React, { PropsWithChildren } from 'react'

export const Title = ({children}: PropsWithChildren) => {
  return (
    <h2 style={{color: "#FFF", fontSize: 35}}>{children}</h2>
  )
}
