const intialState={
    todo:[]
}

export default function todoReducer(state=intialState,action){

    const {type,payLoad}=action;
    console.log("my types and payload",payLoad,type)
    switch(type){

        case'ADD':
        {
            state.todo=[payLoad,...state.todo]
            return {...state};
        }

        default :
             return state;
    }

}