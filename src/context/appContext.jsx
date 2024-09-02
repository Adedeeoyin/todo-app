'use client'
import { createContext, useContext, useState } from 'react'

export const AppCon = createContext()
export default function AppContext({children}) {
    const [lightMode, setMode] = useState(true)
    const [todoView, setTodoView] = useState('All')
    const [todos, setTodos] = useState([])

  return (
    <AppCon.Provider 
    value={{
      lightMode, setMode,
      todos, setTodos,
      todoView, setTodoView
      }}>
        {children}
    </AppCon.Provider>
  )
}
export const useStore = ()=>{
    return useContext(AppCon)
}
