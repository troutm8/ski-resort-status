import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResortList from './components/ResortList';
import DodgeRidgeDashboard from './components/DodgeRidgeDashboard';

function HomePage() {
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    paddingTop: '2rem'
  };

  const titleStyle = {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    background: 'linear-gradient(to right, #38bdf8, #818cf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };

  const subtitleStyle = {
    color: 'var(--color-text-secondary)',
    fontSize: '1.25rem'
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '4rem',
    padding: '2rem',
    color: 'var(--color-text-secondary)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)'
  };

  return (
    <div className="App">
      <header style={headerStyle}>
        <h1 style={titleStyle}>California Ski Status</h1>
        <p style={subtitleStyle}>Real-time updates for top California resorts</p>
      </header>

      <main>
        <ResortList />
      </main>

      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Ski Status CA. Data provided for demonstration purposes.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dodge-ridge-dashboard" element={<DodgeRidgeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
