
export default function Home() {
  return (
    <div className="min-h-screen bg-[#c7e9f4] text-[#0d3d66] font-sans">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-[#0d3d66]">BOTULIMP</div>
        <ul className="flex gap-6 text-[#0d3d66] font-medium">
          <li className="hover:text-[#1d9dd9] cursor-pointer">Início</li>
          <li className="hover:text-[#1d9dd9] cursor-pointer">Serviços</li>
          <li className="hover:text-[#1d9dd9] cursor-pointer">Sobre</li>
          <li className="hover:text-[#1d9dd9] cursor-pointer">Contato</li>
        </ul>
      </nav>

      <header className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img src="/logo.png" alt="Botulimp Logo" className="w-40 h-40 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Higienização e Impermeabilização</h1>
        <p className="text-lg max-w-2xl">
          Serviço especializado de limpeza profunda e proteção de estofados, tapetes, colchões e muito mais. Garantimos qualidade, segurança e um ambiente mais saudável para você e sua família.
        </p>
      </header>

      <section className="bg-[#e5f6fb] py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">Higienização de Estofados</h3>
            <p>Remoção de sujeiras, ácaros e bactérias com produtos seguros e eficazes.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">Impermeabilização</h3>
            <p>Proteção contra líquidos e manchas, mantendo seu estofado novo por mais tempo.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">Limpeza de Tapetes</h3>
            <p>Procedimento especializado para manter seus tapetes limpos, sem odores e bem cuidados.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#0d3d66] text-white text-center py-6">
        <p>&copy; 2025 BOTULIMP - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}