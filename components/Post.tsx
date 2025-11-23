"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaPaperPlane,
  FaEllipsisH,
} from "react-icons/fa";

type PostProps = {
  id: string;
  user: string;
  role: string;
  avatar: string;
  content: string;
  media?: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, newContent: string) => void;
};

const isImageFile = (url: string) =>
  url.startsWith("data:image/") || /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(url);
const isVideoFile = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

export default function Post({
  id,
  user,
  role,
  avatar,
  content,
  media,
  onDelete,
  onEdit,
}: PostProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);

  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [contentState, setContentState] = useState(content);
  const [contentDraft, setContentDraft] = useState(content);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    if (showMenu) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [showMenu]);

  const toggleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      setLikeCount((c) => (next ? c + 1 : Math.max(0, c - 1)));
      return next;
    });
  };
  const toggleComments = () => setShowComments((v) => !v);

  const handleAddComment: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const text = commentText.trim();
    if (!text) return;
    setCommentList((list) => [text, ...list]);
    setCommentCount((c) => c + 1);
    setCommentText("");
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowMenu(false);
    setContentDraft(contentState);
  };

  const handleDelete = () => {
    onDelete?.(id);
    setShowMenu(false);
  };

  const saveEdit = () => {
    const newText = contentDraft.trim();
    if (!newText) return;

    setContentState(newText);
    setIsEditing(false);

    onEdit?.(id, newText);
  };

  const cancelEdit = () => {
    setContentDraft(contentState);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
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

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu((s) => !s);
            }}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
            aria-haspopup="menu"
            aria-expanded={showMenu}
            aria-label="Más opciones"
            title="Más opciones"
          >
            <FaEllipsisH />
          </button>

          {showMenu && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded z-10"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit();
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                role="menuitem"
              >
                Editar publicación
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                role="menuitem"
              >
                Eliminar publicación
              </button>
            </div>
          )}
        </div>
      </div>

      {!isEditing ? (
        <p className="mt-3">{contentState}</p>
      ) : (
        <div className="mt-3 space-y-2">
          <textarea
            value={contentDraft}
            onChange={(e) => setContentDraft(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            rows={3}
            placeholder="Edita tu publicación…"
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={cancelEdit}
              className="px-3 py-2 rounded border hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={saveEdit}
              className="px-3 py-2 rounded bg-[#0A66C2] text-white hover:bg-[#084f97]"
            >
              Guardar
            </button>
          </div>
        </div>
      )}

      {media && (
        <div className="mt-3">
          {isImageFile(media) ? (
            <img
              src={media}
              alt="Post media"
              className="rounded w-full max-h-[480px] object-cover"
            />
          ) : isVideoFile(media) ? (
            <video
              src={media}
              controls
              className="rounded w-full max-h-[480px] object-contain bg-black"
              preload="metadata"
            />
          ) : null}
        </div>
      )}

      <div className="flex justify-between text-gray-500 text-sm mt-3 border-b pb-2">
        <span>{likeCount} Me gusta</span>
        <span>{commentCount} comentarios</span>
        <span>{shareCount} veces compartido</span>
      </div>

      <div className="flex flex-wrap justify-around mt-3 text-gray-600">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleLike();
          }}
          className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition ${
            liked ? "text-[#0A66C2]" : ""
          }`}
          aria-pressed={liked}
        >
          <FaThumbsUp /> <span>Me gusta</span>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleComments();
          }}
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
          aria-expanded={showComments}
        >
          <FaComment /> <span>Comentar</span>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShareCount((c) => c + 1);
          }}
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
        >
          <FaShare /> <span>Volver a publicar</span>
        </button>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
        >
          <FaPaperPlane /> <span>Enviar</span>
        </button>
      </div>

      {showComments && (
        <>
          <form onSubmit={handleAddComment} className="mt-3 flex gap-2">
            <img
              src={avatar}
              alt="Tu avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Escribe un comentario…"
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#0A66C2] text-white rounded-full hover:bg-[#084f97] transition"
            >
              Publicar
            </button>
          </form>

          {commentList.length > 0 && (
            <ul className="mt-3 space-y-3">
              {commentList.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover mt-1"
                  />
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <p className="text-sm">
                      <span className="font-semibold">{user}</span>{" "}
                      <span className="text-gray-600">{role}</span>
                    </p>
                    <p>{c}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
