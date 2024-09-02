'use client'
import TodoRender from "@/components/TodoRender";
import { useStore } from "@/context/appContext";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef()
  const [data, setData] = useState({status:false, name:''})
  const {lightMode, todos, setTodos, todoView, setTodoView} = useStore()
  const views = ['All', 'Active', 'Completed']

  const addData = (e)=>{
    if(e.target.value === '')return
    setData(prev=>({...prev, name:e.target.value}))
  }
  const addTodo =(e)=>{
    e.preventDefault()
    if(inputRef.current.value === '')return
    if(todos.map(todo=>todo.name).includes(inputRef.current.value))return
    setTodos(prev=>[...prev, data])
    setData({status:false, name:''})
  } 
  const deleteCompleted = ()=>{
    setTodos(todos.filter(todo=>todo.status === false))
  }
  return (
    <>
      <div className={`relative flex items-center gap-4 w-full h-12 rounded-lg border ${lightMode?'bg-white border-borderB':'bg-choice5 border-choice5 text-choice2'} mt-8 mb-4 p-1`}>
        <div className="w-4 h-4 rounded-full border border-borderB"></div>
        <form onSubmit={addTodo} className="w-full">
          <input
          ref={inputRef}
          type="text"
          value={data.name}
            placeholder="Create a new todo..."
            onChange={addData}
            className="outline-none w-full h-full bg-transparent" />
        </form>
      </div>
      {todos.length>0 && <TodoRender/>}
      {todos.length>0 &&
      <div className="flex justify-between px-1 w-full h-[50px] shadow items-center rounded-b-md text-sm text-choice3">
        <div>{todos.filter(todo=>todo.status === false).length} {todos.filter(todo=>todo.status === false).length <= 1?'item':'items'} left</div>

        <div className={`flex items-center ${window.innerWidth <= 500?'absolute -bottom-24  w-full h-[50px] shadow items-center justify-center gap-4 rounded-md border-gray-50':'gap-2'}`}>
          {
            views.map((view)=>{
              return(
                <div
                 key={view}
                 onClick={()=>setTodoView(view)}
                  className={`${todoView == view?'text-blue':'hover:text-choice4'} cursor-pointer`}>{view}</div>
              )
            })
          }
        </div>

        <div
        onClick={deleteCompleted}
         className="cursor-pointer hover:text-choice4">Clear Completed</div>
      </div>}
    </>
  );
}
