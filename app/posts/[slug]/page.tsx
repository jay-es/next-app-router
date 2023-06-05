import { getPost, getUser } from '@jay-es/jsonplaceholder-client';
import Link from 'next/link';

export default async function Post({ params }) {
  const postId = parseInt(params.slug, 10);
  const post = await getPost(postId);
  const author = await getUser(post.userId);

  return (
    <main>
      <h1>{post.title}</h1>
      <h2 className="-mt-6">by: {author.name}</h2>
      <p>{post.body}</p>

      <div className="space-x-4">
        <Link href={`/posts`}>&lt; back</Link>
        <Link href={`/posts/${postId}/edit`}>edit</Link>
      </div>
    </main>
  );
}
