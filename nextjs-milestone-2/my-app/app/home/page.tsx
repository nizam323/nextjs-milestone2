export default function Page() {
    return (
        <>
            <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-500 text-white">
                <div className="text-center px-4 md:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Service</h1>
                    <p className="text-lg md:text-xl mb-6">We provide the best solutions to help you achieve your goals. Join us and start your journey today.</p>
                    <a className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Learn More</a>
                </div>
            </section>
        </>
    )
} 