import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './component/CreateStudent';
import StudentTable from './component/StudentTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateStudent from './component/UpdateStudent';
import Nav from './component/Nav';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* 
              http://localhost:3000 -> CreateStudent 
              http://localhost:3000/create-student -> CreatteStudent
              http://localhost:3000/student-list -> StudentTable
              http://localhost:3000/edit-student/:id -> UpdateStudent        
        */}
        <Route path="/" element={<CreateStudent />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/student-list" element={<StudentTable />} />
        <Route path="/edit-student/:id" element={<UpdateStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
