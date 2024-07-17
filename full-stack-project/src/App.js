import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Members from './Members';
import './App.css';

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/dashboard" element={<PrivateRoute auth={auth}><Dashboard /></PrivateRoute>} />
        <Route path="/members" element={<PrivateRoute auth={auth}><Members /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ auth, children }) {
  return auth ? children : <Navigate to="/login" />;
}

export default App;
