import { FORM_UPDATE } from "../../constants/form";

const intialState={
    text:""
}

export default function textReducer(state=intialState,action){

    const {type,payLoad}=action;
    console.log("my types and payload",payLoad,type)
    switch(type){

        case FORM_UPDATE:
        {
            state.text=payLoad
            return {...state};
        }

        default :
             return state;
    }

}