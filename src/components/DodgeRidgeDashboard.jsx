import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fallbackResorts } from '../data/resorts';

function DodgeRidgeDashboard() {
  const [resortStatus, setResortStatus] = useState('loading');
  const [resortData, setResortData] = useState(null);

  useEffect(() => {
    // Fetch Dodge Ridge status from our data
    const dodgeRidge = fallbackResorts.find(resort => resort.id === 'dodge-ridge');
    if (dodgeRidge) {
      setResortData(dodgeRidge);
      setResortStatus(dodgeRidge.status);
    }
  }, []);

  const statusStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '3rem 2rem',
    margin: '2rem 0',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: 'var(--color-bg-card)',
    color: resortStatus === 'open' ? 'var(--color-status-open)' : 'var(--color-status-closed)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    boxShadow: 'var(--shadow-lg)',
    border: `3px solid ${resortStatus === 'open' ? 'var(--color-status-open)' : 'var(--color-status-closed)'}`,
  };

  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: 'var(--color-bg-card)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: 'var(--color-accent)',
    borderBottom: '2px solid var(--color-accent)',
    paddingBottom: '0.5rem',
  };

  const iframeStyle = {
    width: '100%',
    height: '500px',
    border: 'none',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: '#000',
  };

  const webcamContainerStyle = {
    marginBottom: '2rem',
  };

  const webcamIframeStyle = {
    width: '100%',
    height: '450px',
    border: 'none',
    borderRadius: 'var(--radius-lg)',
    backgroundColor: '#000',
  };

  const webcamLabelStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: 'var(--color-text-primary)',
  };

  const headerStyle = {
    marginBottom: '2rem',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    background: 'linear-gradient(to right, var(--color-accent), #7dd3fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '0.5rem',
  };

  const backLinkStyle = {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--color-accent)',
    color: 'var(--color-bg-main)',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontWeight: '600',
    transition: 'opacity 0.2s',
  };

  const infoBoxStyle = {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    borderLeft: '4px solid var(--color-accent)',
    borderRadius: '0.5rem',
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Dodge Ridge Dashboard</h1>
        <Link to="/" style={backLinkStyle}>← Back to All Resorts</Link>
      </header>

      {/* Resort Status Section */}
      <div style={statusStyle}>
        {resortStatus === 'loading' ? 'Loading...' : resortStatus.toUpperCase()}
      </div>

      {resortData && (
        <div style={infoBoxStyle}>
          <p style={{ margin: '0.25rem 0', color: 'var(--color-text-secondary)' }}>
            <strong>Lifts:</strong> {resortData.lifts.open} of {resortData.lifts.total} open
          </p>
          <p style={{ margin: '0.25rem 0', color: 'var(--color-text-secondary)' }}>
            <strong>Conditions:</strong> {resortData.conditions}
          </p>
          <p style={{ margin: '0.25rem 0', color: 'var(--color-text-secondary)' }}>
            <strong>Temperature:</strong> {resortData.temp}
          </p>
        </div>
      )}

      {/* Highway 108 Road Conditions Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Highway 108 Road Conditions</h2>
        <iframe
          src="https://roads.dot.ca.gov/?roadnumber=108"
          style={iframeStyle}
          title="Highway 108 Road Conditions"
          loading="lazy"
        />
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          View current road conditions for Highway 108 from Caltrans. Check for closures, chain requirements, and weather advisories.
        </p>
      </div>

      {/* Webcams Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Live Webcams</h2>

        {/* Top Webcam */}
        <div style={webcamContainerStyle}>
          <h3 style={webcamLabelStyle}>Top of Mountain</h3>
          <iframe
            src="https://www.youtube.com/embed/l1gateQVYr4"
            style={webcamIframeStyle}
            title="Dodge Ridge Top Webcam"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Middle Webcam */}
        <div style={webcamContainerStyle}>
          <h3 style={webcamLabelStyle}>Middle Mountain</h3>
          <iframe
            src="https://www.youtube.com/embed/_6FaNC2zLK4"
            style={webcamIframeStyle}
            title="Dodge Ridge Middle Webcam"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Bottom Webcam */}
        <div style={webcamContainerStyle}>
          <h3 style={webcamLabelStyle}>Base/Bottom</h3>
          <iframe
            src="https://www.youtube.com/embed/jlzZ5jXXOW4"
            style={webcamIframeStyle}
            title="Dodge Ridge Bottom Webcam"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer with links */}
      <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
        <p>
          <a
            href="https://dodgeridge.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
          >
            Visit Dodge Ridge Official Website →
          </a>
        </p>
      </div>
    </div>
  );
}

export default DodgeRidgeDashboard;
