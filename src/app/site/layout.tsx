import React from 'react'
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from "@clerk/themes";


export const layout = (children : React.ReactNode) => {
  return (
    <ClerkProvider
    appearance={{ baseTheme :  dark}}
    >
        {children}
    </ClerkProvider>
  )
}