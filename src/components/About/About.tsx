

export default function About() {
  return (
    <section id="sobre" className="relative min-h-screen flex flex-col justify-center bg-white px-6 py-16 overflow-hidden">
      
      {/* Fundo Azul Esquerdo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[#c7e9f4] hidden md:block" />

      {/* Container dos Blocos */}
      <div className="relative z-10 flex flex-col gap-20 max-w-7xl mx-auto">

        {/* Bloco Empresas */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-[#0d3d66] mb-2">Soluções para</p>
            <h2 className="text-4xl font-extrabold text-[#3ab7bf] mb-6">Empresas</h2>
            <p className="text-[#0d3d66] mb-6">
              Lorem <span className="font-bold">ipsum dolor sit amet</span>, consectetur adipiscing elit. 
              Quisque vulputate enim leo, a bibendum risus venenatis ut. Donec eu ultricies augue.
            </p>
            <button className="bg-[#3ab7bf] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#329ca5] transition">
              Conheça
            </button>
          </div>

          {/* Imagem */}
          <div className="flex-1">
            <img
              src="/img1.png" // trocar pela imagem correta
              alt="Empresas"
              className="w-full h-80 object-cover rounded-tl-[80px] rounded-br-[80px] shadow-lg"
            />
          </div>
        </div>

        {/* Bloco Você */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-[#0d3d66] mb-2">Soluções para</p>
            <h2 className="text-4xl font-extrabold text-[#f2a03d] mb-6">Você</h2>
            <p className="text-[#0d3d66] mb-6">
              Lorem <span className="font-bold">ipsum dolor sit amet</span>, consectetur adipiscing elit. 
              Quisque vulputate enim leo, a bibendum risus venenatis ut. Donec eu ultricies augue.
            </p>
            <button className="bg-[#f2a03d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d88d2b] transition">
              Conheça nossos fóruns
            </button>
          </div>

          {/* Imagem */}
          <div className="flex-1">
            <img
              src="/img2.png" // trocar pela imagem correta
              alt="Você"
              className="w-full h-80 object-cover rounded-tr-[80px] rounded-bl-[80px] shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
