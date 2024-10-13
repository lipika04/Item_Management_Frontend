// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import ItemManager from './components/ItemManagement';
import UserRegistration from './components/Register';
import FileManager from './components/FileManager';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {


    return (
        <Router>
            <Routes>
                {/* <Route path="/login" element={isLoggedIn ? <Navigate to="/items" /> : <Login onLoginSuccess={handleLoginSuccess} />} /> */}
                {/* <Route path="/items" element={isLoggedIn ? <ItemManager onLogOutSuccess={handleLogoutSuccess} /> : <Navigate to="/login" />} /> */}
                <Route path='/items' element={<ItemManager/>}/>
                <Route path='/register' element= {<UserRegistration/>} />
                <Route path="/" element={<Login/>} />
                <Route path='/files' element={<FileManager/>}/>
            </Routes>
        </Router>
    );
};

export default App;
