import React, { useState, useEffect } from 'react';
import ResortCard from './ResortCard';
import { fallbackResorts } from '../data/resorts';

const ResortList = () => {
    const [resorts, setResorts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate API fetch or use fallback
        const fetchResorts = async () => {
            try {
                // In a real scenario, we would fetch from an API here.
                // For now, we simulate a network delay and use our mock data.
                await new Promise(resolve => setTimeout(resolve, 800));
                setResorts(fallbackResorts);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch resort data", err);
                setError("Unable to load resort data.");
                setLoading(false);
            }
        };

        fetchResorts();
    }, []);

    if (loading) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '4rem',
                color: 'var(--color-text-secondary)'
            }}>
                Loading resort data...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '4rem',
                color: 'var(--color-status-closed)'
            }}>
                {error}
            </div>
        );
    }

    return (
        <div className="card-grid">
            {resorts.map(resort => (
                <ResortCard key={resort.id} resort={resort} />
            ))}
        </div>
    );
};

export default ResortList;
