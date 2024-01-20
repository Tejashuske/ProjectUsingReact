import React, {useState} from "react";

function FunctionalComponent({name, company, age, setName}) {
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    const subtractCountBy1 = () => {
        setCount(count - 1);
    }
    // 2nd approach
    // const {name, company, age, setName} = props;

    return (
        <div>
            <p>This is our functional component!</p>
            <button onClick={() => setCount(count + 1)}>Click on me to increament the count by 1</button>
            <button onClick={subtractCountBy1}>Click on me to decreament the count by 1</button>
            <h1>{count}</h1>
            <h4>My name is {name}, I'm from {company} where our company haas been into the market for more than {age} years!</h4>
            <input type="text" onChange={(e)=> setChangeName(e.target.value)} />
            <button onClick={()=>setName(changeName)}>Change name</button>
        </div>
    )
}

export default FunctionalComponent;