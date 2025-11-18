export default function SidebarRight() {
  return (
    <aside className="w-72 bg-white rounded shadow p-4">
      <div className="mb-4">
        <h4 className="font-bold">Sugerido para ti</h4>
        <div className="flex items-center mt-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          <div className="ml-2">
            <p className="font-bold">Karla Riera</p>
            <p className="text-sm text-gray-500">Lorem Ipsum Dolor</p>
          </div>
        </div>
        <button className="mt-2 bg-[#0A66C2] text-white px-4 py-1 rounded">
          Seguir
        </button>
      </div>
    </aside>
  );
}
