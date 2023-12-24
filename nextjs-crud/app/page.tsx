import Link from "next/link";

export default function Top() {
  return (
    <main>
      <header className="flex bg-sky-400">
        <Link href="/">
          <div className="flex items-center text-3xl m-3 font-bold text-white">CRUD App</div>
        </Link>
      </header>
      <div className="flex justify-center">
        <div className="max-w-md w-full">
          <ul>
            <li className="bg-white border rounded">a</li>
            <li className="bg-white border rounded">b</li>
            <li className="bg-white border rounded">c</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
