import Axios from 'axios';

function StudentTableRow(props)
{
    //Object Destruction 
    const {_id,name,email,rollno} = props.obj; //_id,name,email,rollno
    const handleDelete = () => {
        const url = "http://localhost:4500/student/delete-student/" + _id;
        Axios.delete(url)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record deleted successfully..");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })

        .catch((err)=>alert(err));
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <a href={`./edit-student/${_id}`}><button class="btn btn-sm btn-success m-1">Edit</button></a>
                <button onClick={handleDelete} class="btn btn-sm btn-danger m-1">Delete</button>
            </td>
        </tr>
    )
}
export default StudentTableRow;