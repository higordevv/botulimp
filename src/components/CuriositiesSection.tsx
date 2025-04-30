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
    title: "Como funciona a impermeabilização de sofás?",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    description: "Veja como o processo protege seu sofá contra líquidos e sujeiras.",
  },
  {
    id: 2,
    title: "A importância da higienização de colchões",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    description: "Descubra os riscos invisíveis que vivem no seu colchão.",
  },
  {
    id: 3,
    title: "Limpeza profissional x caseira: qual a diferença?",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    description: "Compare os resultados entre limpezas caseiras e profissionais.",
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
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeId === id ? "max-h-[1000px] py-4" : "max-h-0"
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
