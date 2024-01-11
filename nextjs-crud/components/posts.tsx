"use client";
import { PostData } from "../app/lib/data/post";
import { TrashIcon } from "@heroicons/react/24/outline";

type PropsData = {
  posts: PostData[];
};

export const Post = (props: PropsData) => {
  let posts: PostData[] = props.posts;

  const handleDeleteButton = (id: string) => {
    console.log(id);
  };

  return (
    <ul>
      {posts?.map((post, idx) => (
        <div className="py-2" key={idx}>
          <li className="flex justify-between bg-white border rounded p-2">
            <div className="flex justify-center items-center h-14 w-14">
              <div className="text-4xl">{post.top}</div>
            </div>
            <div className="flex grow">
              <div className="text-xl h-full whitespace-pre-wrap">{post.content}</div>
            </div>
            <div className="flex flex-col justify-end">
              <button onClick={() => handleDeleteButton(post.id)}>
                <TrashIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};
