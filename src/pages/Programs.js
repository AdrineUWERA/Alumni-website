import ProgramsList from "../components/ProgramsList/ProgramsList";
import useFetch from "../components/UseFetch/useFetch";
import {useState, useEffect} from 'react';

function Programs(props) {

    // const {data: programs,isPending,error} = useFetch("http://localhost:8000/programs");

    return (
        <div> 
            <div className="programs-list">
            <ProgramsList />
            </div>
        </div>
    )
}

export default Programs;