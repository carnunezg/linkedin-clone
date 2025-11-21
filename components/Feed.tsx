import { FaImage, FaPen, FaVideo } from "react-icons/fa";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="flex-1">
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex items-center space-x-3">
          <div className=" rounded">
            <img
              src="/avatarHombre.jpg"
              alt="Profile"
              className="w-15 h-15 object-cover rounded-full border-2 border-[#0A66C2] mx-auto"
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
            <FaImage /> <span>Foto</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
            <FaVideo /> <span>Video</span>
          </button>
          <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
            <FaPen /> <span>Escribir artículo</span>
          </button>
        </div>
      </div>

      <div className="flex-1">
        <Post
          user="Miguel Ángel Durán"
          role="Desarrollador Frontend"
          avatar="/avatarHombre1.jpg"
          content="¿Te da miedo hablar en inglés? Practica con este recurso..."
          media="/post1.jpg"
          likes={120}
          comments={15}
          shares={8}
        />
        <Post
          user="Karla Riera"
          role="Especialista en IA"
          avatar="/avatarMujer.jpg"
          content="Compartiendo un artículo sobre IA."
          media="/postGif1.gif"
          likes={80}
          comments={10}
          shares={5}
        />
      </div>
    </div>
  );
}
