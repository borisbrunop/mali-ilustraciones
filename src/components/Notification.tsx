import React from 'react'

interface NotificationType {
    amount: number
    styles: React.CSSProperties
}

export default function Notification({ amount, styles }: NotificationType) {
    return (
        <div style={{ 
            backgroundColor: '#ff5959', 
            color: '#ffff', 
            padding: '3px 7px',
            borderRadius: '50%', 
            position: 'absolute', 
            ...styles }}>
            {amount}
        </div>
    )
}
