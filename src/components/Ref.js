import React,{useRef,  useState } from 'react'

export default function Ref() {
    const name = useRef(null)
    const [show, setState] = useState(false);
    const submitForm=(e)=>{
        e.preventDefault()
        console.log(name.current.value);
        const userName = name.current.value;
        userName === ""? alert ("plz fill the data"): setState(true);
    }
  return (
    <div>
        <form action='' onSubmit={submitForm}>
            <div>
                <label htmlFor='name'>Enter your name</label>
                <input type="text" id="name" ref={name}></input>
            </div>
            <br/>
            <button>Submit</button>
            <p>{show ? `your name is ${name.current.value}`:""}</p>
        </form>
    </div>
  )
}
