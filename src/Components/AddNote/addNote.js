import { useState } from "react";
import "./addNote.css";
const AddNote = (props)=>{
    const [noteData,setNoteData] = useState("");
    const createNewNote = async ()=>{
        if(noteData !== "")
        {
            let res = await fetch(process.env.REACT_APP_SERVER_URL+"/addNote",  { method: "POST", body: JSON.stringify({email:props.Email,note:noteData}), 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
            res = await res.json();
            if(res.message === "Success")
            {
                props.setAddNote(false);
            }
            else
            {
                alert(res.message);
            }
        }
    }
    return(
        <div className="addNoteDiv">
            <textarea onChange={(e)=>{setNoteData(e.target.value)}} placeholder="Add New Note"></textarea>
            <div style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
            <button onClick={createNewNote} className="saveButton button">Save</button>
            <button onClick={()=>{props.setAddNote(false)}} className="cancelButton button">Cancel</button>
            </div>
        </div>
    )
}
export default AddNote;