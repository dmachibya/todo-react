import React, {useState, useEffect} from 'react'

const data = [
    {
    id:1,
    name: "david"
    },
    {
    id:2,
    name: "mussa"
    },
    {
    id:3,
    name: "juma"
    },
]

function useStateTut() {
    let title = 'random title';

    const handleClick = ()=> {
        setText("Title changed");
        console.log(title);
    }
    // console.log(useState("hi there"))

    const [value, setValue] = useState(0)

    useEffect(()=>{
        document.title = `New title inserted ${value}`;
    })

    const removeItem = (id)=>{
        let newPeople = people.filter((person)=>person.id !== id)
        setPeople(newPeople); 
    }

    const [text, setText] = useState("random"); 

    const [people, setPeople] = React.useState(data);
    return (
        <React.Fragment>    
            <h1>{value}</h1>
            {/* <h1>{text}</h1>
            <button className="bg-gray-400 p-4 mt-4" onClick={handleClick}>Change title</button> */}
        {/* {
            people.map((person)=> {
                const {id, name} = person
                return <div className="my-2 bg-white p-4 shadow-md" key={id}>
                    <h2>{name}</h2>
                    <button className="bg-gray-400" onClick={()=>removeItem(id)}>remove item</button>
                </div>
            })
        } */}

        <button className="bg-red-400 p-2" onClick={()=>setValue(value + 1)}>Clear items</button>
        </React.Fragment>
    )
}

export default useStateTut
