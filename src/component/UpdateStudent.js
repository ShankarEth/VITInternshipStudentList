import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import {useEffect, useState} from 'react';
import Axios from 'axios';

function UpdateStudent() {
    const [obj,setObj] = useState({});
    //obj = {_id:"" , name:"paras", email:"paras@gmail.com", rollno:"45"}
    const [updatedData, setUpdatedData] = useState([]);
    
    const {id} = useParams();

    const getState = (childData) => {
        setUpdatedData(childData);
    }

    const handleSubmit = () => {
        const url = "http://localhost:4500/student/update-student/" + id;
        const updatedObj = {name:updatedData[0],email:updatedData[1],rollno:updatedData[2]};
        Axios.put(url,updatedObj)
        .then((res)=>{
            if(res.status ===200){
                alert("Successfully updated")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }


    useEffect(()=>{
        const url = "http://localhost:4500/student/update-student/" + id;
        Axios.get(url)
        .then((res)=>{
            if(res.status === 200)
            {
                setObj(res.data); //{_id,name,email,rollno}
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <StudentForm getState={getState} btnName="Update Student" nameValue={obj.name} emailValue={obj.email} rollNoValue={obj.rollno} />
            </form>
        </div>
    )
}
export default UpdateStudent;