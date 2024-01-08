"use client";
import { getPosts, PostData } from "./lib/data/post";

import { Post } from "@/components/posts";
import { Form } from "@/components/form";
import { useEffect, useState } from "react";

export default function Top() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostData[]>([]);

  const loadPosts = async () => {
    setIsLoading(true);
    const res = await fetch("api");
    const posts = await res.json();
    setPosts(posts);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      loadPosts();
    })();
  }, []);

  return (
    <main>
      <div className="flex justify-center">
        <div className="max-w-md w-full">
          <Form loadPosts={loadPosts} />

          <div className="w-full border my-1"></div>

          {isLoading ? <div>loading</div> : <Post posts={posts} />}
        </div>
      </div>
    </main>
  );
}
