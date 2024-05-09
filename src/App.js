import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Scores from './pages/Scores';
import AddStaff from './pages/AddStaff';
import AddStudent from './pages/AddStudent';
import AddCourses from './pages/AddCourses';
import Staff from './pages/Staff';
import SingleStudent from './pages/SingleStudent';

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/students'} element={<Students />}/>
        <Route path={'/courses'} element={<Courses />}/>
        <Route path={'/add-staff'} element={<AddStaff />}/>
        <Route path={'/add-student'} element={<AddStudent />}/>
        <Route path={'/add-courses'} element={<AddCourses />}/>
        <Route path={'/scores'} element={<Scores />}/>
        <Route path={'/staff'} element={<Staff />}/>
        <Route path={'/single-student'} element={<SingleStudent />}/>
        

      </Routes>
    </>
  );
}

export default App;
