import UpcomingEvents from "../components/Events/UpcomingEvents";
import Getinvolve from "../components/GetInvolve/Getinvolve";
import {useState, useEffect} from 'react';

export function Home(props) {
    const [events, setEvents] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3000/events")
        .then(res=>{
            if(!res.ok){
                throw Error("Could not fetch :(")
            }
            return res.json()
        })
        .then(data =>{
            console.log(data)
            setEvents(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err=>{
            setError(err.message)
            setIsPending(false)
        })

    },[])   
    return (
        <div className="container">
            <h1>
                {events && <UpcomingEvents events={events}/>}
                <Getinvolve />
            </h1>
        </div>
    )
}

export default Home;