import { createStore } from "redux";
const storeReducer=(state={counter:0},action)=>{
    if(action.type==="increment"){
        return{
            counter:state.counter+2
        };
    }
    if(action.type==="decrement"){
        return{
            counter:state.counter-2
        };
    }
    return state;

}
const Store=createStore(storeReducer);
export default Store;