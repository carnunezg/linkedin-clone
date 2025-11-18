export default function ProfileHeader() {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <div className="h-32 bg-[#0A66C2] from-[#0A66C2] to-blue-700"></div>

      <div className="p-4 relative">
        <img src="/avatar.jpg" alt="Profile" className="w-24 h-24 rounded" />
        <h2 className="text-xl font-bold">Carlos L. Núñez G.</h2>
        <p className="text-gray-600">
          San Pedro De La Paz · Chile · Información de contacto
        </p>
        <div className="mt-3 flex space-x-2">
          <button className="bg-[#0A66C2] text-white px-4 py-1 rounded">
            Estoy interesado
          </button>
          <button className="border px-4 py-1 rounded">Agregar sección</button>
          <button className="border px-4 py-1 rounded">Más...</button>
        </div>
      </div>
    </div>
  );
}
