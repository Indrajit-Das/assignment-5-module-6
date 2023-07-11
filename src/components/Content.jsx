import { useState } from "react";

const Content = ()=>{
    const [text,setText] =useState("");
    // updating the value with the onChange event
    const updateValue =(event)=>{
        setText(event.target.value);
    }
    // displaying the value when the button got clicked
    const displayText=()=>{
        document.querySelector("h3").innerHTML=text;
    }
    
    return(
        <main>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="write something..." onChange={updateValue} value={text}></textarea>
            <button onClick={displayText}>submit</button>
            <hr />
            <h3></h3>
        </main>
    );
}

export default Content;