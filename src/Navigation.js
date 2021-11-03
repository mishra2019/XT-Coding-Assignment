import Filters from "./Filters";
import {useEffect,useState} from 'react';
import Card from "./Card";


const Navigation = () => {
    const[notes,setNotes]=useState([]);
       

    useEffect(() => {
        fetch('https://api.spaceXdata.com/v3/launches?limit=100')
        .then(res => res.json())
        .then(data => setNotes(data))
    },[])
        
    return ( 
                <>
                <h1>Spacex Launch Program</h1>

                <div className="container">

                    <Filters setNotes={setNotes}/>
                    <div className="box2">
                        <div className="cards-flex">
                            {notes.map(note =>(
                               <Card note={note}/>
                                        
                            ))}      
                        </div>
                    </div>
                   
                </div>
               
            </>    
     );
}
 
export default Navigation;