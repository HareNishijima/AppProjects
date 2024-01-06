import { PostData } from "../app/lib/data/post";

type PropsData = {
  posts: PostData[];
};

export const Post = (props: PropsData) => {
  let posts: PostData[] = props.posts;

  return (
    <ul>
      {posts?.map((post, idx) => (
        <div className="py-2" key={idx}>
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
  );
};
