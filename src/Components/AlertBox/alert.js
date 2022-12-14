import "./alert.css"
const Alert = (props)=>{

    const deleteNote = async ()=>{
        let res = await fetch(process.env.REACT_APP_SERVER_URL+"/deleteNote", { method: "DELETE", body: JSON.stringify(props.deleteNote), 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' });
        res = await res.json();
        if(res.message === "Success")
        {
            props.fetchAllNotes();
            props.setShowAlert(false);
        }
        else
        {
            alert(res.message);
        }
    }


    return(
        <div className="blurBackground">
            <div className="alertBox">
                <div style={{"fontWeight":"bold"}}>{props.alertType === "logout" ? "Are you sure you want to logout?" : props.alertType === "deleteNote" ? "Are you sure you want to delete this note?" : "Please press No"}</div>
                <div>
                <button onClick={()=>{
                    props.alertType === "logout" ?props.setEmail(""):
                    props.alertType === "deleteNote" ? deleteNote():
                    props.setShowAlert(false)}} className="yesButton button">Yes</button>
                <button onClick={()=>{props.setShowAlert(false)}} className="noButton button">No</button>
                </div>
            </div>
        </div>
    );
}
export default Alert;