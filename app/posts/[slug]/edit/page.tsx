import { getPost } from '@jay-es/jsonplaceholder-client';
import Link from 'next/link';
import { Form } from './Form';

export default async function PostEdit({ params }) {
  const postId = parseInt(params.slug, 10);
  const post = await getPost(postId);

  return (
    <main>
      <h1>Edit Post</h1>

      <Form post={post} />

      <div className="space-x-4">
        <Link href={`/posts/${postId}`}>&lt; back</Link>
      </div>
    </main>
  );
}
