import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link href={`/posts`}>Posts</Link>
        </li>
      </ul>
    </main>
  );
}
