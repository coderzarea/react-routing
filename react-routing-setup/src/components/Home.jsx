function Home() {
    return (
        <div className='w-3xl border-1 p-8 rounded-md'>
            <h1 className="text-3xl font-bold text-center border-b-1 mb-4 pb-2">Introduction</h1>
            <ul className="list-disc px-8 text-justify text-lg selection:bg-yellow-300 selection:text-black">
                <li><strong>React Router DOM</strong> is a popular library for adding navigation to react apps.</li>
                <li>It lets you switch between pages smoothly without reloading the browser.</li>
                <li>You can create both static and dynamic routes for different parts of your app.</li>
                <li>Features like nested routes and easy navigation make it beginner-friendly.</li>
                <li>Perfect for building single-page apps that feel like real multi-page websites.</li>
            </ul>
        </div>
    )
}

export default Home
