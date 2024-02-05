import React, { useReducer } from 'react'

const reducerFunc=(state,action)=>{
    switch(action.type){
        case "red":
            return {color:"red"}
        case "green":
            return {color:"green"}
        case "blue":
            return {color:"blue"}
        case "yellow":
            return {color:"yellow"}
        default:
            return state
    }
}
function Usered() {
    const [state,dispatch]=useReducer(reducerFunc,{color:"white"})

    
  return (

    <div className='container'>
        <div className='box'
        style={{
            backgroundColor:state.color
        }}>

        </div>
        <div className='btns'>
        <button onClick={(()=>{dispatch({type:"red"})})}>red</button>
        <button onClick={(()=>{dispatch({type:"green"})})}>green</button>
        <button onClick={(()=>{dispatch({type:"blue"})})}>blue</button>
        <button onClick={(()=>{dispatch({type:"yellow"})})}>yellow</button>
        </div>
    </div>
  )
}

export default Usered
