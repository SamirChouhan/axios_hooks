import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react';

const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
export default function Del() {
    const [post3, setPost3] = useState(null);
    useEffect(()=>{
        axios.get(baseUrl).then((res)=>{
            setPost3(res.data);
        })
    },[]);
    function del(){
        console.log("Hello")
        axios.delete(baseUrl).then(()=>{
            alert("Data delete");
            setPost3(null);
        })
    }
    if(!post3){
        return "No Post"
    }
  return (
    <div>
        <hr></hr>
        <h1>Del</h1>
        <h3>{post3.title}</h3>
        <p>{post3.body}</p>
        <button onClick={(e) =>{del(e)}}>Delete</button>
    </div>
  )
}
