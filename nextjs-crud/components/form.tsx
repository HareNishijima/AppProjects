"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { PostData, postPosts } from "@/app/lib/data/post";
import { FormEvent, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export const Form = (props: { loadPosts: () => void }) => {
  const [postTop, setPostTop] = useState<string>("😀");

  const handleEmojiSelect = (emoji: any) => {
    setPostTop(emoji.native);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const top: string = postTop;
    const content: string = typeof formData.get("content") === "string" ? (formData.get("content") as string) : "";

    const bodyData = {
      top: top,
      content: content,
    };

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    console.log(res);
    await props.loadPosts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-2">
        <div className="bg-white border rounded p-2">
          <div className="flex">
            <div className="flex justify-center items-center h-14 w-14">
              <div className="text-4xl">{postTop}</div>
            </div>
            <div className="flex">
              <input
                type="text"
                name="content"
                className="text-xl h-full whitespace-pre-wrap outline-none"
                placeholder="inputText"
              />
            </div>
            <Picker className="static" onEmojiSelect={handleEmojiSelect} />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-sky-400 rounded-full w-16 h-8 flex justify-center">
              <PaperAirplaneIcon className="w-6 h-full text-white" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
