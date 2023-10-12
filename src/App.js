import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addmembers from './pages/admin/Addmembers';
import AddTeacher from './pages/admin/AddTeacher';
import AddStudent from './pages/admin/AddStudent';
import AddSubject from './pages/admin/AddSubject';
import Adminlogin from './pages/admin/Adminlogin'
import Teacherslogin from './pages/teachers/Teacherslogin';
import Teacher from './pages/teachers/Teacher';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Adminlogin />} />
          <Route path="/AddTeacher" element={<AddTeacher />} />
          <Route path="/Addmembers" element={<Addmembers />} />
          <Route path="/AddStudent" element={<AddStudent />} />
          <Route path="/AddSubject" element={<AddSubject />} />
          <Route path="/Teacher" element={<Teacher />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
