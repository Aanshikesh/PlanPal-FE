import axios from 'axios'
import {atom, atomFamily, selectorFamily} from 'recoil'

export const userDetail=atomFamily({
    key:"userDetailAtom",
    default:selectorFamily({
        key:"userDetailSelectorFam",
        get:(id)=>async ()=>{
            const res=await axios.get("https://plan-pal-backend.vercel.app/user/getUserInfo",{
                headers:{
                    token:id
                }
            })
            return res.data.userName
        }
    })
})

export const allTodos=atomFamily({
    key:"allTodoFamily",
    default:selectorFamily({
        key:"allTodoSelectorFamily",
        get:(id)=> async()=> {
            const res=await axios.get("https://plan-pal-backend.vercel.app/user/getTodo",{
                headers:{
                    token:id
                }
            })
            return res.data.todos
        }
    })
})

export const selectedTab=atom({
    key:"selectedTabKey",
    default:"General"
})

export const filteredTodos=selectorFamily({
    key:"filteredTodos",
    get:(id)=>({get})=>{
        const allTodo=get(allTodos(id))
        const currentTab=get(selectedTab)
        return allTodo.filter(todo=>todo.description===currentTab && todo.doneOrNot==false)    
    }
})


export const doneTodos=selectorFamily({
    key:"filteredTodos",
    get:(id)=>({get})=>{
        const allTodo=get(allTodos(id))
        const currentTab=get(selectedTab)
        return allTodo.filter(todo=>todo.description===currentTab && todo.doneOrNot==true)    
    }
})