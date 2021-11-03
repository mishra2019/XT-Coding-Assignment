import {useState} from 'react';
const Filters = ({setNotes}) => {
    
    const [yearSelected,setYearSelected]=useState(null);
    const [launchSuccess,setLaunchSuccess]=useState(null);
    const [landingSuccess,setLandingSuccess]=useState(null);

    const years=[];
    for(let i=2006;i<2021;i++)
        years.push(i);
    const  handleClick  = async (yearSelected,launchSuccess,landingSuccess,setNotes) =>{
        var url='https://api.spaceXdata.com/v3/launches?limit=100';
        if(yearSelected!=null){
            url=url+'&launch_year='+yearSelected;
        }
        if(launchSuccess!=null){
            url=url+'&launch_success='+launchSuccess;
        }
        if(landingSuccess!=null){
            url=url+'&land_success='+landingSuccess;
        }

        await fetch(url)
        .then(res => res.json())
        .then(data => setNotes(data))


    }
   
    return ( 

        <div className="filter">
             <div className="box1">
                    <h3>Filters</h3>
                    <h5>Launch Year</h5>
                    <br />
                    <div className="btn">
                        
                        {
                            years.map(year => {
                                return <div><button
                                className='yearButton'
                                value={year}
                                onClick={

                                    (e)=>{
                                        setYearSelected(e.target.value);

                                        handleClick(year,launchSuccess,landingSuccess,setNotes)
                                        var buttons = document.getElementsByClassName("yearButton");
                                                Array.prototype.forEach.call(buttons, function(btn){
                                                    btn.classList.remove('clicked');
                                                })
                                                e.target.classList.add('clicked');

                                        
                                     }
                                }
                                
                                >{year}</button></div>
                            })
                            
                        }
                    </div>
                    <br />
                    <h5>Successful Launch</h5>
                        <br />
                    <div className="btn">
                    <div> <button
                           className='launchButton'
                           onClick={(e)=>{

                            var buttons = document.getElementsByClassName("launchButton");
                                                Array.prototype.forEach.call(buttons, function(btn){
                                                    btn.classList.remove('clicked');
                                                })
                                                 e.target.classList.add('clicked');
                            setLaunchSuccess(true);

                            handleClick(yearSelected,true,landingSuccess,setNotes)
                           }
                        
                        }

                          
                          >True</button></div>
                        <div> <button
                              className='launchButton'
                              onClick={(e)=>{
                                var buttons = document.getElementsByClassName("launchButton");
                                                Array.prototype.forEach.call(buttons, function(btn){
                                                    btn.classList.remove('clicked');
                                                })
                                                 e.target.classList.add('clicked'); 
                                                 setLaunchSuccess(false); 

                                                 handleClick(yearSelected,false,landingSuccess,setNotes)
                            
                            }}


                              >False</button></div>
                    </div>
                    <br />
                    <h5>Successful Landing</h5>
                    <br />
                    <div className="btn">
                    <div> <button
                      className='landingButton'
                        onClick={(e)=>{
                            var buttons = document.getElementsByClassName("landingButton");
                                        Array.prototype.forEach.call(buttons, function(btn){
                                            btn.classList.remove('clicked');
                                        })
                                          e.target.classList.add('clicked');
                            setLandingSuccess(true);
                            
                            handleClick(yearSelected,launchSuccess,true,setNotes)
                        
                        }}

                          
                          >True</button></div>
                        <div> <button
                             className='landingButton'
                             onClick={(e)=>{
                                var buttons = document.getElementsByClassName("landingButton");
                                Array.prototype.forEach.call(buttons, function(btn){
                                            btn.classList.remove('clicked');
                                          })
                                          e.target.classList.add('clicked'); 
                                setLandingSuccess(false);
                                handleClick(yearSelected,launchSuccess,false,setNotes)
                            }}

                             
                              >False</button></div>
                    </div>


                </div>
        </div>
     );
}
 
export default Filters;