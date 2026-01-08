import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={() => navigate("/")}>Go Home</button>
        </div>
    )
}

export default ErrorPage
