import { useState } from "react";
import "./editNote.css";
const EditNote = (props)=>{
    const [newNote,setNewNote] = useState(props.note.note);
    const edit = async()=>{
        if(props.note.note !== newNote)
        {
            let res = await fetch(process.env.REACT_APP_SERVER_URL+"/editNote",{method:"PATCH", body:JSON.stringify({"_id":props.note._id,"newNote":newNote}),'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
            res = await res.json();
            if(res.message === "Success")
            {
                props.fetchAllNotes();
            }
            else
            {
                alert(res.message);
            }
        }
        props.setChangeNote(false);
    }
    return(
        <div className="editNoteDiv">
        <textarea defaultValue={props.note.note} onChange={(e)=>{setNewNote(e.target.value)}}></textarea>
        <div style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
        <button onClick={()=>{edit()}} className="saveButton button">Save</button>
        <button onClick={()=>{props.setChangeNote(false)}} className="cancelButton button">Cancel</button>
        </div>
    </div>
    )
}
export default EditNote;