"use client";

import { useState } from "react";
import { FaThumbsUp, FaComment, FaShare, FaPaperPlane } from "react-icons/fa";

type PostProps = {
  user: string;
  role: string;
  avatar: string;
  content: string;
  media?: string;
  likes: number;
  comments: number;
  shares: number;
};

export default function Post({
  user,
  role,
  avatar,
  content,
  media,
  likes,
  comments,
  shares,
}: PostProps) {
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={user}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div>
          <h3 className="font-bold">{user}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <p className="mt-3">{content}</p>
      {media && <img src={media} alt="Post media" className="mt-3 rounded" />}

      <div className="flex justify-between text-gray-500 text-sm mt-3 border-b pb-2">
        <span>{likeCount} Me gusta</span>
        <span>{comments} comentarios</span>
        <span>{shares} veces compartido</span>
      </div>

      <div className="flex justify-around mt-3 text-gray-600">
        <button
          onClick={() => setLikeCount(likeCount + 1)}
          className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded"
        >
          <FaThumbsUp /> <span>Me gusta</span>
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded">
          <FaComment /> <span>Comentar</span>
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded">
          <FaShare /> <span>Volver a publicar</span>
        </button>
        <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded">
          <FaPaperPlane /> <span>Enviar</span>
        </button>
      </div>
    </div>
  );
}
