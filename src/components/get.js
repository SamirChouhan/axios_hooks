import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BaseURL = "https://jsonplaceholder.typicode.com/posts/1";
function Get() {
    const [post, setPost1] = useState(null);

    useEffect(() => {
        axios.get(BaseURL).then((res) => {
            setPost1(res.data)
        })
    }, []);

    if (!post) {
        return null;
    }
    return (
        <div>
            <div>{post.userId}</div>
            <div>{post.id}</div>
        </div>
    )
}

export default Get