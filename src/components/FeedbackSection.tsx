import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';

type FeedBackType = {
    id: string | number,
    name: string,
    text:string
}

const feedbacks: FeedBackType[] = [
    { id: 1 ,name: "Carlos Silva", text: "Serviço excelente! Meus estofados ficaram como novos!" },
    { id: 2 , name: "Mariana Souza", text: "Atendimento rápido e de muita qualidade. Recomendo!" },
    {  id: 3 ,name: "João Pedro", text: "Ótimo custo-benefício e equipe muito profissional!" },
];

export default function FeedbackSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize(); // Chamar já na montagem
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <section id="feedback" className="w-full bg-[#e5f6fb] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-[#0d3d66]">O que nossos clientes dizem</h2>
  

  
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 2}
            navigation={!isMobile}
            className="px-4"
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between">
                  <p className="text-[#0d3d66] text-lg mb-6">"{feedback.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
}
