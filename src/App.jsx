import React, {useEffect, useState, useTransition} from 'react';
import './App.css';
import Comments from "./Comments";


const filterBySearch = (entities, search) => entities.filter(item => item.name.concat(item.body).includes(search))

function App() {

    const [isPending, startTransition] = useTransition()
    const [comments, setComments] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        startTransition(() => {
            //оборачивает обновление стейта как неважное, не блокируя общий пользовательский поток
            setSearch(e.target.value)
        })
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(setComments)
    })
    return (
        <div>
            <input onChange={handleSearch}/>
            {isPending && (
                <h1>Rendering...</h1>
            )}
            <Comments entities={filterBySearch(comments, search)}
            />
        </div>
    );
}

export default App;
