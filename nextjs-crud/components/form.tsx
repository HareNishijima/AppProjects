import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export const Form = () => {
  return (
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
  );
}
