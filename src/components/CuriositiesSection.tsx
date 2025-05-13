import { useState } from "react";

interface Curiosity {
  id: number;
  title: string;
  videoUrl: string;
  description: string;
}

const curiosities: Curiosity[] = [
  {
    id: 1,
    title: "Evite Acidentes com Líquidos: Impermeabilize Seus Estofados e Proteja Seu Lar!",
    videoUrl: "https://www.youtube.com/embed/bkjOfiCQrNY",
    description: "No vídeo de hoje, mostramos como a impermeabilização de estofados pode salvar seus móveis de acidentes com líquidos! Descubra como o produto ideal pode proteger seus sofás e poltronas contra manchas e danos, garantindo mais durabilidade e facilidade na limpeza. Não perca essa dica para manter sua casa sempre limpa e arrumada!",
  },
  {
    id: 2,
    title: "Ácaros: O Inimigo Invisível Que Pode Estar na Sua Casa!",
    videoUrl: "https://www.youtube.com/embed/0A6eKFX5qD4",
    description: "Descubra os riscos invisíveis que vivem no seu colchão.",
  },
  {
    id: 3,
    title: "Veja Todos os Nossos Serviços em Ação – Qualidade e Cuidado do Início ao Fim!",
    videoUrl: "https://www.youtube.com/embed/pJ68Nmjgtj0",
    description: "Neste vídeo, você confere na prática todos os nossos serviços em ação! Da limpeza e impermeabilização de estofados à higienização de colchões e muito mais. Mostramos como trabalhamos com dedicação, técnica e produtos de qualidade para entregar resultados que realmente fazem a diferença. Assista até o final e descubra por que somos referência em cuidado com o seu lar!",
  },
   {
    id: 4,
    title: "Alergias Noturnas: O Que Você Precisa Saber para Dormir Melhor",
    videoUrl: "https://www.youtube.com/embed/SszSumgWLrc",
    description: "Você sabia que suas alergias podem estar prejudicando seu sono? Neste vídeo, explicamos como os ácaros e outros alérgenos podem afetar sua saúde durante a noite. Descubra dicas essenciais para melhorar a qualidade do seu descanso e acordar renovado, sem os impactos das alergias!",
  },
   {
    id: 5,
    title: "Conheça Nossa Estrutura e Equipamentos Profissionais de Limpeza",
    videoUrl: "https://www.youtube.com/embed/2jMd0xX3V4k",
    description: "Neste vídeo, abrimos as portas da nossa empresa para você! Apresentamos nossa estrutura completa e os equipamentos profissionais que utilizamos para garantir um serviço de excelência. Tudo pensado para oferecer resultados eficientes, seguros e de alta qualidade. Veja como trabalhamos nos bastidores para cuidar do seu estofado com o máximo de tecnologia e dedicação!",
  },

];

export default function CuriositiesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <section id="curiosidades" className="bg-white w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0d3d66] mb-10">
          Curiosidades sobre Higienização
        </h2>

        <div className="divide-y border border-[#c7e9f4] rounded-lg overflow-hidden">
          {curiosities.map(({ id, title, description, videoUrl }) => (
            <div key={id} className="group">
              <button
                onClick={() => handleToggle(id)}
                className="w-full flex justify-between items-center px-6 py-4 bg-[#c7e9f4] hover:bg-[#b3ddea] text-[#0d3d66] font-semibold transition"
              >
                {title}
                <span className={`transition-transform ${activeId === id ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeId === id ? "max-h-[1000px] py-4" : "max-h-0"
                  }`}
              >
                <p className="text-[#0d3d66] mb-4">{description}</p>
                <div className="aspect-video">
                  <iframe
                    src={videoUrl}
                    title={title}
                    allowFullScreen
                    className="w-full h-full rounded-lg border border-gray-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
