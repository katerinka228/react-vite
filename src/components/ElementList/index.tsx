// interface Props {
//     name: string;
//     isPacked: boolean;
// }
//
//
//
export default function ElementList({name, isPacked}:Props) {
    // let nameElement = name;
    // if (isPacked)
    // {
    //     nameElement = name + " ✅";


    return <li> {isPacked ?  name + " ✅" : name}</li>
    }

    // return <li>{nameElement}</li>



//допилить
// import Style from "../StateIndex/stataIndex.module.css";
// import classNames from 'classnames';
// interface Props {
//     name: string;
//     isPacked: boolean;
// }
// export default function ElementList({name, isPacked}: Props) {
//     return <li className={classNames(Style.StateIndex, !isPacked && Style.StateIndexFalse)}>{isPacked ? name + " ✅" : name}</li>
// }