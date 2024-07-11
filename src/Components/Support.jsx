/* eslint-disable react/display-name */
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export default  () => {
    const [count, setCount] = useState(0)
    return (
        <button className="outline" onClick={() => setCount(count + 1)}>
            {count === 0 ? "Click to Support" : `Supported ${count} Times`}  
        </button>
    )
}