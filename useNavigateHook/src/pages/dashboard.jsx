import React from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <h1>Welcome to your dashboard!</h1>
        </>
    )
}

export default Dashboard
