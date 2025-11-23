"use client";

import { useState } from "react";
import Post from "./Post";

type PostItem = {
  id: string;
  user: string;
  role: string;
  avatar: string;
  content: string;
  media?: string;
};

export default function Feed() {
  const [newContent, setNewContent] = useState("");

  const [posts, setPosts] = useState<PostItem[]>([
    {
      id: "p1",
      user: "Miguel Ángel Durán",
      role: "Desarrollador Frontend",
      avatar: "/avatarHombre1.jpg",
      content: "¿Te da miedo hablar en inglés? Practica con este recurso...",
      media: "/post1.jpg",
    },
    {
      id: "p2",
      user: "Karla Riera",
      role: "Especialista en IA",
      avatar: "/avatarMujer.jpg",
      content: "Compartiendo un artículo sobre IA.",
      media: "/postGif1.gif",
    },
    {
      id: "p3",
      user: "Carlos Luis Núñez",
      role: "Desarrollador Frontend | Next.js",
      avatar: "/avatarHombre.jpg",
      content: "Aprenda NextJS en 7 minutos",
      media: "/NextJS.mp4",
    },
  ]);

  const handleCreatePost: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const content = newContent.trim();
    if (!content) return;

    const newPost: PostItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      user: "Carlos Luis Núñez",
      role: "Desarrollador Frontend | Next.js",
      avatar: "/avatarHombre.jpg",
      content,
      media: "/post1.jpg",
    };

    setPosts((prev) => [newPost, ...prev]);

    setNewContent("");
  };

  const handleDelete = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (id: string, newContent: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, content: newContent } : p))
    );
  };

  return (
    <div className="flex-1">
      <div className="bg-white p-4 rounded shadow mb-4">
        <form onSubmit={handleCreatePost} className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="/avatarHombre.jpg"
              alt="Profile"
              className="w-15 h-15 object-cover rounded-full border-2 border-[#0A66C2] mx-auto"
            />
            <div className="flex flex-col md:flex-row md:items-center gap-2 flex-1">
              <input
                type="text"
                placeholder="Escribe la descripción de tu publicación…"
                className="border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] flex-1"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />

              <button
                type="submit"
                className="bg-[#0A66C2] text-white px-4 py-2 rounded-full hover:bg-[#084f97] transition md:ml-2"
              >
                Publicar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex-1">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <p className="text-lg font-semibold">No hay publicaciones</p>
            <p className="text-sm">¿Quieres ser el primero en publicar?</p>
          </div>
        ) : (
          posts.map((p) => (
            <Post
              key={p.id}
              id={p.id}
              user={p.user}
              role={p.role}
              avatar={p.avatar}
              content={p.content}
              media={p.media}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}
