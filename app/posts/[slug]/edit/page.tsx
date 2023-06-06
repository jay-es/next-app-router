import { getPost } from '@jay-es/jsonplaceholder-client';
import Link from 'next/link';
import { Form } from './Form';
import type { PageProps } from '../types';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `Edit: Post #${params.slug}`,
  };
}

export default async function PostEdit({ params }: PageProps) {
  const postId = Number(params.slug);
  const post = await getPost(postId);

  return (
    <>
      <h1>Edit Post</h1>

      <Form post={post} />

      <div className="space-x-4">
        <Link href={`/posts/${postId}`}>&lt; back</Link>
      </div>
    </>
  );
}
