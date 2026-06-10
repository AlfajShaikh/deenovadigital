    import { useState, useEffect } from "react";
    import logo from '../../assets/images/logo.png'

    export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Adds a subtle background shift when the user scrolls down
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg shadow-gray-100/40 border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        }`}
        >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr  flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-200 group-hover:scale-105 transition-transform duration-200">
                <img src={logo} alt="" />
                </div>
                <div>
                <h1 className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                    Deenova <span className="text-blue-600">Digital</span>
                </h1>
                <p className="text-[11px] font-medium text-gray-400 tracking-wider uppercase">
                    Smart Business Solutions
                </p>
                </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10">
                {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-semibold text-gray-600 hover:text-blue-600 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full transition-colors"
                >
                    {item}
                </a>
                ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
                <a
                href="#contact"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
                >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-xl group-hover:bg-opacity-0 group-hover:text-white text-gray-900 font-semibold">
                    Get Started
                </span>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? (
                // X Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                ) : (
                // Hamburger Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                )}
            </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
            className={`md:hidden absolute left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
                menuOpen ? "top-full opacity-100 visible" : "top-[-200px] opacity-0 invisible"
            }`}
            >
            <div className="px-6 py-6 flex flex-col gap-4 bg-white">
                {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-semibold text-gray-700 hover:text-blue-600 py-1 transition-colors"
                >
                    {item}
                </a>
                ))}
                <hr className="border-gray-100 my-2" />
                <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-xl font-semibold shadow-md shadow-blue-200 hover:opacity-95 transition"
                >
                Get Started
                </a>
            </div>
            </div>
            
        </div>
        </header>
    );
    }