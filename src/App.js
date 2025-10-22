import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import NYSEDGrant2025 from './pages/NYSEDGrant2025';
import LTGPhase1 from './pages/LTGPhase1';
import LTGPhase2 from './pages/LTGPhase2';
import LTGPhase3 from './pages/LTGPhase3';
import PrincipalMessage from './pages/PrincipalMessage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/nysed-grant-2025" element={<NYSEDGrant2025 />} />
        <Route path="/ltg-phase-1" element={<LTGPhase1 />} />
        <Route path="/ltg-phase-2" element={<LTGPhase2 />} />
        <Route path="/ltg-phase-3" element={<LTGPhase3 />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
