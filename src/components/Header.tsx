export default function Header() {
  return (
    <header
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#c7e9f4] text-[#0d3d66]"
    >
      <img src="/Logo.png" alt="Botulimp Logo" className="w-48 h-48 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Higienização e Impermeabilização</h1>
      <p className="text-lg max-w-2xl">
        Serviço especializado de limpeza profunda e proteção de estofados, tapetes, colchões e muito mais. Garantimos qualidade, segurança e um ambiente mais saudável para você e sua família.
      </p>
    </header>
  );
}
