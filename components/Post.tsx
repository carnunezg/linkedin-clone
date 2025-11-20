// interface PostProps {
//   user: string;
//   content: string;
// }

export default function Post({
  user,
  content,
}: {
  user: string;
  content: string;
}) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="font-bold">{user}</div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
