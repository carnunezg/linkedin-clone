export default function SidebarLeft() {
  return (
    <aside className="w-64 bg-white rounded shadow p-4">
      <div className="text-center">
        <div className="bg-[#0A66C2] p-4 rounded">
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-white mx-auto"
          />
        </div>

        <h2 className="font-bold mt-2">Carlos Luis Núñez</h2>
        <p className="text-sm text-gray-500 text">
          Desarrollador Frontend | Next.js
        </p>
      </div>
      <hr className="my-4" />
      <ul className="space-y-2 text-gray-700 text-sm">
        <li>Visualizaciones del perfil</li>
        <li>Conexiones</li>
        <li>Grupos</li>
        <li>Eventos</li>
      </ul>
    </aside>
  );
}
