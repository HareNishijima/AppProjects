import Link from "next/link";

export default function Top() {
  const posts = [
    {
      id: 1,
      top: "😀",
      content: "content1",
    },
    {
      id: 2,
      top: "😥",
      content: "content2",
    },
    {
      id: 3,
      top: "😎",
      content: "content3",
    },
  ];

  return (
    <main>
      <header className="flex bg-sky-400">
        <Link href="/">
          <div className="flex items-center text-3xl m-3 font-bold text-white">CRUD App</div>
        </Link>
      </header>
      <div className="flex justify-center">
        <div className="max-w-md w-full">
          <ul>
            {posts.map((post) => (
              <div className="p-2">
                <li className="bg-white border rounded flex items-center" key={post.id}>
                  <div className="text-4xl p-4">{post.top}</div>
                  <div className="text-xl">{post.content}</div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
