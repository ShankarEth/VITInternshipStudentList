import { useEffect, useState } from "react";
import Axios from "axios";
import StudentTableRow from "./StudentTableRow";
function StudentTable() {

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const url = "http://localhost:4500/student/";
        Axios.get(url)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])

    const Datatable = () => {
        return resData.map((val,ind)=>{ //[{},{},{}]
            return <StudentTableRow obj={val} key={ind} />
        })
    }
    return (
        <div>
            <table class="mx-auto bg-warning table-bordered table-hover table-striped my-4">
                <tr class="bg-success">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rollno</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {Datatable()}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable;