// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Settings from './pages/Settings';
import Edit from './pages/Edit';
import Change from './pages/Change';
import Shortlisted from './pages/Shortlisted';
import Shortlist from './pages/Shortlist';
import Viewed from './pages/Viewed';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/setting' element={<Settings Se="Settings"/>} />
          <Route path='/edit' element={<Edit Se="Edit My Profile"/>}/>
          <Route path='/change' element={<Change Se="Change Password"/>}/>
          <Route path='/shortlisted' element={<Shortlisted Se="Shortlisted By"/>}/>
          <Route path='/short' element={<Shortlist Se="Shortlist"/>}/>
          <Route path='/view' element={<Viewed Se="Viewed My Profile"/>}/>

          </Routes>
      </div>
    </Router>
  );
};

export default App;