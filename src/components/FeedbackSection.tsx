import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

type FeedBackType = {
  id: string | number;
  name: string;
  text: string;
};

const feedbacks: FeedBackType[] = [
  { id: 1, name: "Kevin Pereira de Sá", text: "Meu sofá ficou zero! Sensacional, tenho duas crianças e acaba se suja muito, porém ficou zerado!" },
  { id: 2, name: "Anderson Cr", text: "Excelente atendimento da equipe! Pontuais, educados e organizados! Sofa cheiroso e limpo, parece outro!" },
  
  {
    id: 3, name: "liih_ cristina", text: "Solicitei o serviço de higienizaçao do meu sofá e o serviço foi excelente , meu sofá ficou limpinho e muito cheiroso, e ainda recebi um mimo, um aromatizador finalizador da higienizaçao. Equipe super atenciosa e simpática, desde o atendimento via WhatsApp como pessoalmente.Com certeza ganhou uma cliente.Recomendo!" },
  { id: 4, name: "Renata Maia", text: "A empresa fez a limpeza das minhas cadeiras, que estavam encardidas, e as mesmas ficaram parecendo novas!" },
  { id: 5, name: "Maria Alice B. S. Kernbichler", text: "Excelente" },


  ];

export default function FeedbackSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="feedback" className="w-full bg-[#e5f6fb] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#0d3d66]">O que nossos clientes dizem</h2>

        <div className="relative">
          <Swiper
            loop={true}
            spaceBetween={30}

            slidesPerView={isMobile ? 1 : 2}
            navigation={!isMobile}
            className="px-4 pb-10" // padding bottom para os botões

          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full text-left border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#0d3d66] font-semibold">{feedback.name}</h3>

                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                  </div>
                  <p className="text-[#0d3d66] text-base">{feedback.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
