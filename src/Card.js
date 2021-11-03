const Card = ({note}) => {
    return ( 
        <div className="card">
               <img src={note.links.mission_patch_small} alt="" />  
               <h4>{note.mission_name} #{note.flight_number}</h4>  
               <p><span>Mission Ids:</span></p>
               
                <ul>
                    {note.mission_id.map(id => (
                        <li>{id}</li>

                    ))}                    
                </ul>
                
               <p><span>Launch Year:</span> {note.launch_year}</p>  
               <p><span>Successful Launch:</span> {note.launch_success?'true':'false'}</p>
               <p><span>Successful Landing:</span> {note.rocket.first_stage.cores[0].land_success?'true':'false'}</p>


        </div>

    );
}
 
export default Card;
