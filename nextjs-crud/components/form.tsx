"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { PostData, postPosts } from "@/app/lib/data/post";
import { FormEvent, SetStateAction, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export const Form = (props: { loadPosts: () => void }) => {
  const [emojiPickerEnabled, setEmojiPickerEnabled] = useState<boolean>(false);
  const [postTop, setPostTop] = useState<string>("😀");
  const [postContent, setPostContent] = useState<string>("");

  const handleEmojiSelect = (emoji: any) => {
    setPostTop(emoji.native);
    setEmojiPickerEnabled(false);
  };

  const handleEmojiPicker = () => {
    const nextEmojiPickerEnabled = !emojiPickerEnabled;
    setEmojiPickerEnabled(nextEmojiPickerEnabled);
  };

  const handlePostContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value);
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

    setPostTop("😀");
    setPostContent("");

    await props.loadPosts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-2">
        <div className="bg-white border rounded p-2">
          <div className="flex">
            <div className="relative flex justify-center items-center h-14 w-14">
              <button type="button" onClick={handleEmojiPicker} className="text-4xl">
                {postTop}
              </button>
              <div className="absolute top-14 left-0">
                {emojiPickerEnabled ? <Picker onEmojiSelect={handleEmojiSelect} /> : <></>}
              </div>
            </div>
            <div className="flex">
              <textarea
                name="content"
                className="text-xl h-full whitespace-pre-wrap outline-none"
                placeholder="input text"
                value={postContent}
                onChange={handlePostContent}
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
    </form>
  );
};
