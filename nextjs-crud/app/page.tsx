import Link from "next/link";

export default function Top() {
  const posts = [
    {
      id: 1,
      top: "🕳",
      content: `content1\ncontent2\ncontent3`,
    },
    {
      id: 2,
      top: "❗",
      content: "content1\ncontent2",
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
          <div className="py-2">
            <div className="flex bg-white border rounded p-2">
              <div className="flex justify-center items-center h-14 w-14">
                <div className="text-4xl">❓</div>
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="text-xl h-full whitespace-pre-wrap outline-none"
                  placeholder="inputText"
                />
              </div>
            </div>
          </div>

          <div className="w-full border my-1"></div>

          <ul>
            {posts.map((post) => (
              <div className="py-2" key={post.id}>
                <li className="flex bg-white border rounded p-2">
                  <div className="flex justify-center items-center h-14 w-14">
                    <div className="text-4xl">{post.top}</div>
                  </div>
                  <div className="flex">
                    <div className="text-xl h-full whitespace-pre-wrap">{post.content}</div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
