"use client";
import { PostData } from "../app/lib/data/post";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon as PencilIconOutline}from "@heroicons/react/24/outline";
import { PencilIcon as PencilIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

type PropsData = {
  post: PostData;
  loadPosts: () => void;
};

export const Post = (props: PropsData)=>{
	const post = props.post;
	const loadPosts: () => void = props.loadPosts;

  const [editPost, setEditPost] = useState(false);

  const handleDeleteButton = async (id: string) => {
    const res = await fetch("/api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    console.log(res);
    await loadPosts();
  };

  const handleUpdateButton = async (id: string) => {
    const data = {
      id: id,
      top: "✏",
      content: "updated",
    };
    const res = await fetch("/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    await loadPosts();
  };

	return(
		<>
			<div className="py-2">
          <li className="flex justify-between bg-white border rounded p-2">
            <div className="flex justify-center items-center h-14 w-14">
              <div className="text-4xl">{post.top}</div>
            </div>
            <div className="flex grow">
              <div className="text-xl h-full whitespace-pre-wrap">{post.content}</div>
            </div>
            <div className="flex gap-x-2 items-end">
              <button onClick={() => setEditPost(!editPost)}>
                {editPost ? (
                  <PencilIconSolid className="h-6 w-6 text-blue-400" />
                ) : (
                  <PencilIconOutline className="h-6 w-6 text-gray-400" />
                )}
              </button>
              <button onClick={() => handleDeleteButton(post.id)}>
                <TrashIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
          </li>
        </div>
		</>
	)
}