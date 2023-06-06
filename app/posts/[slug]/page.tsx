import { getPost, getUser } from '@jay-es/jsonplaceholder-client';
import Link from 'next/link';
import type { PageProps } from './types';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `Post #${params.slug}`,
  };
}

export default async function Post({ params }: PageProps) {
  const postId = Number(params.slug);
  const post = await getPost(postId);
  const author = await getUser(post.userId);

  return (
    <>
      <h1>{post.title}</h1>
      <h2 className="-mt-6">by: {author.name}</h2>
      <p>{post.body}</p>

      <div className="space-x-4">
        <Link href={`/posts`}>&lt; back</Link>
        <Link href={`/posts/${postId}/edit`}>edit</Link>
      </div>
    </>
  );
}
