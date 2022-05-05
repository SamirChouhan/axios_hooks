import React, {useReducer} from 'react'


const initialState = 0;
const reducer = (state, action) =>{
    console.log(state, action);
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT" : return state - 1;
        default: return state;
    }
    // if(action.type === "INCREMENT"){
    //     return state + 1
    // };
    // if(action.type === "DECREMENT"){
    //     return state - 1
    // };
    // return state;
};
export default function Reducer() {

    const[state, dispatch] =  useReducer(reducer, initialState);
  return (
    <div>
        <h1>Reducer</h1>
        <p>{state}</p>
        <div>
            <button onClick={()=> dispatch({type: "INCREMENT"})}> Increment </button>
            <button onClick={()=> dispatch({type: "DECREMENT"})}> Decrement </button>
        </div>
    </div>
  )
}
