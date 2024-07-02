import React, {useState, useEffect} from "react";

function TimeDisplay() {

    let [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <section id="time">
            <button className="rectangle-button">
                {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </button> 
        </section> 
    )
}

export default TimeDisplay