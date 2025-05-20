import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`px-4 py-4 flex justify-between items-center w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 bg-white shadow-md' : 'absolute top-0 left-0 bg-transparent'
                }`}
        >
            <div className="text-xl font-bold text-[#0d3d66]">BOTULIMP</div>

            <button className="md:hidden text-[#0d3d66]" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className="hidden md:flex gap-6 text-[#0d3d66] font-medium">
                <li><a href="#inicio" className="hover:text-[#1d9dd9]">Início</a></li>
                <li><a href="#servicos" className="hover:text-[#1d9dd9]">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-[#1d9dd9]">Sobre</a></li>
                <li><a href="#footer" className="hover:text-[#1d9dd9]">Contato</a></li>
            </ul>

            <ul
                className={`md:hidden absolute top-16 left-0 w-full bg-white text-[#0d3d66] font-medium flex flex-col items-center gap-4 py-6 shadow-md transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
                <li><a href="#servicos" onClick={toggleMenu}>Serviços</a></li>
                <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
                <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
            </ul>
        </nav>
    );
}
