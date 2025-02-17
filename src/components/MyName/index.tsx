// interface Props {
//     name: string;
// }
//
//
//
//
// export default function MyName({ name }: Props)
// {
//     return <h1>hello {name}</h1>
// }

// interface Props {
//     index: number;
//     setIndex: (value: number) => void;
// }
//
// export default function StateIndex({index, setIndex}:Props) {
//
//
//     function handleClick()
//     {
//         setIndex(index + 1);
//     }
//
//     return (
//         <div>
//             <h4>{index}</h4>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }


import {ReactNode} from "react";

interface Props {
    name: string;
    children: ReactNode;
}

export default function MyName ({ name, children }:Props){
    return <div>
        <h1>Hello {name}!</h1>
        {children}
    </div>
}