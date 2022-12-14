import "./home.css";
import Navbar from "../Navbar/navbar";
import Notes from "../Notes/notes";
import React, { useEffect,useState } from "react";
import AddNote from "../AddNote/addNote";
import { Navigate } from "react-router-dom";
import EditNote from "../EditNote/editNote";
import Alert from "../AlertBox/alert";
const Home = (props)=>{
    const [notes,setNotes] = useState(null);
    const [editNote,setEditNote] = useState(null);
    const [changeNote,setChangeNote] = useState(false);
    const [addNote,setAddNote] = useState(false);

    const [showAlert,setShowAlert] = useState(false);
    const [deleteNote,setDeleteNote] = useState("");
    const [alertType,setAlertType] = useState("");

    const fetchAllNotes = async()=>{
        const url = process.env.REACT_APP_SERVER_URL+"/getNotes/"+props.Email;
        let res = await fetch(url,{method:"GET",'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
        res = await res.json();
        if(res.message)
        alert(res.message);
        else if(res.length > 0)
        {
        setNotes(res)
        }
        else
        {
            setNotes(null);
        }
    }
    useEffect(()=>{
        fetchAllNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(()=>{
        fetchAllNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[addNote])

    return(
        props.Email === ""?
        <Navigate to="/"></Navigate>:<React.Fragment>{showAlert?
        <Alert fetchAllNotes={fetchAllNotes} deleteNote={deleteNote} setEmail={props.setEmail} alertType={alertType} setShowAlert={setShowAlert}/>:null}
        <div className="homeOuter">
            <Navbar setAlertType={setAlertType} setShowAlert={setShowAlert} fetchAllNotes={fetchAllNotes} Email={props.Email} setNotes = {setNotes} setAddNote={setAddNote} />
            {addNote? 
            <AddNote Email={props.Email} setAddNote={setAddNote}/>:changeNote?
            <EditNote fetchAllNotes={fetchAllNotes} setChangeNote={setChangeNote} note={editNote}/>:
            <Notes setChangeNote={setChangeNote} setEditNote={setEditNote} notes={notes} setDeleteNote={setDeleteNote} setAlertType={setAlertType} setShowAlert={setShowAlert}/>
}
        </div>
        </React.Fragment>
    );
}
export default Home;