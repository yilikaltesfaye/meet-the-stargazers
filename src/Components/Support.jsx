/* eslint-disable react/display-name */
import { useState, useEffect} from "react";
const pageTitle = document.title;

// eslint-disable-next-line react-refresh/only-export-components
export default  () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        count && (document.title = `${pageTitle} - ${count}`)
    })
    return (
        <button className="outline" onClick={() => setCount(count + 1)}>
            {count === 0 ? "Click to Support" : `Supported ${count} Times`}  
        </button>
    )
}