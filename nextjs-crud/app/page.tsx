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
        <ul className="max-w-md">
          <li className="w-16 bg-white border rounded">a</li>
          <li className="w-16 bg-white border rounded">b</li>
          <li className="w-16 bg-white border rounded">c</li>
        </ul>
      </div>
    </main>
  );
}
