import {
  FaLinkedin,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-2">
      <div className="flex items-center space-x-3">
        <FaLinkedin className="text-[#0A66C2] text-3xl" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-gray-100 rounded px-3 py-1 text-sm focus:outline-none"
        />
        <FaSearch />
      </div>
      <div className="flex space-x-6 text-gray-600 text-xl">
        <FaHome />
        <FaUserFriends />
        <FaBriefcase />
        <FaCommentDots />
        <FaBell />
      </div>
    </nav>
  );
}
