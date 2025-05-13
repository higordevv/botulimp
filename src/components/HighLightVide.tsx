export default function HighlightVideo() {
  return (
    <section className="w-full bg-[#c7e9f4] py-16 px-4 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Texto */}
        <div className="flex-1 text-[#0d3d66] text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Você também sente que está perdendo a batalha contra a sujeira?
          </h2>
          <p className="text-lg mb-6">
            Tapetes manchados, sofás com cheirinho estranho e aquela sensação de casa sempre suja, mesmo depois da faxina?
            <br /><br />
            Calma… você não está sozinha nessa!
          </p>
          <p className="font-semibold text-[#3ab7bf]">
            Deixe a Botulimp cuidar da sua casa enquanto você curte sua família ❤️
          </p>
        </div>

        {/* Vídeo responsivo */}
        <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ aspectRatio: '9 / 16' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/-qReeqzeUt8"
              title="YouTube Shorts"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
