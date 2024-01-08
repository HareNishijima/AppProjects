"use client";
import { getPosts, PostData } from "./lib/data/post";

import { Post } from "@/components/posts";
import { Form } from "@/components/form";
import { useEffect, useState } from "react";

export default function Top() {
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("api");
      const posts = await res.json();
      setPosts(posts);
    })();
  }, []);

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
