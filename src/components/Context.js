import React from 'react'
import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Context() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hi this is context ${user}`}</h1>
            <Component2/>
        </UserContext.Provider>
    )
}

function Component2(){
    return(
        <>
        <h2>Component2</h2>
        <Component3/>
        </>
    )
}
function Component3(){
    return(
        <>
        <h2>Component3</h2>
        <Component4/>
        </>
    )
}
function Component4(){
    return(
        <>
        <h2>Component4</h2>
        <Component5/>
        </>
    )
}
function Component5(){
    const user = useContext(UserContext)    
    return(
        <>
        <h2>Component5</h2>
        <h1>{`Hi very one ${user} is here.`}</h1>
        </>
    )
}
