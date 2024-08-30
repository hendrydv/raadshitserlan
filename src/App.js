import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Number from './pages/Number';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/:number" element={<Number/>} />
            </Routes>
        </Router>
    );
}

export default App;