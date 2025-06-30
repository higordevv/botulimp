import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: "Higienização de Estofados",
      description: "Remoção de manchas, sujeiras, ácaros e bactérias com produtos seguros e eficazes.",
    },
    {
      title: "Impermeabilização",
      description: "Proteção contra a penetração de líquidos indesejaveis, sem alterar as características do seu estofado, mantendo seu estofado novo por mais tempo",
    },
    {
      title: "Limpeza de Tapetes",
      description: "Procedimento especializado para manter seus tapetes limpos, sem odores e bem cuidados.",
    },
  ];

  return (
    <section id="servicos" className="bg-[#e5f6fb] py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
