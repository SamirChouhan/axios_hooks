import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Get from "./components/get";
import Post from "./components/post";
import Put from "./components/put";
import Del from "./components/del";
import Context from "./components/Context";
import Reducer from "./components/Reducer";
import Ref from './components/Ref'


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    //axios
    <div>
      <h1>GET</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    <hr></hr>
      <Get />
    <hr></hr>
      <Post/>
    <hr></hr>
      <Put/>
    <hr></hr>
      <Del/>
    <hr></hr>
    </div>

    //Hooks
    // <>
    //   <Context />
    //   <hr></hr>
    //   <Reducer/>
    //   <hr></hr>
    //   <Ref/>
    //   <hr></hr>
    // </>
  );
}