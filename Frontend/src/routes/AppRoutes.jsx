import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import IaModel from '../pages/IApage.jsx';
import Landing from '../pages/landing.jsx';
import Login from '../pages/login.jsx';

const AppRoutes = () => {
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/IaModel' element={<IaModel/>}/>
        </Routes>
    </Router>
};

export default AppRoutes;