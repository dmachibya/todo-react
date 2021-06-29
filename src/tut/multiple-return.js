import React, {useState, useEffect} from 'react'
const url = 'https://api.github.com/users';
const MultipleReturn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();

        setUsers(users);
        console.log(users);
    }
    useEffect(()=>{
       getUsers();
    }, []) 

    if(isError){
        return (
            <p>There was an error</p>
        )
    }
    if(isLoading){
        return (
            <h1>Still loading...</h1>
        )
    }
    return (
        <div>
            {
                users.map((user)=>{
                    const {id, login, avatar_url, html_url} = user
                    return (
                    <li>
                        <img src={avatar_url} alt="login" />
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                    )
                })
            }
        </div>
    )
}

export default MultipleReturn
