import {useState} from "react";

export default function StateIndex() {
    const [index, setIndex] = useState(0);

    function handleClick()
    {
        setIndex(index + 1);
    }

    return (
        <div>
            <h4>{index}</h4>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}