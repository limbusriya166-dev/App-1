import React,{ useState} from "react"
export default function Contact({name,location,classes}){
    const[isOpen, setOpen]=useState(false)
    if(isOpen){
        return<div>
        <div>Constact {name}</div>
                <div>LOCATION {Location}</div>
                <Test class= {classes}/>
                <button onClick={() => setOpen(false)}>close</button>
            </div>    
    }
return (
    <div>This is Contact page 
        <button onClick={() => setOpen(true)}>open</button>
    </div>
)
}
export function Test(props){
    return (
    <div> class {props.class}</div>
    )
}