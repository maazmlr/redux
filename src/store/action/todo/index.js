
export function addTodoAction(todo){
    console.log("mt todo",todo)
    return {
        type:'ADD',
        payLoad:todo
    }

    
}