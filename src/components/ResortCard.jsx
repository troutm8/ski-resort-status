import React from 'react';

const ResortCard = ({ resort }) => {
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'open': return 'var(--color-status-open)';
            case 'closed': return 'var(--color-status-closed)';
            default: return 'var(--color-status-hold)';
        }
    };

    const cardStyle = {
        backgroundColor: 'var(--color-bg-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default'
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '0.5rem'
    };

    const nameStyle = {
        margin: 0,
        fontSize: '1.25rem',
        color: 'var(--color-text-primary)',
        fontWeight: 600
    };

    const statusBadgeStyle = {
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.875rem',
        fontWeight: 600,
        backgroundColor: `${getStatusColor(resort.status)}20`, // 20% opacity background
        color: getStatusColor(resort.status),
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };

    const detailsGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginTop: 'auto'
    };

    const labelStyle = {
        fontSize: '0.75rem',
        color: 'var(--color-text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '0.25rem',
        display: 'block'
    };

    const valueStyle = {
        fontSize: '1rem',
        color: 'var(--color-text-primary)'
    };

    return (
        <div
            className="resort-card"
            style={cardStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
        >
            <div style={headerStyle}>
                <h3 style={nameStyle}>{resort.name}</h3>
                <span style={statusBadgeStyle}>{resort.status}</span>
            </div>

            <div style={detailsGridStyle}>
                <div>
                    <span style={labelStyle}>Lifts</span>
                    <div style={valueStyle}>
                        {resort.lifts.open} <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>/ {resort.lifts.total}</span>
                    </div>
                </div>
                <div>
                    <span style={labelStyle}>Conditions</span>
                    <div style={valueStyle}>{resort.conditions}</div>
                </div>
                <div>
                    <span style={labelStyle}>Temp</span>
                    <div style={valueStyle}>{resort.temp}</div>
                </div>
            </div>
        </div>
    );
};

export default ResortCard;
