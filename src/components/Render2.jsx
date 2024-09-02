import React, { useState } from 'react'
import { useStore } from "@/context/appContext"
import Image from "next/image";
import check from '../../public/images/icon-check.svg'
import cross from '../../public/images/icon-cross.svg'

export default function Render({todo}) {
    const { lightMode, todos, setTodos} = useStore()
    const [hovered, setHovered]= useState(false)
    const handleComplete = (e)=>{
      const clone = [...todos]
      const checked = clone.find((t)=>t.name === e)
      checked.status = !checked.status
      setTodos(clone)
    }
    const deleteTodo = (e)=>{
      const clone = [...todos]
      const checked = clone.findIndex((t)=>t.name === e)
      clone.splice(checked, 1)
      setTodos(clone)
    }
  return (
          <div
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}
          className={`w-full flex items-center gap-4 px-2 h-[50px] border-b
            ${!todo.status && !lightMode?'border-choice4 bg-uTodo text-choice6'
              :todo.status && !lightMode?'bg-choice5 border-choice4 text-choice7'
              :!todo.status && lightMode?'bg-white text-choice4'
              :todo.status && lightMode?'text-choice2 bg-white'
              :null}
             `}
             >
            <div
            onClick={()=>handleComplete(todo.name)}
             className={`cursor-pointer w-4 h-4 rounded-full border border-borderB ${todo.status?'from-green to-purple     bg-gradient-to-r flex items-center justify-center':null}`}>
              {todo.status?
                <Image src={check} alt='check-icon' width={12.5} height={12.5} quality={100} className="scale-75"/>:null}
              </div>

            <div className={`relative w-full truncate ${todo.status?'line-through':null}`}>
              {todo.name}
              {hovered &&
               <div
               onClick={()=>deleteTodo(todo.name)}
                className='absolute cursor-pointer right-6 top-2'><Image src={cross} alt='close' width={12.5} height={12.5} quality={100}/></div>}
              </div>
          </div>
  )
}
