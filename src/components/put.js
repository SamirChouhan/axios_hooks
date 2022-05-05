import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BaseUrl = "https://jsonplaceholder.typicode.com/posts/1";
export default function Put() {
    const [post2, setPost2] = useState(null);
    useEffect(() => {
        axios.get(`${BaseUrl}`).then((res) => {
            setPost2(res.data)
        })
    }, []);
    function change() {
        axios.put(`${BaseUrl}`, {
            title: "Me and My",
            body: "Soulmate"
        }).then((res) => {
            setPost2(res.data);
        })
    }
    if (!post2) {
        return "No Post"
    }
    return (

        <div>
            <hr></hr>
            <h1>Put</h1>
            <h3>{post2.title}</h3>
            <p>{post2.body}</p>
            <button onClick={(e) => { change(e) }}>Change</button>
        </div>
    )
}
