import Link from 'next/link';
import type { PageProps } from './types';
import type { Metadata } from 'next';
import { Post } from './_components/post';
import { getPost } from '@jay-es/jsonplaceholder-client';

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const postId = Number(params.slug);
  const post = await getPost(postId);

  return {
    title: post.title,
  };
}

export default async function PostPage({ params }: PageProps) {
  const postId = Number(params.slug);

  return (
    <>
      <Post postId={postId} />

      <div className="space-x-4">
        <Link href={`/posts`}>&lt; back</Link>
        <Link href={`/posts/${postId}/edit`}>edit</Link>
      </div>
    </>
  );
}
