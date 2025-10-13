
function About() {
    return (
        <div className="w-3xl border-1 p-8 rounded-md">
            <h1 className="text-3xl font-bold text-center border-b-1 mb-4 pb-2">About React Router DOM</h1>
            <ul className="list-disc px-8 text-justify text-lg selection:bg-yellow-300 selection:text-black">
                <li><strong>React Router</strong> was developed by <em>Ryan Florence</em> and <em>Michael Jackson</em> back in <strong>2014</strong> as a declarative, component-based routing solution for React applications.</li>
                <li>Over time, it evolved into seperate packages like <strong>React Router DOM</strong> for web and <strong>React Router Native</strong> for mobile apps.</li>
                <li>Today, it's maintained by Remix team and an active open-source community.</li>
                <li>It remains the go-to for managing client-side routing. The latest release , as of now, is version 7.8.0, featuring upgraded performance and improved TypeScript support.</li>
            </ul>
        </div>
    )
}

export default About
