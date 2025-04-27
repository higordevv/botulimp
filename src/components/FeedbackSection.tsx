// src/components/FeedbackSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const feedbacks = [
    { name: "Carlos Silva", text: "Serviço excelente! Meus estofados ficaram como novos!" },
    { name: "Mariana Souza", text: "Atendimento rápido e de muita qualidade. Recomendo!" },
    { name: "João Pedro", text: "Ótimo custo-benefício e equipe muito profissional!" },
];

export default function FeedbackSection() {
    return (
        <section id="feedback" className="bg-[#e5f6fb] py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d3d66] mb-12">
                O que dizem nossos clientes
            </h2>

            <div className="max-w-6xl mx-auto">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {feedbacks.map((feedback, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between text-center">
                                <p className="text-[#0d3d66] mb-4">"{feedback.text}"</p>
                                <span className="font-semibold text-[#3ab7bf]">{feedback.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
