import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Menu',
};

export default function Home() {
  return (
    <>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link href={`/posts`}>Posts</Link>
        </li>
        <li>
          <Link href={`/counter`}>Counter</Link>
        </li>
        <li>
          <Link href={`/revalidate`}>Revalidate</Link>
        </li>
      </ul>
    </>
  );
}
