import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IaModel from '../pages/IApage.jsx';
import Landing from '../pages/landing.jsx';
import Login from '../pages/login.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<IaModel />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Landing' element={<Landing />} />
            </Routes>
        </Router>
    )
};

export default AppRoutes;