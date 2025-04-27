import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d3d66] text-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start gap-12">

        {/* Logo + Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span className="text-gray-300">Botu</span><span className="text-white">limp</span>
            <p className="text-sm mt-1 font-light">Higienização e Impermeabilização</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#"><FaInstagram size={24} className="hover:text-[#3ab7bf]" /></a>
            <a href="#"><FaYoutube size={24} className="hover:text-[#3ab7bf]" /></a>
          </div>
        </div>

        {/* Divisão */}
        <div className="w-full border-t border-gray-500" />

        {/* Links + Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">

          {/* Sobre nós */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-2">Sobre nós</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#quem-somos" className="hover:underline">Quem somos</a></li>
              <li><a href="#equipe" className="hover:underline">Equipe</a></li>
              <li><a href="#contato" className="hover:underline">Fale conosco</a></li>
            </ul>
          </div>

          {/* Soluções */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-2">Soluções</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#empresa" className="hover:underline">Para Empresas</a></li>
              <li><a href="#voce" className="hover:underline">Para Você</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4 text-sm">
            <h4 className="font-semibold text-lg mb-2">Contatos</h4>
            <p>📍 ( A preencher) <br />( A preencher) – ( A preencher)</p>
            <p>📍 ( A preencher)<br />( A preencher)</p>
            <p>📞( A preencher)</p>
            <p>✉️ <a href="mailto:contato@gonext.com.br" className="underline">( A preencher)</a></p>
          </div>

        </div>

        {/* Footer Base Links */}
        <div className="w-full border-t border-gray-500 mt-12 pt-6 flex flex-wrap justify-center gap-4 text-xs">
          <a href="#" className="hover:underline">Higienização de Estofados</a>
          <a href="#" className="hover:underline">Impermeabilização Profissional</a>
          <a href="#" className="hover:underline">Limpeza de Tapetes</a>
          <a href="#" className="hover:underline">Cuidados com Estofados</a>
          <a href="#" className="hover:underline">Dicas de Conservação</a>
          <a href="#" className="hover:underline">Perguntas Frequentes</a>
          <a href="#" className="hover:underline">Política de Privacidade</a>
        </div>


        {/* Copyright */}
        <div className="mt-6 text-xs text-center text-gray-400">
          Copyright © {new Date().getFullYear()} | Todos os direitos reservados
        </div>

      </div>
    </footer>
  );
}
