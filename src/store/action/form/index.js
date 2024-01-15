
import { FORM_UPDATE } from "../../constants/form"


export function formAction(text){
    console.log("mt todo",text)
    return {
        type:FORM_UPDATE,
        payLoad:text
    }

    
}