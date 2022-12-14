import { useState } from "react";
import "./navbar.css";
const Navbar = (props)=>{
    const [search,setSearch] = useState("");
    const [date,setDate] = useState("");
    const Gosearch = async ()=>{
        if(search !== "")
        {
            const url = process.env.REACT_APP_SERVER_URL+"/searchNotes/"+props.Email+"/"+search.toString();
            let res = await fetch(url,{method:"GET",'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
            res = await res.json();
            if(res.message)
            alert(res.message);
            else if(res.length > 0)
            props.setNotes(res);
            else
            props.setNotes(null);
        }
        else
        {
           props.fetchAllNotes();
        }
    }
    const searchByDate = async ()=>{
        if(date !== "")
        {
            const url =process.env.REACT_APP_SERVER_URL+"/getNotesByDate/"+props.Email+"/"+date;
            let res = await fetch(url,{method:"GET",'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
            res = await res.json();
            if(res.message)
            alert(res.message);
            else if(res.length > 0)
            props.setNotes(res);
            else
            props.setNotes(null);
        }
        else
        {
          props.fetchAllNotes();
        }
    }
    return(
        <div className="navbar">
                <div  className="searchDiv">
            <input onChange={(e)=>{setSearch(e.target.value)}} className="searchBox" type="search" placeholder="Search Notes"/>
            <button onClick={()=>{Gosearch()}} className="button searchButton">Search</button>
            </div>
            <div>
            <label htmlFor="cal">Search by Date:</label>
            <input onChange={(e)=>{setDate(e.target.value)}} name="cal" className="calenderInput" type="date"/>
            <button onClick={()=>{searchByDate()}} className="dateSearchButton button">Go</button>
            </div>
            <div>
            <button onClick={()=>{
                props.setAddNote(true)
            }} className="newNoteButton button">New Note</button>
            <button onClick={()=>{
                props.setAlertType("logout");
                props.setShowAlert(true);
            }}
 className="button logoutButton">Logout</button>
            </div>
        </div>
    )
}
export default Navbar;