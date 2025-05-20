import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d3d66] text-white px-6 md:px-20 py-16" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start gap-12">

        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-3xl font-bold">
            <img src="/Logo.png" alt="logo" className="max-w-24" />
          </div>

          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="https://www.instagram.com/botulimp/" target="_blank"><FaInstagram size={24} className="hover:text-[#3ab7bf]" /></a>
            <a href="https://www.facebook.com/botulimp/" target="_blank"><FaFacebook size={24} className="hover:text-[#3ab7bf]" /></a>
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
              <li><a href="#sobre" className="hover:underline">Quem somos</a></li>
              <li><a  href="https://api.whatsapp.com/send?phone=5514991664052&text=https%3A%2F%2Fcontate.me%2Fbotulimp" className="hover:underline">Fale conosco</a></li>
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

          <div className="space-y-4 text-sm">
            <h4 className="font-semibold text-lg mb-2">Contatos</h4>
            <p>📞(14) 9 9166-4052</p>
            <p>📍 Av. Joaquim Amaral Amando de Barros <br />988 – Jardim Iolanda</p>
            <p>📍 Botucatu<br />São Paulo</p>
            <p>✉️ <a href="mailto:botulimp@bol.com.br" className="underline">botulimp@bol.com.br</a></p>
          </div>

        </div>

        <div className="w-full border-t border-gray-500 mt-12 pt-6 flex flex-wrap justify-center gap-4 text-xs">
          <a
            href="https://www.gov.br/anvisa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Anvisa – Higiene e Saúde
          </a>
          <a
            href="https://portal.fiocruz.br/noticia/acaros-e-sua-relacao-com-saude"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Fiocruz – Ácaros e Saúde
          </a>
          <a
            href="https://www.ecodebate.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            EcoDebate – Sustentabilidade
          </a>
        </div>


        <div className="mt-6 text-xs text-center text-gray-400">
          Copyright © {new Date().getFullYear()} | Todos os direitos reservados
        </div>

      </div>
    </footer>
  );
}
