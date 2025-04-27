
const curiosities = [
    { title: "Como funciona a impermeabilização?", videoUrl: "/videos/video1.mp4" },
    { title: "Dicas para conservar estofados", videoUrl: "/videos/video2.mp4" },
    { title: "Importância da limpeza profunda", videoUrl: "/videos/video3.mp4" },
];

export default function CuriositiesSection() {
    return (
        <section id="curiosidades" className="bg-white py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d3d66] mb-12">
                Curiosidades
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {curiosities.map((item, index) => (
                    <div key={index} className="bg-[#e5f6fb] rounded-2xl overflow-hidden shadow-lg">
                        <video
                            src={item.videoUrl}
                            controls
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-[#0d3d66]">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
