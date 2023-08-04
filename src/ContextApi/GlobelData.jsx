import React from 'react'
import { useState } from 'react';
export const Context = React.createContext('');
export default function GlobelData({children}) {
const [title,setTitle]=useState("Coming From Context Api State Managment")

  return (
    <Context.Provider value={{title}}>
        {children}
    </Context.Provider>

  )
}
