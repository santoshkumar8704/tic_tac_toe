import { useState } from "react"

export default function Player ({name , symbol ,isActive}) {
    const [isEditting, setIsEditting] = useState(false);
    const [stateName,setStateName] = useState(name)
    function handleChange (event) {
        setStateName(event.target.value);
    }
    function handleEdit () {
        setIsEditting((editting) => !editting);

    }
    let nametext = <span className="player-name">{stateName}</span>
    if(isEditting){
        nametext = <input type="text" className="inputs" required value={stateName} onChange={handleChange}/>
    }
    return (<li className={isActive ? "active" : ""}>
    <span>
    {nametext}
    
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit}>{isEditting ? "Save" : "Edit"}</button>
  </li>)
}