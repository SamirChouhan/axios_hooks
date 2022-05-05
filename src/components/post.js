import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Post1() {
    const [post1, setpost1] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setpost1(response.data);
        });
    }, []);

    function createpost() {
        axios
            .post(baseURL, {
                title: "Hello World!",
                body: "This is a new post1."
            })
            .then((response) => {
                setpost1(response.data);
            });
    }

    if (!post1) return "No post1!"

    return (
        <div>
            <hr></hr>
            <h1>Post</h1>
            <h3>{post1.title}</h3>
            <p>{post1.body}</p>
            <button onClick={createpost}>Create post1</button>
        </div>
    );
}