import "./notes.css";
const Notes = (props) => {

  return (
    <div className="notes">
      {props.notes === null ? (
        <h1 style={{ color: "white" }}>No Notes Availabe</h1>
      ) : 
        props.notes.map((note)=>{
            return (
                <div key={note._id} className="note">
                  <div>{note.note}</div>
                  <div style={{"marginTop":"10px"}}>
                    <button onClick={()=>{props.setEditNote(note);props.setChangeNote(true)}} className="button editNote">Edit</button>
                    <button onClick={()=>{props.setAlertType("deleteNote");
                    props.setDeleteNote(note);
                    props.setShowAlert(true);
                  }} className="button deleteNote">Delete</button>
                  </div>
                </div>
                );
        })
      }
    </div>
  );
};
export default Notes;
