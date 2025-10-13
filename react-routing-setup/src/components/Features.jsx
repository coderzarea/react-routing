import React from 'react'

function Features() {
    return (
        <div className='w-3xl border-1 p-8 rounded-md'>
            <h1 className="text-3xl font-bold text-center border-b-1 mb-4 pb-2">Features</h1>
            <ul className="list-disc px-8 text-justify text-lg selection:bg-yellow-300 selection:text-black">
                <li><strong>React Router DOM</strong> supports <em>dynamic routing</em>, allowing URLs to adapt to your app's data.</li>
                <li><strong>Nested routes</strong> make it easy to organize and structure complex layouts.</li>
                <li>With <em>programmatic navigation</em>, you can redirect users based on actions or events.</li>
            </ul>
        </div>
    )
}

export default Features
