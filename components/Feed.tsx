import Post from "./Post";

export default function Feed() {
  return (
    <div className="flex-1">
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex items-center space-x-3">
          <div className=" rounded">
            <img
              src="/avatar.jpg"
              alt="Profile"
              className="w-15 h-15 rounded-full border-2 border-[#0A66C2] mx-auto"
            />
          </div>
          <input
            type="text"
            placeholder="Crear publicación"
            className="flex-1 border rounded-full px-3 py-2"
          />
        </div>

        <div className="flex justify-between mt-4 text-gray-600">
          <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
            📷 <span>Foto</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
            🎥 <span>Video</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
            ✍️ <span>Escribir artículo</span>
          </button>
        </div>
      </div>

      <Post
        user="Miguel Ángel Durán"
        content="¿Te da miedo hablar en inglés? Practica con este recurso..."
      />
      <Post user="Karla Riera" content="Compartiendo un artículo sobre IA." />
    </div>
  );
}
