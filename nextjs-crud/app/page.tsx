import Link from "next/link";
import { getPosts, PostData } from "./lib/data/post";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Post from "@/components/posts";

export default async function Top() {
  const posts: PostData[] = await getPosts();

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
            <div className="bg-white border rounded p-2">
              <div className="flex">
                <div className="flex justify-center items-center h-14 w-14">
                  <div className="text-4xl">❓</div>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    name="content"
                    className="text-xl h-full whitespace-pre-wrap outline-none"
                    placeholder="inputText"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-sky-400 rounded-full w-16 h-8 flex justify-center">
                  <PaperAirplaneIcon className="w-6 h-full text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full border my-1"></div>

          <Post posts={posts} />

        </div>
      </div>
    </main>
  );
}
