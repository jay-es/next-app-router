import { getPost, getUser } from '@jay-es/jsonplaceholder-client';
import Link from 'next/link';

export default async function Post({ params }) {
  const post = await getPost(parseInt(params.slug, 10));
  const author = await getUser(post.userId);

  return (
    <main>
      <h1>{post.title}</h1>
      <h2 className="-mt-6">by: {author.name}</h2>
      <p>{post.body}</p>

      <Link href={`/posts`}>&lt; back</Link>
    </main>
  );
}
