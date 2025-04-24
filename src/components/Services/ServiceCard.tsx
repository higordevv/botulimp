
type ServiceCardType = {
    title: string,
    description: string
}

export default function ServiceCard({ title, description }: ServiceCardType) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
}
