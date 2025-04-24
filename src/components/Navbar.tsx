import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md px-4 py-4 flex justify-between items-center relative">
            <div className="text-xl font-bold text-[#0d3d66]">BOTULIMP</div>

            {/* Ícone hamburguer (mobile) */}
            <button className="md:hidden text-[#0d3d66]" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Links - desktop */}
            <ul className="hidden md:flex gap-6 text-[#0d3d66] font-medium">
                <li><a href="#inicio" className="hover:text-[#1d9dd9]">Início</a></li>
                <li><a href="#servicos" className="hover:text-[#1d9dd9]">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-[#1d9dd9]">Sobre</a></li>
                <li><a href="#contato" className="hover:text-[#1d9dd9]">Contato</a></li>
            </ul>

            {/* Links - mobile dropdown */}
            <ul className={`md:hidden absolute top-16 left-0 w-full bg-white text-[#0d3d66] font-medium flex flex-col items-center gap-4 py-6 shadow-md transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <li><a href="#inicio" onClick={toggleMenu} className="hover:text-[#1d9dd9]">Início</a></li>
                <li><a href="#servicos" onClick={toggleMenu} className="hover:text-[#1d9dd9]">Serviços</a></li>
                <li><a href="#sobre" onClick={toggleMenu} className="hover:text-[#1d9dd9]">Sobre</a></li>
                <li><a href="#contato" onClick={toggleMenu} className="hover:text-[#1d9dd9]">Contato</a></li>
            </ul>
        </nav>
    );
}
