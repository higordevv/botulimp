export default function About() {
  return (
    <section id="sobre" className="relative min-h-screen flex flex-col justify-center bg-white px-6 py-16 overflow-hidden">
      
      {/* Fundo Azul Esquerdo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[#c7e9f4] hidden md:block" />

      {/* Container dos Blocos */}
      <div className="relative z-10 flex flex-col gap-20 max-w-7xl mx-auto">

        {/* Bloco Você */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-[#0d3d66] mb-2">Soluções para</p>
            <h2 className="text-4xl font-extrabold text-[#f2a03d] mb-6">Você</h2>
            <p className="text-[#0d3d66] mb-6">
             Entre em contato e descubra como podemos transformar seu sofá em um lugar ainda mais confortável e saudável! 
            </p>
            
            <a className="bg-[#f2a03d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d88d2b] transition" href="https://api.whatsapp.com/send?phone=5514991664052&text=https%3A%2F%2Fcontate.me%2Fbotulimp" >
              Entre em contato
            </a>
          </div>

          {/* Imagem */}
          <div className="flex-1">
            <img
              src="/about2.jpg"
              alt="Você"
              className="w-full h-auto object-fit rounded-tr-[80px] rounded-bl-[80px] shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
