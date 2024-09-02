'use client';
import { useStore } from "@/context/appContext"
import Render from "./Render2";

export default function TodoRender() {
    const { lightMode, todos, todoView} = useStore()
  return (
    <div className="w-full h-[250px] shadow rounded-t-md overflow-scroll">
        {
          todoView == 'All'?
          todos?.map((todo, i)=>{
            return(
              <Render todo={todo} key={todo.name}/>
            )
          })
          :todoView == 'Active'?
          todos.filter(todo => todo.status == false).map((todo,i)=>{
            return(
              <Render todo={todo} key={todo.name}/>
            )
          })
          :
          todos.filter(todo => todo.status == true).map((todo,i)=>{
            return(
              <Render todo={todo} key={todo.name}/>
            )
          })
        }
    </div>
  )
}
