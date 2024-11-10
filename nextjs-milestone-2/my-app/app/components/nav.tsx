import Link from "next/link";

export default function Nav() {
    return (
        <>
            <header className="bg-gray-900 text-white fixed w-full z-10">
                <nav className="container mx-auto p-5 flex justify-center">
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
                        <li><Link href="/contact-us" className="hover:text-yellow-400">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
} 