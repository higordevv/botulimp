export default function Header() {
    return (
      <header id="inicio" className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img src="/logo.png" alt="Botulimp Logo" className="w-40 h-40 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Higienização e Impermeabilização</h1>
        <p className="text-lg max-w-2xl">
          Serviço especializado de limpeza profunda e proteção de estofados, tapetes, colchões e muito mais.
        </p>
      </header>
    );
  }
  