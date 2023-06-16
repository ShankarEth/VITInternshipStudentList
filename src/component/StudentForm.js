import { useState } from "react";

function StudentForm(props) {
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [rollno, setRollno] = useState(props.rollNoValue);

    useEffect(()=>{
        setName(props.nameValue);
    })
    const arr = [name, email, rollno];
    const handleClick = () => {
        return props.getState(arr);
    }
    return (
        <div>
            <input placeholder="Enter your name" type="text"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setName(e.target.value)} 
                defaultValue={props.nameValue}/>
            <input placeholder="Enter your email" type="email"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setEmail(e.target.value)} 
                defaultValue={props.emailValue}/>
            <input placeholder="Enter your rollno" type="number"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setRollno(e.target.value)} 
                defaultValue={props.rollNoValue}/>
            <center>
                <button class="btn btn-success" type="submit" onClick={handleClick}>{props.btnName}</button>
            </center>
        </div>
    )
}
export default StudentForm;