import { getPosts, PostData } from "./lib/data/post";

import Post from "@/components/posts";
import Form from "@/components/form";

export default async function Top() {
  const posts: PostData[] = await getPosts();

  return (
    <main>
      <div className="flex justify-center">
        <div className="max-w-md w-full">
          <Form />

          <div className="w-full border my-1"></div>

          <Post posts={posts} />
        </div>
      </div>
    </main>
  );
}
