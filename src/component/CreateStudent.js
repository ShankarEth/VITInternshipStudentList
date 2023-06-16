import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from 'axios';

function CreateStudent() {
    const [data, setData] = useState([]); //data=input field data

    const getState = (childData) => {
        setData(childData);
    }
    
    const handleSubmit = () => {
        const url = "http://localhost:4500/student/create-student"
        const obj = { name: data[0], email: data[1], rollno: data[2] }
        Axios.post(url, obj)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student data is created");
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <StudentForm getState={getState} btnName="Create Student" nameValue='' emailValue='' rollNoValue='' />
            </form>
        </div>
    )
}

export default CreateStudent;