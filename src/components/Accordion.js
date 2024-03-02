import {useState} from "react"

import data from "./data";


const Accordion = () => {
    const[selected,setSelected] = useState(null);
    

    function handleSingleSelection (getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);


    }
    console.log(selected);

    return (
        <div className="wrapper">
            <div className = "accordion">
                {
                    data && data.length > 0 ? 
                    data.map(dataItems => <div className = "item">
                        <div onClick = {()=>handleSingleSelection(dataItems.id)} className = "title">
                            <h3>{dataItems.question}</h3>
                            <span>+</span>
                            <div> {
                                selected === dataItems.id ? <div>{dataItems.answer}</div> : null
                                
                                }</div>
                             </div>
                         </div>)
                     : <div>No data Found!!!</div>
                }
            </div>

        </div>
    )
}

export default Accordion;