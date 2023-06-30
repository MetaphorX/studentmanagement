import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Appointment from './pages/appointment';
import Home from './pages/home';
import Login from './pages/login';
import Tips from './pages/tips';
import Admin from './pages/admin';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/appointment'} element={<Appointment />}/>
        <Route path={'/tips'} element={<Tips />}/>
        <Route path={'/admin'} element={<Admin />}/>
      </Routes>
    </>
  );
}

export default App;
