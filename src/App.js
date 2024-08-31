import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Number from './pages/Number';
import Feedback from "./pages/Feedback";
import AlreadyGuessed from "./pages/AlreadyGuessed";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/:number" element={<Number/>} />
                <Route path="/feedback" element={<Feedback/>} />
                <Route path="already-guessed" element={<AlreadyGuessed/>} />
            </Routes>
        </Router>
    );
}

export default App;