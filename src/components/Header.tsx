export default function Header() {
  return (
    <div
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#c7e9f4] text-[#0d3d66]"
    >
      <img src="/Logo.png" alt="Botulimp Logo" className="w-48 h-48 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Higienização e Impermeabilização</h1>
      <h2 className="text-lg max-w-2xl">
        Serviços de Limpeza, Higienização e Impermeabilização de Estofados. Garantimos qualidade, segurança e um ambiente mais saudável para você e sua família.
      </h2>
    </div>
  );
}
