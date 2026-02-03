import { FaCheck } from 'react-icons/fa';

interface property {
    name: string;
    features: string[];
}

export default function NeighborhoodsSection({ name, features }: property) {
    return (
        <div className="rounded-xl bg-white p-6 text-gray-800 shadow-lg mt-6 md:mt-0">
            <h3 className="mb-4 border-b pb-2 font-bold">{name}</h3>

            {features.map((feat, fIdx) => (
                <div key={fIdx} className="mb-2 flex gap-3">
                    <FaCheck className="mt-1 text-blue-900" size={14} />
                    <span className="text-sm">{feat}</span>
                </div>
            ))}
        </div>
    );
}
